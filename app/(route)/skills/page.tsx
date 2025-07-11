'use client'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";

const TechIcons = {
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
};

const skills: SkillType[] = [
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
];

function MetallicIconCard({ skill }: { skill: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = TechIcons[skill.icon as keyof typeof TechIcons];

  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto metálico tipo Apple */}
      <motion.div
        className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-3"
        style={{
          background:
            "linear-gradient(135deg, #f5f5f7 0%, #e3e3e6 40%, #bfc0c2 100%)",
          boxShadow:
            isHovered
              ? "0 8px 32px rgba(0,0,0,0.18), 0 1.5px 0.5px #fff, 0 0 0 2px #e3e3e6"
              : "0 4px 16px rgba(0,0,0,0.10)",
          border: "1.5px solid #e3e3e6",
        }}
        animate={{
          scale: isHovered ? 1.08 : 1,
          boxShadow: isHovered
            ? "0 8px 32px rgba(0,0,0,0.18), 0 1.5px 0.5px #fff, 0 0 0 2px #e3e3e6"
            : "0 4px 16px rgba(0,0,0,0.10)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Reflejo metálico */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
          }}
          animate={{
            opacity: isHovered ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />
        <IconComponent
          size={isHovered ? 54 : 48}
          style={{
            color: skill.color,
            filter: isHovered
              ? `drop-shadow(0 0 12px ${skill.color}80) brightness(1.1)`
              : `drop-shadow(0 0 6px ${skill.color}40)`,
            transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </motion.div>
      <span className="text-base font-semibold text-gray-800" style={{letterSpacing:1}}>{skill.name}</span>
    </motion.div>
  );
}

interface SkillType {
  icon: keyof typeof TechIcons;
  color: string;
  name: string;
}

function TVIconCarouselMobile({ skills }: { skills: SkillType[] }) {
  const [current, setCurrent] = useState(1); // Empieza en el segundo para centrar
  const total = skills.length;

  // Navegación
  const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  // Swipe touch
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) goPrev();
    if (delta < -40) goNext();
    touchStartX.current = null;
  };

  // Obtener los 3 íconos a mostrar (anterior, actual, siguiente)
  const getVisibleSkills = () => {
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    return [skills[prev], skills[current], skills[next]];
  };
  const visibleSkills = getVisibleSkills();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <h2
        className="text-5xl font-extrabold mb-6 tracking-tight text-center"
      >
        SKILLS
      </h2>
      <div className="relative w-full flex items-center justify-center" style={{ minHeight: 220 }}>
        {/* Flecha izquierda */}
        <button
          onClick={goPrev}
          className="fixed left-2 bottom-1/2 translate-y-1/2 z-30 p-2 rounded-full bg-white/80 shadow border border-gray-200 active:scale-95 transition sm:hidden"
          aria-label="Anterior"
          style={{ left: 12 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Carrusel principal */}
        <motion.div
          className="w-full flex items-center justify-center select-none gap-4 px-2"
          style={{ minHeight: 200 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{
                opacity: 1,
                scale: idx === 1 ? 1.15 : 0.8,
                y: idx === 1 ? 0 : 30,
                filter: idx === 1 ? 'drop-shadow(0 8px 32px rgba(0,0,0,0.10))' : 'none',
              }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              className={`mx-auto flex flex-col items-center justify-center ${idx === 1 ? 'z-10' : 'z-0'}`}
              style={{ width: idx === 1 ? 170 : 90, height: idx === 1 ? 170 : 90 }}
            >
              <MetallicIconCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
        {/* Flecha derecha */}
        <button
          onClick={goNext}
          className="fixed right-2 bottom-1/2 translate-y-1/2 z-30 p-2 rounded-full bg-white/80 shadow border border-gray-200 active:scale-95 transition sm:hidden"
          aria-label="Siguiente"
          style={{ right: 12 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div className="text-base font-semibold text-gray-800 tracking-wide mt-2 mb-1 text-center" style={{letterSpacing:1}}>
        {skills[current].name}
      </div>
      <div className="flex gap-2 justify-center mt-1">
        {skills.map((_, idx) => (
          <span key={idx} className={`w-2 h-2 rounded-full ${idx === current ? 'bg-gray-800' : 'bg-gray-300'} transition-all`} />
        ))}
      </div>
     
    </div>
  );
}

export default function AppleStyleSkills() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f5f7] to-[#e3e3e6] px-2">
      {/* Mobile: pasarela horizontal de 3 íconos */}
      <div className="block sm:hidden w-full max-w-xs mx-auto">
        <TVIconCarouselMobile skills={skills} />
      </div>
      {/* Desktop: grid animada */}
      <motion.div
        className="hidden sm:block w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-8 rounded-3xl bg-white/60 shadow-xl backdrop-blur-md"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 14 } },
              }}
            >
              <MetallicIconCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/*
Agrega esto a tu CSS global si no tienes la clase scrollbar-hide:
.custom-scroll-hide::-webkit-scrollbar { display: none; }
.custom-scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
*/
