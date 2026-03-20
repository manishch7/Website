"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Info, MapPin, Globe, Users, Eye, TrendingUp } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  location: string
  icon: React.ReactNode
  github?: string
  medium?: string
  website?: string
  featured?: boolean
}

export default function ProjectCard({ title, description, technologies, location, icon, github, medium, website, featured }: ProjectCardProps) {
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
          className={`flip-card-front absolute w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden ${featured ? "featured-card" : ""}`}
          style={{
            background: featured 
              ? "linear-gradient(135deg, rgba(160, 60, 255, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%)" 
              : "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(16px)",
            border: featured 
              ? "2px solid rgba(160, 60, 255, 0.2)" 
              : "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: featured 
              ? "0 4px 30px rgba(0, 0, 0, 0.25), 0 0 20px rgba(160, 60, 255, 0.1)" 
              : "0 4px 30px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex flex-col items-center">
            {featured && <div className="text-xs font-semibold text-white/80 mb-2 px-3 py-1 rounded-full bg-white/10">PRODUCTION</div>}
            <div className="text-primary text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-center">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-4">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            {featured && (
              <div className="mt-6 flex gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 text-white/60 mb-1" />
                  <span className="text-sm font-semibold">170+</span>
                  <span className="text-xs text-muted-foreground">Users</span>
                </div>
                <div className="flex flex-col items-center">
                  <Eye className="h-5 w-5 text-white/60 mb-1" />
                  <span className="text-sm font-semibold">1K+</span>
                  <span className="text-xs text-muted-foreground">Visitors</span>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="h-5 w-5 text-white/60 mb-1" />
                  <span className="text-sm font-semibold">3.5+</span>
                  <span className="text-xs text-muted-foreground">Pages/Visit</span>
                </div>
              </div>
            )}
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
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="space-y-4 h-full flex flex-col">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="skill-pill">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-auto flex-wrap">
              {website && (
                <a href={website} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <Button variant="link" className="p-0 h-auto text-white/80 hover:text-white flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    Live Site
                  </Button>
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <Button variant="link" className="p-0 h-auto text-white/80 hover:text-white flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              )}
              {medium && (
                <a href={medium} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <Button variant="link" className="p-0 h-auto text-white/80 hover:text-white flex items-center gap-1">
                    <Info className="h-4 w-4" />
                    Medium
                  </Button>
                </a>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
