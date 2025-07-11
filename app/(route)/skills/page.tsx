"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const skills: Skill[] = [
  {
    icon: "HTML",
    color: "#E34F26",
    name: "HTML5",
    category: "Frontend",
    description: "Semantic markup language for structuring web content",
    projects: 50,
    frameworks: ["React", "Vue", "Angular"],
    useCases: ["Landing Pages", "Web Apps", "Email Templates"],
  },
  {
    icon: "CSS",
    color: "#1572B6",
    name: "CSS3",
    category: "Frontend",
    description: "Advanced styling with animations, grid, and flexbox",
    projects: 45,
    frameworks: ["Tailwind", "Bootstrap", "Styled Components"],
    useCases: ["Responsive Design", "Animations", "UI Components"],
  },
  {
    icon: "JavaScript",
    color: "#F7DF1E",
    name: "JavaScript",
    category: "Programming",
    description: "Modern ES6+ features, async/await, and DOM manipulation",
    projects: 40,
    frameworks: ["Node.js", "Express", "Vanilla JS"],
    useCases: ["Web Development", "API Integration", "Interactive UIs"],
  },
  {
    icon: "TypeScript",
    color: "#3178C6",
    name: "TypeScript",
    category: "Programming",
    description: "Type-safe JavaScript with advanced type system",
    projects: 35,
    frameworks: ["Angular", "React", "Node.js"],
    useCases: ["Large Applications", "Team Projects", "API Development"],
  },
  {
    icon: "React",
    color: "#61DAFB",
    name: "React",
    category: "Framework",
    description: "Component-based UI library with hooks and context",
    projects: 42,
    frameworks: ["Next.js", "Gatsby", "React Native"],
    useCases: ["SPAs", "Mobile Apps", "Dashboard Development"],
  },
  {
    icon: "NextJS",
    color: "#000000",
    name: "Next.js",
    category: "Framework",
    description: "Full-stack React framework with SSR and API routes",
    projects: 28,
    frameworks: ["Vercel", "React", "TypeScript"],
    useCases: ["E-commerce", "Blogs", "Full-stack Apps"],
  },
  {
    icon: "DotNet",
    color: "#512BD4",
    name: ".NET",
    category: "Backend",
    description: "Cross-platform framework for web APIs and services",
    projects: 25,
    frameworks: ["ASP.NET Core", "Entity Framework", "Blazor"],
    useCases: ["Web APIs", "Microservices", "Enterprise Apps"],
  },
  {
    icon: "PostgreSQL",
    color: "#336791",
    name: "PostgreSQL",
    category: "Database",
    description: "Advanced relational database with JSON support",
    projects: 20,
    frameworks: ["Prisma", "Sequelize", "TypeORM"],
    useCases: ["Data Analytics", "Web Applications", "APIs"],
  },
  {
    icon: "SQL",
    color: "#4479A1",
    name: "MySQL",
    category: "Database",
    description: "Relational database management and optimization",
    projects: 22,
    frameworks: ["Laravel", "Django", "Node.js"],
    useCases: ["E-commerce", "Content Management", "Analytics"],
  },
  {
    icon: "Git",
    color: "#F05032",
    name: "Git",
    category: "Tools",
    description: "Version control with branching and collaboration",
    projects: 60,
    frameworks: ["GitHub", "GitLab", "Bitbucket"],
    useCases: ["Team Collaboration", "Code Management", "CI/CD"],
  },
  {
    icon: "GitHub",
    color: "#181717",
    name: "GitHub",
    category: "Platform",
    description: "Code hosting, CI/CD, and project management",
    projects: 55,
    frameworks: ["Actions", "Pages", "Copilot"],
    useCases: ["Open Source", "Team Projects", "Portfolio"],
  },
];

// Typewriter Hook
const useTypewriter = (text: string, speed = 100) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
};

