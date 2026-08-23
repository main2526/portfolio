import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

const GITHUB_LOGIN = "main2526";
const contributionQuery = `
  query Contributions($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          months { firstDay name totalWeeks year }
          weeks {
            firstDay
            contributionDays { contributionCount contributionLevel date weekday }
          }
        }
      }
    }
  }
`;

type GitHubResponse = {
  data?: { user?: { contributionsCollection: { contributionCalendar: unknown } } | null };
  errors?: Array<{ message: string }>;
};

const getContributions = unstable_cache(
  async (year: number) => {
    const token = process.env.GITHUB_TOKEN;
    if (!token) throw new Error("GITHUB_TOKEN is not configured");

    const now = new Date();
    const currentYear = now.getUTCFullYear();
    const from = new Date(Date.UTC(year, 0, 1)).toISOString();
    const to = year === currentYear ? now.toISOString() : new Date(Date.UTC(year, 11, 31, 23, 59, 59)).toISOString();
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "BootsDev-X-Portfolio",
      },
      body: JSON.stringify({ query: contributionQuery, variables: { login: GITHUB_LOGIN, from, to } }),
    });

    const payload = (await response.json()) as GitHubResponse;
    const calendar = payload.data?.user?.contributionsCollection.contributionCalendar;
    if (!response.ok || payload.errors?.length || !calendar) {
      throw new Error(payload.errors?.[0]?.message ?? "GitHub contribution data is unavailable");
    }
    return calendar;
  },
  ["github-contribution-calendar"],
  { revalidate: 900 }
);

export async function GET(request: NextRequest) {
  const currentYear = new Date().getUTCFullYear();
  const year = Number(request.nextUrl.searchParams.get("year") ?? currentYear);
  if (!Number.isInteger(year) || year < 2008 || year > currentYear) {
    return NextResponse.json({ error: "Invalid year." }, { status: 400 });
  }

  try {
    const calendar = await getContributions(year);
    return NextResponse.json(calendar, {
      headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" },
    });
  } catch (error) {
    const missingToken = error instanceof Error && error.message.includes("GITHUB_TOKEN");
    return NextResponse.json(
      { error: missingToken ? "GitHub is not configured." : "GitHub data is temporarily unavailable." },
      { status: missingToken ? 503 : 502 }
    );
  }
}
