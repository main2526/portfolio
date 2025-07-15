import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiPrisma,
  SiGithub,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
export const TechIcons = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Csharp: TbBrandCSharp,
  PostgreSQL: SiPostgresql,
  SQL: SiMysql,
  PrismaORM: SiPrisma,
  React: SiReact,
  NextJS: SiNextdotjs,
  Git: SiGit,
  GitHub: SiGithub,
};

export interface SkillType {
  icon: keyof typeof TechIcons;
  color: string;
  name: string;
}

export const skills: SkillType[] = [
  {
    icon: "HTML",
    color: "#E34F26",
    name: "HTML5",
  },
  {
    icon: "CSS",
    color: "#1572B6",
    name: "CSS3",
  },
  {
    icon: "JavaScript",
    color: "#F7DF1E",
    name: "JavaScript",
  },
  {
    icon: "TypeScript",
    color: "#3178C6",
    name: "TypeScript",
  },
  {
    icon: "React",
    color: "#61DAFB",
    name: "React",
  },
  {
    icon: "NextJS",
    color: "#000000",
    name: "Next.js",
  },
  {
    icon: "Csharp",
    color: "#512BD4",
    name: ".NET",
  },
  {
    icon: "PostgreSQL",
    color: "#336791",
    name: "PostgreSQL",
  },
  {
    icon: "SQL",
    color: "#4479A1",
    name: "MySQL",
  },
  {
    icon: "Git",
    color: "#F05032",
    name: "Git",
  },

  {
    icon: "PrismaORM",
    color: "#181717",
    name: "Prisma ",
  },

  {
    icon: "GitHub",
    color: "#181717",
    name: "GitHub",
  },
];
