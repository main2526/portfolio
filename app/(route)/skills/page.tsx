"use client";
import { useState, useEffect } from "react";
import React from "react";

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

const skills = [
  {
    icon: "HTML",
    color: "#E34F26",
    category: "Frontend",
    description: "Semantic markup language for structuring web content",
    proficiency: 95,
    experience: "5+ years",
    projects: 50,
  },
  {
    icon: "CSS",
    color: "#1572B6",
    category: "Frontend",
    description: "Advanced styling with animations, grid, and flexbox",
    proficiency: 92,
    experience: "5+ years",
    projects: 45,
  },
  {
    icon: "JavaScript",
    color: "#F7DF1E",
    category: "Programming",
    description: "Modern ES6+ features, async/await, and DOM manipulation",
    proficiency: 90,
    experience: "4+ years",
    projects: 40,
  },
  {
    icon: "TypeScript",
    color: "#3178C6",
    category: "Programming",
    description: "Type-safe JavaScript with advanced type system",
    proficiency: 88,
    experience: "3+ years",
    projects: 35,
  },
  {
    icon: "React",
    color: "#61DAFB",
    category: "Framework",
    description: "Component-based UI library with hooks and context",
    proficiency: 93,
    experience: "4+ years",
    projects: 42,
  },
  {
    icon: "NextJS",
    color: "#000000",
    category: "Framework",
    description: "Full-stack React framework with SSR and API routes",
    proficiency: 89,
    experience: "3+ years",
    projects: 28,
  },
  {
    icon: "DotNet",
    color: "#512BD4",
    category: "Backend",
    description: "Cross-platform framework for web APIs and services",
    proficiency: 85,
    experience: "3+ years",
    projects: 25,
  },
  {
    icon: "PostgreSQL",
    color: "#336791",
    category: "Database",
    description: "Advanced relational database with JSON support",
    proficiency: 82,
    experience: "2+ years",
    projects: 20,
  },
  {
    icon: "SQL",
    color: "#4479A1",
    category: "Database",
    description: "Relational database management and optimization",
    proficiency: 80,
    experience: "3+ years",
    projects: 22,
  },
  {
    icon: "Git",
    color: "#F05032",
    category: "Tools",
    description: "Version control with branching and collaboration",
    proficiency: 91,
    experience: "4+ years",
    projects: 60,
  },
  {
    icon: "GitHub",
    color: "#181717",
    category: "Platform",
    description: "Code hosting, CI/CD, and project management",
    proficiency: 87,
    experience: "4+ years",
    projects: 55,
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

// Matrix Rain Effect Component
const MatrixRain = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 font-mono text-xs opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
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

// Glitch Text Component
const GlitchText = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 text-red-500 opacity-70"
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
        className="absolute top-0 left-0 text-blue-500 opacity-70"
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

// Hologram Scanner Effect
const HologramScanner = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      {/* Horizontal scan lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          style={{ top: `${12.5 * (i + 1)}%` }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
          }}
        />
      ))}
      {/* Vertical scan line */}
      <motion.div
        className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{
          left: ["0%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

// Professional Skill Tooltip Component
const SkillTooltip = ({ skill, isVisible, position }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -120%)",
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Tooltip Container */}
          <div className="relative">
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-2xl blur-xl opacity-60"
              style={{
                background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}20)`,
                transform: "scale(1.1)",
              }}
            />

            {/* Main Tooltip */}
            <div
              className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 min-w-80"
              style={{ borderColor: `${skill.color}40` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    border: `2px solid ${skill.color}30`,
                  }}
                >
                  {React.createElement(TechIcons[skill.icon], {
                    size: 24,
                    color: skill.color,
                  })}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {skill.proficiency}%
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Proficiency
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {skill.projects}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Projects
                  </div>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Skill Level
                  </span>
                  <span className="text-xs text-gray-500">
                    {skill.experience}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Experience Badge */}
              <div className="flex justify-center">
                <div
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                    border: `1px solid ${skill.color}30`,
                  }}
                >
                  {skill.experience} Experience
                </div>
              </div>
            </div>

            {/* Tooltip Arrow */}
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: `8px solid ${skill.color}40`,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Enhanced Icon Card Component
const IconCard = ({ skill, index, showContent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const IconComponent = TechIcons[skill.icon];

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
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
        initial={{ opacity: 0, scale: 0, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          duration: 1.2,
          delay: index * 0.15,
          type: "spring",
          stiffness: 100,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1, z: 50 }}
      >
        {/* Outer Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0"
          style={{
            background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.8 : 1,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Multiple Pulse Rings */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 opacity-0"
            style={{ borderColor: skill.color }}
            animate={{
              opacity: isHovered ? [0, 0.8, 0] : 0,
              scale: isHovered ? [1, 2.5 + i * 0.5] : 1,
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Main Icon Container */}
        <motion.div
          className="relative w-32 h-32 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center overflow-hidden shadow-2xl"
          animate={{
            borderColor: isHovered ? skill.color : "#e5e7eb",
            backgroundColor: isHovered ? `${skill.color}08` : "#ffffff",
            boxShadow: isHovered
              ? `0 0 60px ${skill.color}60, 0 0 100px ${skill.color}40, inset 0 0 20px ${skill.color}20`
              : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Icon with Advanced Effects */}
          <motion.div
            className="relative w-16 h-16 z-10 flex items-center justify-center"
            style={{ color: skill.color }}
            animate={{
              scale: isHovered ? [1, 1.3, 1.1] : 1,
              rotateY: isHovered ? [0, 360] : 0,
              filter: isHovered
                ? `drop-shadow(0 0 20px ${skill.color}) brightness(1.2) saturate(1.3)`
                : "none",
            }}
            transition={{
              scale: { duration: 0.6 },
              rotateY: { duration: 1.5, ease: "easeInOut" },
              filter: { duration: 0.4 },
            }}
          >
            <IconComponent size="100%" />
          </motion.div>
        </motion.div>

        {/* Skill Name (Always Visible) */}
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
        >
          <motion.h3
            className="text-lg font-bold whitespace-nowrap"
            animate={{
              color: isHovered ? skill.color : "#000000",
              scale: isHovered ? 1.1 : 1,
              textShadow: isHovered ? `0 0 10px ${skill.color}60` : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            {skill.name}
          </motion.h3>
        </motion.div>
      </motion.div>

      {/* Professional Tooltip */}
      <SkillTooltip
        skill={skill}
        isVisible={isHovered}
        position={mousePosition}
      />
    </>
  );
};

export default function EnhancedSkillsPage() {
  const [mounted, setMounted] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Typewriter texts
  const mainTitle = useTypewriter("SKILLS", 150);
  const subtitle = useTypewriter("TECHNOLOGIES THAT POWER INNOVATION", 80);
  const loadingText = useTypewriter("INITIALIZING SYSTEMS...", 100);

  useEffect(() => {
    setMounted(true);
    // Hide preloader after 8 seconds
    const timer = setTimeout(() => {
      setShowPreloader(false);
      // Show content after preloader animation completes
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden relative">
      {/* Enhanced Cinematic Preloader */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Matrix Rain Background */}
            <MatrixRain />
            {/* Hologram Scanner */}
            <HologramScanner />
            {/* Cinematic Bars */}
            <motion.div
              className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-30"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-30"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Advanced Particle System */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Floating Code Fragments */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-green-400 font-mono text-xs opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    x: [0, Math.random() * 100 - 50, 0],
                    opacity: [0.1, 0.6, 0.1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                >
                  {`{${Math.random() > 0.5 ? "code" : "dev"}}`}
                </motion.div>
              ))}
              {/* Energy Orbs */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyan-400 opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: "blur(1px)",
                    boxShadow: "0 0 20px #22d3ee",
                  }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 0.8, 0],
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
              {/* Central Hologram Effect */}
              <motion.div
                className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full pointer-events-none"
                style={{
                  transform: "translate(-50%, -50%)",
                  background:
                    "conic-gradient(from 0deg, #00ffff, #ff00ff, #ffff00, #00ffff)",
                  filter: "blur(60px)",
                  opacity: 0.15,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: {
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  scale: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              />
            </motion.div>

            {/* Main Content */}
            <div className="text-center z-40 relative">
              {/* Glitch Title */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <GlitchText className="text-8xl md:text-9xl font-black text-white drop-shadow-2xl">
                  {mainTitle}
                </GlitchText>
                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2, duration: 1.5 }}
                />
              </motion.div>
              {/* Typewriter Subtitle */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <p className="text-2xl md:text-3xl text-cyan-300 font-light tracking-wider">
                  {subtitle}
                  <motion.span
                    className="inline-block w-1 h-8 bg-cyan-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </p>
              </motion.div>
              {/* Advanced Loading Animation */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
              >
                {/* Loading Text */}
                <p className="text-lg text-green-400 font-mono">
                  {loadingText}
                  <motion.span
                    className="inline-block w-2 h-5 bg-green-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </p>
                {/* Progress Bar */}
                <div className="w-80 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 4.5, duration: 3, ease: "easeInOut" }}
                  />
                </div>
                {/* System Status */}
                <motion.div
                  className="space-y-2 text-sm font-mono text-green-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5, duration: 1 }}
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 5.2 }}
                  >
                    {">"} Loading React components... ✓
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 5.8 }}
                  >
                    {">"} Initializing animations... ✓
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 6.4 }}
                  >
                    {">"} Preparing skills showcase... ✓
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 7 }}
                    className="text-cyan-400"
                  >
                    {">"} System ready. Launching interface...
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
            {/* Corner UI Elements */}
            <motion.div
              className="absolute top-8 left-8 text-cyan-400 font-mono text-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <p>SYSTEM: ONLINE</p>
              <p>STATUS: LOADING</p>
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-8 text-cyan-400 font-mono text-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <p>v2.0.1</p>
              <p>BUILD: 2024</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!showPreloader && (
          <>
            {/* Header */}
            <motion.header
              className="py-20 px-6 text-center relative z-10"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.h1
                className="text-8xl md:text-9xl font-black mb-8 tracking-tight"
                initial={{ scale: 2, y: 200 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  SKILLS
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-2xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
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
                    <IconCard
                      key={skill.icon + "-" + index}
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
