import {
  GitBranch,
  Box,
  CircleDollarSign,
  PiggyBankIcon,
  MonitorSmartphone,
  Bot,  
} from "lucide-react";

export  const projects = [
  {
    name: "Money Bank Easy",
    description:
      "A modern web application built with React and Next.js, showcasing my front-end development skills.",
    icon: <CircleDollarSign className="w-8 h-8" />,
    image: "/closer.png",
    technologies: ["React", "Next.js", "TypeScript"],
    links: {
      demo: "https://moneybankeasy.vercel.app/",
      github: "https://github.com/main2526/GET-EASY-MONEY-.git",
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
      github: "https://github.com/main2526/SwiftStake.git",
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
      github: "https://github.com/main2526/current-stock.git",
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
      github: "https://github.com/main2526/bootsportal.git",
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
      github: "https://github.com/main2526/chatbot-api-key.git",
    },
  },
  {
    name: "Project Six",
    description:
      "Version control and CI/CD pipeline setup with Git, GitHub, and Jenkins for automated deployments.",
    icon: <GitBranch className="w-8 h-8" />,
    image: "/available.png",
    technologies: ["DevOps", "CI/CD", "Jenkins"],
    links: {
      demo: "/redirecting",
      github: "#",
    },
  },
];