// Metallic Matrix Rain Effect
const MetallicMatrixRain = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            background: "linear-gradient(180deg, #ffffff, #c0c0c0, #808080)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.3))",
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {[...Array(20)].map((_, j) => (
            <div key={j} className="block">
              {characters[Math.floor(Math.random() * characters.length)]}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Liquid Metal Background Effect
const LiquidMetalBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Metallic Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            background:
              "radial-gradient(circle at 30% 30%, #ffffff, #e0e0e0, #a0a0a0, #606060)",
            filter: "blur(40px)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 400 - 200, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Chrome Reflection Waves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full h-px"
          style={{
            top: `${20 + i * 15}%`,
            background:
              "linear-gradient(90deg, transparent, #ffffff, #c0c0c0, #ffffff, transparent)",
            filter: "blur(1px)",
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Glitch Text Component with Metallic Effect
const MetallicGlitchText = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <span
        className="relative z-10"
        style={{
          background:
            "linear-gradient(135deg, #ffffff, #e0e0e0, #c0c0c0, #a0a0a0)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
        }}
      >
        {children}
      </span>
      <motion.span
        className="absolute top-0 left-0 opacity-70"
        style={{
          background: "linear-gradient(135deg, #c0c0c0, #808080)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        animate={{
          x: [0, -2, 2, 0],
          y: [0, 1, -1, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 opacity-50"
        style={{
          background: "linear-gradient(135deg, #808080, #404040)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -1, 1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        {children}
      </motion.span>
    </div>
  );
};

interface Skill {
  icon: keyof typeof TechIcons;
  color: string;
  name: string;
  category: string;
  description: string;
  projects: number;
  frameworks: string[];
  useCases: string[];
}

interface TooltipPosition {
  x: number;
  y: number;
}

interface SimpleTooltipProps {
  skill: Skill;
  isVisible: boolean;
  position: TooltipPosition;
}

// Simple Name Tooltip
const SimpleTooltip = ({ skill, isVisible, position }: SimpleTooltipProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          style={{
            left: position.x,
            top: position.y - 60,
            transform: "translateX(-50%)",
          }}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Metallic Glow */}
            <div
              className="absolute inset-0 rounded-xl blur-lg opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse, #ffffff, #c0c0c0, transparent)",
                transform: "scale(1.2)",
              }}
            />
            {/* Tooltip Content */}
            <div
              className="relative px-4 py-2 rounded-xl border backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(224,224,224,0.8), rgba(192,192,192,0.7))",
                borderColor: "rgba(255,255,255,0.3)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {skill.name}
              </span>
            </div>
            {/* Arrow */}
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "6px solid rgba(255,255,255,0.9)",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface Skill {
  icon: keyof typeof TechIcons;
  color: string;
  name: string;
  category: string;
  description: string;
  projects: number;
  frameworks: string[];
  useCases: string[];
}

interface MetallicIconCardProps {
  skill: Skill;
  index: number;
  showContent: boolean;
}

// Enhanced Metallic Icon Card
const MetallicIconCard = ({
  skill,
  index,
  showContent,
}: MetallicIconCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const IconComponent = TechIcons[skill.icon];

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!showContent) return null;

  return (
    <>
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.1,
          y: -12,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Metallic Aura Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(192,192,192,0.2) 50%, transparent 100%)",
            filter: "blur(30px)",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.6 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Chrome Reflection Ring */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              "conic-gradient(from 0deg, #ffffff, #e0e0e0, #c0c0c0, #a0a0a0, #ffffff)",
            padding: "2px",
          }}
          animate={{
            rotate: isHovered ? [0, 360] : 0,
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{
            rotate: {
              duration: 2,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            },
            opacity: { duration: 0.3 },
          }}
        >
          <div className="w-full h-full rounded-3xl bg-white" />
        </motion.div>

        {/* Main Icon Container */}
        <motion.div
          className="relative w-28 h-28 rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,240,240,0.9), rgba(220,220,220,0.85))",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          animate={{
            boxShadow: isHovered
              ? [
                  "0 20px 60px rgba(0, 0, 0, 0.15)",
                  "0 25px 80px rgba(255, 255, 255, 0.2)",
                  "inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                ].join(", ")
              : [
                  "0 8px 25px rgba(0, 0, 0, 0.08)",
                  "0 12px 35px rgba(0, 0, 0, 0.06)",
                  "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                ].join(", "),
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Chrome Gradient Overlay */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.4) 100%)",
            }}
          />

          {/* Liquid Metal Reflection */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0"
            style={{
              background:
                "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)",
            }}
            animate={{
              opacity: isHovered ? [0, 1, 0] : 0,
              x: isHovered ? ["-100%", "100%"] : "0%",
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />

          {/* Icon Container */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center z-10"
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="w-12 h-12 flex items-center justify-center"
              style={{
                color: skill.color,
                filter: `drop-shadow(0 4px 12px ${skill.color}40) contrast(1.2) saturate(1.1)`,
              }}
              animate={{
                filter: isHovered
                  ? `drop-shadow(0 6px 20px ${skill.color}60) contrast(1.4) saturate(1.3) brightness(1.1)`
                  : `drop-shadow(0 4px 12px ${skill.color}40) contrast(1.2) saturate(1.1)`,
                rotateY: isHovered ? [0, 10, -10, 0] : 0,
              }}
              transition={{
                filter: { duration: 0.4 },
                rotateY: { duration: 0.8, ease: "easeInOut" },
              }}
            >
              <IconComponent size="100%" />
            </motion.div>
          </motion.div>

          {/* Metallic Particles */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: "radial-gradient(circle, #ffffff, #c0c0c0)",
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      boxShadow: "0 0 4px rgba(255,255,255,0.8)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 2, 0],
                      y: [0, -30 - Math.random() * 20],
                      x: [0, (Math.random() - 0.5) * 40],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Chrome Reflection Base */}
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-28 h-14 rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 100%)",
            filter: "blur(12px)",
            transform: "translateX(-50%) scaleY(-0.4)",
          }}
          animate={{
            opacity: isHovered ? 0.8 : 0.4,
            scaleX: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Simple Name Tooltip */}
      <SimpleTooltip
        skill={skill}
        isVisible={isHovered}
        position={mousePosition}
      />
    </>
  );
};

// Fondo Grid Animado Blanco
const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Líneas verticales */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={`v-${i}`}
        className="absolute top-0 h-full"
        style={{
          left: `${i * 5}%`,
          width: "1px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.32), rgba(255,255,255,0.12))",
        }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: i * 0.2,
        }}
      />
    ))}
    {/* Líneas horizontales */}
    {[...Array(16)].map((_, i) => (
      <motion.div
        key={`h-${i}`}
        className="absolute left-0 w-full"
        style={{
          top: `${i * 6.25}%`,
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.10), rgba(255,255,255,0.28), rgba(255,255,255,0.10))",
        }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{
          duration: 5 + Math.random() * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: i * 0.15,
        }}
      />
    ))}
    {/* Sutil resplandor blanco */}
    <div className="absolute inset-0 bg-white opacity-10 pointer-events-none" />
  </div>
);

