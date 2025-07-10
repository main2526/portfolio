"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface CardTiltProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function CardTilt({ children, className = "", intensity = 10 }: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      const rotateX = (mouseY / rect.height) * intensity
      const rotateY = -(mouseX / rect.width) * intensity

      // Efecto de hundimiento - más cerca del cursor = más hundido
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY)
      const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2
      const depthFactor = Math.max(0, 1 - distance / maxDistance)
      const translateZ = -depthFactor * 20

      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(${translateZ}px)
        scale(${1 - depthFactor * 0.05})
      `

      // Update CSS custom properties for glow effect
      card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`)
      card.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`)
    }

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)"
      card.style.setProperty("--mouse-x", "50%")
      card.style.setProperty("--mouse-y", "50%")
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [intensity])

  return (
    <div ref={cardRef} className={`card-tilt ${className}`}>
      <div className="card-tilt-inner">{children}</div>
    </div>
  )
}
