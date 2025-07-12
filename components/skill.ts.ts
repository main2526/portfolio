import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si"

export const TechIcons = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  NextJS: SiNextdotjs,
  DotNet: SiDotnet,
  PostgreSQL: SiPostgresql,
  SQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
}


export interface SkillType {
  icon: keyof typeof TechIcons
  color: string
  name: string
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
    icon: "DotNet",
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
    icon: "GitHub",
    color: "#181717",
    name: "GitHub",
  },
]