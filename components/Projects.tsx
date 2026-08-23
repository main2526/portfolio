"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaGithub } from "react-icons/fa";
import { SiClerk, SiLucide, SiNextdotjs, SiPaypal, SiRadixui, SiReact, SiStripe, SiSupabase, SiTailwindcss, SiTypescript, SiZod } from "react-icons/si";
import { Bot, ExternalLink, Layers3, Lock, QrCode, X } from "lucide-react";
import { useTranslations } from "next-intl";

const projects = [
  {
    key: "swiftStake", tech: "TypeScript", color: "#3178c6", github: "https://github.com/main2526/SwiftStake", demo: "https://swiftstake.vercel.app/", locked: false,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs }, { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript }, { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Clerk", icon: SiClerk }, { name: "Stripe", icon: SiStripe },
      { name: "PayPal", icon: SiPaypal }, { name: "Radix UI", icon: SiRadixui },
    ],
  },
  {
    key: "restaurantFoodDelivery", tech: "TypeScript", color: "#3178c6", github: "https://github.com/main2526/tmeal-restaurant-delicius", demo: "https://tdelicius.vercel.app/", locked: false,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs }, { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript }, { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase }, { name: "QR Code", icon: QrCode },
      { name: "Zod", icon: SiZod }, { name: "Lucide", icon: SiLucide },
    ],
  },
  {
    key: "chatbotAI", tech: "TypeScript", color: "#3178c6", github: "https://github.com/main2526/chatbot-api-key.git", demo: "https://bootschatbot.vercel.app/", locked: true,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs }, { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript }, { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "DeepSeek API", icon: Bot }, { name: "Radix UI", icon: SiRadixui },
    ],
  },
] as const;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0, width: 320 });
  const [mounted, setMounted] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const t = useTranslations("Projects");
  const title = useTranslations("TitleP");
  const watch = useTranslations("Watch");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!selectedProject) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setSelectedProject(null);
    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (popoverRef.current?.contains(target) || openerRef.current?.contains(target)) return;
      setSelectedProject(null);
    };
    const closeOnViewportChange = () => setSelectedProject(null);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);
    window.addEventListener("resize", closeOnViewportChange);
    window.addEventListener("scroll", closeOnViewportChange, true);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
      window.removeEventListener("resize", closeOnViewportChange);
      window.removeEventListener("scroll", closeOnViewportChange, true);
    };
  }, [selectedProject]);

  function openTechnologies(project: (typeof projects)[number], button: HTMLButtonElement) {
    if (selectedProject?.key === project.key) {
      setSelectedProject(null);
      return;
    }
    const rect = button.getBoundingClientRect();
    const edge = 12;
    const width = Math.min(320, window.innerWidth - edge * 2);
    const estimatedHeight = project.technologies.length > 6 ? 200 : 170;
    const left = Math.min(Math.max(edge, rect.left + rect.width / 2 - width / 2), window.innerWidth - width - edge);
    const fitsBelow = rect.bottom + 8 + estimatedHeight <= window.innerHeight - edge;
    const top = fitsBelow ? rect.bottom + 8 : Math.max(edge, rect.top - estimatedHeight - 8);
    openerRef.current = button;
    setPopoverPosition({ top, left, width });
    setSelectedProject(project);
  }

  return (
    <>
      <section aria-labelledby="projects-title">
        <div className="mb-2 flex items-center justify-between"><h2 id="projects-title" className="text-base font-normal">{title("Pr")}</h2><a href="https://github.com/main2526?tab=repositories" target="_blank" rel="noreferrer" className="text-xs text-[#0969da] hover:underline dark:text-[#2f81f7]">{watch("ViewAll")}</a></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.key} className="surface-card flex min-h-40 flex-col p-4">
              <div className="flex items-start justify-between gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="font-semibold text-[#0969da] hover:underline dark:text-[#2f81f7]">{t(`${project.key}.name`)}</a>
                <span className="rounded-full border border-[#d0d7de] px-2 py-0.5 text-xs text-[#656d76] dark:border-[#30363d] dark:text-[#8b949e]">{watch("Public")}</span>
              </div>
              <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#656d76] dark:text-[#8b949e]">{t(`${project.key}.description`)}</p>
              <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 text-xs text-[#656d76] dark:text-[#8b949e]">
                <button type="button" onClick={(event) => openTechnologies(project, event.currentTarget)} aria-expanded={selectedProject?.key === project.key} aria-controls="technology-popover" className="focus-ring flex items-center gap-1.5 rounded-md font-medium hover:text-[#0969da] dark:hover:text-[#2f81f7]" aria-label={`${watch("Technologies")}: ${t(`${project.key}.name`)}`}><Layers3 className="size-3.5" />{watch("Technologies")}</button>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#0969da]"><FaGithub />{watch("Github")}</a>
                {project.locked ? <span className="flex items-center gap-1"><Lock className="size-3" />{t("chatbotAI.status")}</span> : <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#0969da]"><ExternalLink className="size-3" />{watch("Preview")}</a>}
              </div>
            </article>
          ))}
        </div>
      </section>
      {mounted && selectedProject && createPortal(
        <div className="pointer-events-none fixed inset-0 z-[9999]">
          <div id="technology-popover" ref={popoverRef} role="dialog" aria-labelledby="technology-popover-title" style={popoverPosition} className="pointer-events-auto fixed rounded-lg border border-[#d0d7de] bg-white/95 p-3 shadow-[0_12px_32px_rgba(31,35,40,.18)] backdrop-blur-md animate-in fade-in zoom-in-95 duration-150 dark:border-[#30363d] dark:bg-[#161b22]/95 dark:shadow-[0_12px_32px_rgba(0,0,0,.45)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 id="technology-popover-title" className="text-sm font-semibold">{watch("TechTitle")}</h3>
                <p className="truncate text-xs text-[#656d76] dark:text-[#8b949e]">{t(`${selectedProject.key}.name`)}</p>
              </div>
              <button type="button" onClick={() => setSelectedProject(null)} className="focus-ring -mr-1 -mt-1 flex size-7 shrink-0 items-center justify-center rounded-md text-[#656d76] hover:bg-[#f3f4f6] dark:text-[#8b949e] dark:hover:bg-[#21262d]" aria-label={watch("Close")}><X className="size-3.5" /></button>
            </div>
              <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                {selectedProject.technologies.map((technology) => {
                  const Icon = technology.icon;
                  return (
                    <div key={technology.name} className="flex min-w-0 items-center gap-1.5 rounded-full border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1.5 text-xs font-medium dark:border-[#30363d] dark:bg-[#21262d]">
                      <Icon className="size-3.5 shrink-0 text-[#656d76] dark:text-[#8b949e]" aria-hidden="true" />
                      <span className="truncate">{technology.name}</span>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
