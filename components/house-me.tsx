import { Button } from "@/components/ui/button"
import Image from "next/image"
import "../styles/animations.css"
import { Download, Mail, Code, Gamepad2 } from "lucide-react"
import { CardTilt } from "@/components/card-tilt"
import React, { useState } from "react"

export default function HOUSE_COMPONENT() {
  const [downloading, setDownloading] = useState(false)

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (downloading) {
      e.preventDefault()
      return
    }
    setDownloading(true)
    setTimeout(() => setDownloading(false), 10000)
    // Permite la descarga normalmente
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black animate-gradient-shift"></div>
        <div className="grid-pattern-bw"></div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="floating-elements-minimal">
        <div className="element element-1"></div>
        <div className="element element-2"></div>
        <div className="element element-3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="block fade-in-up bg-gradient-to-tr from-black via-blue-600 to-blue-600 bg-clip-text text-transparent">
                  Hi, I&apos;m
                </span>
                <span className="block sm:inline gradient-text-nextjs relative holographic-text">Johanny A. Rodriguez</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed typewriter-effect">
              I'm a passionate developer focused on creating innovative solutions. With experience in both frontend and
              backend development, I specialize in building clean, responsive, and user-friendly applications.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a href="mailto:johannyantoniorodriguezgmai@gmail.com" className="group">
                <Button
                  variant="default"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-base sm:text-lg bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-nextjs relative overflow-hidden"
                >
                  <div className="button-shine-nextjs"></div>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                  Contact Me
                </Button>
              </a>
              <a
                href="/cv.pdf"
                download
                className={`w-full sm:w-auto group${downloading ? ' pointer-events-none' : ''}`}
                onClick={handleDownloadClick}
                tabIndex={downloading ? -1 : 0}
                aria-disabled={downloading}
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-base sm:text-lg border-black text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-nextjs-outline relative overflow-hidden bg-transparent"
                  disabled={downloading}
                >
                  <div className="button-shine-outline-nextjs"></div>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 " />
                  {downloading ? "Downloading..." : "Download CV"}
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="flex justify-center relative">
              <div className="profile-container-nextjs">
                <div className="profile-hexagon">
                  <Image
                    src="/profile.png"
                    width={200}
                    height={200}
                    alt="Johanny A. Rodriguez Profile"
                    className="rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-cover relative z-10 profile-image-nextjs filter grayscale"
                    priority
                  />
                  <div className="hexagon-border"></div>
                  <div className="hexagon-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Frontend Developer Card */}
            <CardTilt intensity={15}>
              <div className="card-nextjs group">
                <div className="card-background-nextjs"></div>
                <div className="card-border-nextjs"></div>
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="icon-container-nextjs">
                      <Code className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black">Frontend Developer</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    I have developed several interactive websites and applications using modern technologies like React
                    and Tailwind CSS. My goal is to provide users with seamless, responsive, and intuitive experiences.
                  </p>
                </div>
                <div className="card-hover-effect-nextjs"></div>
              </div>
            </CardTilt>

            {/* Game Developer Card */}
            <CardTilt intensity={15}>
              <div className="card-nextjs-dark group">
                <div className="card-background-nextjs-dark"></div>
                <div className="card-border-nextjs-dark"></div>
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="icon-container-nextjs-dark">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Game Unity Developer</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    I specialize in building games using Unity, C#, and other related technologies. My focus is on
                    creating immersive and engaging gaming experiences for players.
                  </p>
                </div>
                <div className="card-hover-effect-nextjs-dark"></div>
              </div>
            </CardTilt>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gradient-to-r from-white via-gray-50 to-white mt-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-5 animate-shimmer-nextjs"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <p className="text-center text-gray-500 text-sm sm:text-base footer-text">
            &copy; 2025 Johanny A. Rodriguez. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
