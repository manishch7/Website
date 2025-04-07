"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Info, MapPin } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  location: string
  icon: React.ReactNode
}

export default function ProjectCard({ title, description, technologies, location, icon }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  // Handle mouse enter to flip the card
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true)
    }
  }

  // Handle mouse leave to flip back
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false)
    }
  }

  // Handle click for mobile devices
  const handleClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped)
    }
  }

  // Add touch event handlers for mobile
  useEffect(() => {
    const card = cardRef.current
    if (!card || !isMobile) return

    const handleTouchStart = () => {
      // Touch events are handled by the onClick handler
    }

    card.addEventListener("touchstart", handleTouchStart)
    return () => {
      card.removeEventListener("touchstart", handleTouchStart)
    }
  }, [isMobile])

  return (
    <div
      ref={cardRef}
      className={`flip-card h-[300px] w-full ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front of card */}
        <Card
          className="flip-card-front absolute w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden"
          style={{
            background: "rgba(8, 0, 16, 0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(180, 70, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(180, 70, 255, 0.1)",
          }}
        >
          {/* Aurora background image */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: "url(/images/aurora-card-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "screen",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="text-primary text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-center">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-4">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>

          {!isMobile && (
            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground flex items-center gap-1 z-10">
              <Info className="h-3 w-3" /> Hover for details
            </div>
          )}
          {isMobile && (
            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground flex items-center gap-1 z-10">
              <Info className="h-3 w-3" /> Tap for details
            </div>
          )}
        </Card>

        {/* Back of card */}
        <Card
          className="flip-card-back absolute w-full h-full overflow-auto p-6"
          style={{
            background: "rgba(8, 0, 16, 0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(180, 70, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(180, 70, 255, 0.1)",
          }}
        >
          {/* Aurora background image */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: "url(/images/aurora-card-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "screen",
            }}
          />

          <div className="relative z-10 space-y-4 h-full flex flex-col">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="skill-pill">
                  {tech}
                </span>
              ))}
            </div>
            <Button variant="link" className="p-0 h-auto text-primary flex items-center gap-1 mt-auto">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