// interface

export default function MetallicSkillsShowcase() {
  const [mounted, setMounted] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Typewriter texts
  const mainTitle = useTypewriter("SKILLS", 150);
  const subtitle = useTypewriter("TECHNOLOGIES THAT POWER INNOVATION", 80);
  const loadingText = useTypewriter("INITIALIZING METALLIC INTERFACE...", 100);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowPreloader(false);
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen overflow-x-hidden relative ">
      {/* Fondo Grid Blanco */}
      <GridBackground />

      {/* Liquid Metal Background */}
      <LiquidMetalBackground />

      {/* Enhanced Metallic Preloader */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a1a1a, #2a2a2a, #1a1a1a)",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Metallic Matrix Rain */}
            <MetallicMatrixRain />

            {/* Chrome Scan Lines */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-px"
                  style={{
                    top: `${8.33 * (i + 1)}%`,
                    background:
                      "linear-gradient(90deg, transparent, #ffffff, #c0c0c0, #ffffff, transparent)",
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 4,
                  }}
                />
              ))}
            </motion.div>

            {/* Main Content */}
            <div className="text-center z-40 relative">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <MetallicGlitchText className="text-8xl md:text-9xl font-black drop-shadow-2xl">
                  {mainTitle}
                </MetallicGlitchText>
                <motion.div
                  className="w-full h-1 mt-4"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #ffffff, #c0c0c0, #ffffff, transparent)",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2, duration: 1.5 }}
                />
              </motion.div>

              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <p
                  className="text-2xl md:text-3xl font-light tracking-wider"
                  style={{
                    background:
                      "linear-gradient(135deg, #e0e0e0, #c0c0c0, #a0a0a0)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {subtitle}
                  <motion.span
                    className="inline-block w-1 h-8 ml-1"
                    style={{ backgroundColor: "#ffffff" }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </p>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
              >
                <p
                  className="text-lg font-mono"
                  style={{
                    background: "linear-gradient(135deg, #e0e0e0, #c0c0c0)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {loadingText}
                  <motion.span
                    className="inline-block w-2 h-5 ml-1"
                    style={{ backgroundColor: "#ffffff" }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </p>

                {/* Metallic Progress Bar */}
                <div
                  className="w-80 h-3 rounded-full mx-auto overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
                    border: "1px solid #404040",
                  }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #ffffff, #e0e0e0, #c0c0c0, #ffffff)",
                    }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 4.5, duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky/Animated Title */}
      <motion.div
        className={`fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-lg pointer-events-none`}
        style={{ height: scrolled ? "64px" : "0px" }}
        animate={{
          opacity: scrolled ? 1 : 0,
          height: scrolled ? 64 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-black tracking-tight text-center mt-4"
          style={{
            background:
              "linear-gradient(120deg, #e0e0e0 10%, #c0c0c0 30%, #a0a0a0 50%, #e0e0e0 70%, #ffffff 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundSize: "200% 100%",
            backgroundPosition: "0% 50%",
            transition: "font-size 0.4s",
          }}
        
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          SKILLS-X
        </motion.h1>
      </motion.div>

      {/* Main Content */}
      <AnimatePresence>
        {!showPreloader && (
          <>
            {/* Header */}
            <motion.header
              ref={headerRef}
              className="py-24 px-6 text-center relative z-10"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              <motion.h1
                className="text-8xl md:text-9xl font-black mb-10 tracking-tight"
                initial={{ scale: 2.8, y: 200, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
              >
                <motion.span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(120deg, #e0e0e0 10%, #c0c0c0 30%, #a0a0a0 50%, #e0e0e0 70%, #ffffff 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "0% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  SKILLS-X
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-2xl max-w-2xl mx-auto"
                style={{
                  background: "linear-gradient(135deg, #606060, #404040)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
              >
                Technologies that power innovation
              </motion.p>
            </motion.header>

            {/* Skills Grid */}
            <main className="py-20 px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 md:gap-20 justify-items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 1.2 }}
                >
                  {skills.map((skill, index) => (
                    <MetallicIconCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      showContent={showContent}
                    />
                  ))}
                </motion.div>
              </div>
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
