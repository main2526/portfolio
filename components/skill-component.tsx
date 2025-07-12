"use client"
import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import {TechIcons,skills, SkillType} from './skill.ts'


function MetallicIconCard({ skill, isActive = false }: { skill: any; isActive?: boolean }) {
  const IconComponent = TechIcons[skill.icon as keyof typeof TechIcons]

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-full"
      animate={{
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Efecto metálico tipo Apple */}
      <motion.div
        className="relative w-28 h-28 rounded-3xl flex items-center justify-center mb-4"
        style={{
          background: "linear-gradient(135deg, #f5f5f7 0%, #e3e3e6 40%, #bfc0c2 100%)",
          boxShadow: isActive
            ? "0 12px 40px rgba(0,0,0,0.15), 0 2px 1px #fff, 0 0 0 3px #e3e3e6"
            : "0 6px 20px rgba(0,0,0,0.08)",
          border: "2px solid #e3e3e6",
        }}
        animate={{
          boxShadow: isActive
            ? "0 12px 40px rgba(0,0,0,0.15), 0 2px 1px #fff, 0 0 0 3px #e3e3e6"
            : "0 6px 20px rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Reflejo metálico */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
          }}
          animate={{
            opacity: isActive ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />
        <IconComponent
          size={isActive ? 56 : 50}
          style={{
            color: skill.color,
            filter: isActive
              ? `drop-shadow(0 0 16px ${skill.color}80) brightness(1.2)`
              : `drop-shadow(0 0 8px ${skill.color}40)`,
            transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </motion.div>
      <span
        className={`text-lg font-bold tracking-wide transition-all duration-300 ${
          isActive ? "text-gray-900" : "text-gray-600"
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  )
}



function SwipeableCarousel({ skills }: { skills: SkillType[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Transformaciones para el efecto de stack
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 0.8, 1, 0.8, 0.5])

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false)
    const threshold = 100

    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (info.offset.x < -threshold && currentIndex < skills.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }

    x.set(0)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-5xl font-extrabold mb-4 tracking-tight text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        SKILLS
      </h2>

      {/* Carrusel principal con efecto stack */}
      <div ref={containerRef} className="relative w-full max-w-sm mx-auto" style={{ height: 320 }}>
        {skills.map((skill, index) => {
          const isActive = index === currentIndex
          const isPrev = index === currentIndex - 1
          const isNext = index === currentIndex + 1
          const isVisible = isActive || isPrev || isNext

          if (!isVisible) return null

          let zIndex = 0
          let translateX = 0
          let translateY = 0
          let scale = 0.85
          let rotateY = 0

          if (isActive) {
            zIndex = 30
            scale = 1
          } else if (isPrev) {
            zIndex = 20
            translateX = -60
            translateY = 20
            rotateY = 25
            scale = 0.9
          } else if (isNext) {
            zIndex = 20
            translateX = 60
            translateY = 20
            rotateY = -25
            scale = 0.9
          }

          return (
            <motion.div
              key={skill.name}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              style={{
                zIndex,
                x: isActive ? x : translateX,
                rotateZ: isActive ? rotate : 0,
                opacity: isActive ? opacity : 0.6,
              }}
              animate={{
                x: isActive ? undefined : translateX,
                y: translateY,
                scale,
                rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: -200, right: 200 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileTap={{ scale: isActive ? 0.95 : scale }}
            >
              <motion.div
                className="w-full h-full rounded-3xl p-6 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: isActive
                    ? "0 20px 60px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.06)"
                    : "0 10px 30px rgba(0,0,0,0.08)",
                }}
                animate={{
                  boxShadow: isActive
                    ? "0 20px 60px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.06)"
                    : "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <MetallicIconCard skill={skill} isActive={isActive} />
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Indicadores de progreso mejorados */}
      <div className="flex items-center gap-3 mt-4">
        {skills.map((_, index) => (
          <motion.button
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gray-800 w-8 h-3" : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            whileTap={{ scale: 0.9 }}
            animate={{
              width: index === currentIndex ? 32 : 12,
              backgroundColor: index === currentIndex ? "#1f2937" : "#d1d5db",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Instrucciones de swipe */}
      <motion.div
        className="text-sm text-gray-500 text-center mt-2 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 12h8m-4-4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Desliza para explorar
      </motion.div>
    </div>
  )
}

export default function AppleStyleSkills() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f5f7] via-[#e8e8ed] to-[#d1d1d6] px-4 py-8">
      {/* Mobile: carrusel swipeable mejorado */}
      <div className="block sm:hidden w-full">
        <SwipeableCarousel skills={skills} />
      </div>

      {/* Desktop: grid animada */}
      <motion.div
        className="hidden sm:block w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <h2 className="text-6xl font-extrabold mb-12 tracking-tight text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          SKILLS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 rounded-3xl bg-white/70 shadow-2xl backdrop-blur-xl border border-white/20">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.12, transition: { duration: 0.3, type: "spring", stiffness: 120 } }}
            >
              <MetallicIconCard skill={skill} isActive={true} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
