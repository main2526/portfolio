"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GitBranch,
  Box,
  CircleDollarSign,
  PiggyBankIcon,
  MonitorSmartphone,
  Github,
  ExternalLink,
  Bot,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    name: "Money Bank Easy",
    description: "A modern web application built with React and Next.js, showcasing my front-end development skills.",
    icon: <CircleDollarSign className="w-8 h-8" />,
    image: "/closer.png",
    technologies: ["React", "Next.js", "TypeScript"],
    links: {
      demo: "https://moneybankeasy.vercel.app/",
      github: "https://github.com/main2526/GET-EASY-MONEY-",
    },
  },
  {
    name: "SwiftStake",
    description:
      "A sports betting application developed with React and Next.js, allowing users to place bets on various sports events.",
    icon: <PiggyBankIcon className="w-8 h-8" />,
    image: "/stake.png",
    technologies: ["React", "Next.js", "API Integration"],
    links: {
      demo: "https://swiftstake.vercel.app/",
      github: "https://github.com/main2526/SwiftStake",
    },
  },
  {
    name: "BloxFruits stock",
    description:
      "Blox Fruits Stock Tracker is a simple and powerful app that lets you check the current stock of fruits in Blox Fruits without needing to enter the game. Using the official Blox Fruits API",
    icon: <Box className="w-8 h-8" />,
    image: "/stock.png",
    technologies: ["React", "API", "Real-time"],
    links: {
      demo: "https://bloxstock.vercel.app/",
      github: "https://github.com/main2526/current-stock",
    },
  },
  {
    name: "Landing page Turtle Blox Fruits",
    description:
      "Unlock the Full Potential of Your Apps and Games. Welcome to your ultimate source for modified apps, cracked software, premium tools, and game mods all in one place. Our platform offers fast, safe, and easy downloads",
    icon: <MonitorSmartphone className="w-8 h-8" />,
    image: "/landing.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: {
      demo: "https://bootsportal.vercel.app/",
      github: "https://github.com/main2526/bootsportal",
    },
  },
  {
    name: "ChatBot BoostDev-X AI",
    description:
      "Minimalist AI Chatbot with DeepSeek API. A clean and minimalist chatbot interface built with React and Tailwind CSS. It connects to the DeepSeek API to provide smart, real-time AI responses. Designed for simplicity and focus, it offers an intuitive chat experience with lightweight visuals, loading indicators, and keyboard shortcuts.",
    icon: <Bot className="w-8 h-8" />,
    image: "/chatbot.png",
    technologies: ["AI/ML", "Next.js", "DeepSeek API"],
    links: {
      demo: "https://bootschatbot.vercel.app/",
      github: "https://github.com/main2526/chatbot-api-key",
    },
  },
  {
    name: "Project Six",
    description: "Version control and CI/CD pipeline setup with Git, GitHub, and Jenkins for automated deployments.",
    icon: <GitBranch className="w-8 h-8" />,
    image: "/available.png",
    technologies: ["DevOps", "CI/CD", "Jenkins"],
    links: {
      demo: "/redirecting",
      github: "#",
    },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-white text-black py-12 px-6 max-h-96 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" variants={headerVariants} initial="hidden" animate="visible">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A collection of my recent work showcasing various technologies and development skills.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group"
            >
              <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-md flex flex-col h-full overflow-hidden bg-white relative">
                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)",
                    transform: "translateX(-100%)",
                  }}
                  animate={{
                    transform: "translateX(100%)",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                  }}
                />

                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-400 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [-10, -30, -10],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-50 transition-colors shadow-lg -mt-8 relative z-10 border-4 border-white"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div className="text-gray-700" whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                      {project.icon}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                  </motion.div>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 min-h-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <CardDescription className="text-gray-600 text-sm leading-relaxed flex-1 group-hover:text-gray-700 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.6 + index * 0.1 + techIndex * 0.05,
                          duration: 0.3,
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="space-y-3 pt-2 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          className="bg-black hover:bg-gray-800 text-white text-xs w-full relative overflow-hidden group/btn"
                          size="sm"
                          asChild
                        >
                          <Link href={project.links.demo}>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full"
                              transition={{ duration: 0.6 }}
                            />
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Preview
                          </Link>
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs hover:bg-gray-50 bg-transparent border-gray-300 w-full group/github"
                          asChild
                        >
                          <Link href={project.links.github}>
                              <Github className="w-4 h-4 mr-1" />
                            GitHub
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </CardContent>

                {/* Subtle glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, transparent 70%)",
                  }}
                  transition={{ duration: 0.5 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
