"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiPostgresql, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: FaJs, category: "frontend" }, { name: "TypeScript", icon: SiTypescript, category: "frontend" },
  { name: "React", icon: FaReact, category: "frontend" }, { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "HTML5", icon: FaHtml5, category: "frontend" }, { name: "CSS3", icon: FaCss3Alt, category: "frontend" },
  { name: "Tailwind", icon: SiTailwindcss, category: "frontend" }, { name: "Node.js", icon: FaNodeJs, category: "backend" },
  { name: "MySQL", icon: SiMysql, category: "backend" }, { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
  { name: "Prisma", icon: SiPrisma, category: "backend" }, { name: "Git", icon: FaGitAlt, category: "tool" }, { name: "GitHub", icon: FaGithub, category: "tool" },
] as const;

const filters = ["all", "frontend", "backend", "tool"] as const;
const currentYear = new Date().getUTCFullYear();
const years = [currentYear, currentYear - 1, currentYear - 2];
type ContributionLevel = "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";
type ContributionCalendar = {
  totalContributions: number;
  months: Array<{ firstDay: string; name: string; totalWeeks: number; year: number }>;
  weeks: Array<{
    firstDay: string;
    contributionDays: Array<{ contributionCount: number; contributionLevel: ContributionLevel; date: string; weekday: number }>;
  }>;
};

function contributionColor(level: ContributionLevel) {
  if (level === "FOURTH_QUARTILE") return "bg-[#39d353]";
  if (level === "THIRD_QUARTILE") return "bg-[#26a641]";
  if (level === "SECOND_QUARTILE") return "bg-[#006d32]";
  if (level === "FIRST_QUARTILE") return "bg-[#0e4429]";
  return "bg-[#ebedf0] dark:bg-[#161b22]";
}

export default function Skills() {
  const [selected, setSelected] = useState<(typeof filters)[number]>("all");
  const [year, setYear] = useState(years[0]);
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [loadingCalendar, setLoadingCalendar] = useState(true);
  const [calendarError, setCalendarError] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Skills");
  const shown = selected === "all" ? skills : skills.filter((skill) => skill.category === selected);
  const es = locale === "es";

  useEffect(() => {
    const controller = new AbortController();
    setLoadingCalendar(true);
    setCalendarError(false);
    fetch(`/api/github-contributions?year=${year}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error();
        return response.json() as Promise<ContributionCalendar>;
      })
      .then((data) => setCalendar(data))
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setCalendar(null);
        setCalendarError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoadingCalendar(false);
      });
    return () => controller.abort();
  }, [year]);

  const monthColumns = calendar?.months.map((month) => {
    const firstDay = new Date(`${month.firstDay}T00:00:00Z`);
    const column = calendar.weeks.findIndex((week) => {
      const start = new Date(`${week.firstDay}T00:00:00Z`);
      const end = new Date(start);
      end.setUTCDate(end.getUTCDate() + 6);
      return firstDay >= start && firstDay <= end;
    });
    return { ...month, column: Math.max(0, column) + 1 };
  }) ?? [];

  return (
    <section aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-heading">{t("title")}</h2>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={t("filterLabel")}>
        {filters.map((filter) => (
          <button key={filter} type="button" onClick={() => setSelected(filter)} aria-pressed={selected === filter} className={`focus-ring rounded-md border px-3 py-1.5 text-xs font-semibold shadow-sm ${selected === filter ? "border-[#1f883d] bg-[#1f883d] text-white dark:border-[#238636] dark:bg-[#238636]" : "border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#f3f4f6] dark:border-[#30363d] dark:bg-[#21262d] dark:hover:bg-[#30363d]"}`}>{t(filter)}</button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {shown.map((skill) => { const Icon = skill.icon; return <div key={skill.name} className="flex items-center gap-2 rounded-full border border-[#d0d7de] bg-[#f6f8fa] px-3 py-1.5 text-xs font-medium dark:border-[#30363d] dark:bg-[#161b22]"><Icon className="size-4 text-[#656d76] dark:text-[#8b949e]" />{skill.name}</div>; })}
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-[minmax(0,1fr)_128px]">
        <div className="min-w-0">
          <div className="mb-2 px-1">
            <h3 className="text-base">{loadingCalendar ? <span className="text-[#656d76] dark:text-[#8b949e]">{es ? "Cargando actividad…" : "Loading activity…"}</span> : calendar ? <><strong>{calendar.totalContributions}</strong> {es ? `contribuciones en ${year}` : `contributions in ${year}`}</> : <span>{es ? `Actividad de ${year}` : `${year} activity`}</span>}</h3>
          </div>
          <div className="rounded-md border border-[#d0d7de] p-3 dark:border-[#30363d] sm:p-4">
            {calendarError ? <div className="flex min-h-36 flex-col items-center justify-center gap-2 text-center"><p className="text-sm font-semibold">{es ? "No se pudo cargar la actividad de GitHub" : "GitHub activity could not be loaded"}</p><a href="https://github.com/main2526" target="_blank" rel="noreferrer" className="text-xs text-[#0969da] hover:underline dark:text-[#2f81f7]">{es ? "Ver perfil en GitHub" : "View GitHub profile"}</a></div> : <div className="overflow-x-auto pb-1">
              <div className="min-w-[735px]">
                <div className="ml-[39px] grid h-5 grid-cols-[repeat(53,10px)] gap-[3px] text-xs">
                  {monthColumns.map((month) => <span key={`${month.firstDay}-${month.name}`} className="whitespace-nowrap capitalize" style={{ gridColumnStart: month.column }}>{new Intl.DateTimeFormat(es ? "es" : "en", { month: "short", timeZone: "UTC" }).format(new Date(`${month.firstDay}T00:00:00Z`))}</span>)}
                </div>
                <div className="flex gap-[7px]">
                  <div className="grid w-8 shrink-0 grid-rows-7 gap-[3px] text-right text-xs leading-[10px]">
                    <span /><span>{es ? "Lun" : "Mon"}</span><span /><span>{es ? "Mié" : "Wed"}</span><span /><span>{es ? "Vie" : "Fri"}</span><span />
                  </div>
                  <div className="grid grid-flow-col grid-rows-7 gap-[3px]" aria-label={es ? `Actividad de contribuciones de ${year}` : `${year} contribution activity`}>
                    {loadingCalendar ? Array.from({ length: 371 }, (_, index) => <span key={`loading-${index}`} className="size-[10px] animate-pulse rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22]" />) : calendar?.weeks.flatMap((week) => Array.from({ length: 7 }, (_, weekday) => {
                      const day = week.contributionDays.find((item) => item.weekday === weekday);
                      return day ? <span key={day.date} title={`${day.contributionCount} ${es ? "contribuciones" : "contributions"} · ${day.date}`} className={`size-[10px] rounded-[2px] border border-black/[.04] ${contributionColor(day.contributionLevel)}`} /> : <span key={`${week.firstDay}-${weekday}`} className="size-[10px] opacity-0" />;
                    }))}
                  </div>
                </div>
                <div className="ml-[39px] mt-3 flex items-center justify-between text-xs text-[#656d76] dark:text-[#8b949e]">
                  <span>{es ? "Aprende cómo contamos las contribuciones" : "Learn how we count contributions"}</span>
                  <div className="flex items-center gap-1"><span>{es ? "Menos" : "Less"}</span>{[0, 1, 2, 3, 4].map((level) => <span key={level} className={`size-[10px] rounded-[2px] ${level === 4 ? "bg-[#39d353]" : level === 3 ? "bg-[#26a641]" : level === 2 ? "bg-[#006d32]" : level === 1 ? "bg-[#0e4429]" : "bg-[#ebedf0] dark:bg-[#161b22]"}`} />)}<span>{es ? "Más" : "More"}</span></div>
                </div>
              </div>
            </div>}
          </div>
        </div>
        <div className="flex gap-1 overflow-x-auto lg:flex-col" aria-label={es ? "Seleccionar año" : "Select year"}>
          {years.map((item) => <button key={item} type="button" onClick={() => setYear(item)} aria-pressed={year === item} className={`focus-ring min-w-24 rounded-md px-4 py-2.5 text-left text-sm lg:w-full ${year === item ? "bg-[#0969da] text-white dark:bg-[#1f6feb]" : "hover:bg-[#f6f8fa] dark:hover:bg-[#161b22]"}`}>{item}</button>)}
        </div>
      </div>
    </section>
  );
}
