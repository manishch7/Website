"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Info, RotateCw } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface FlipCardProps {
  title: string
  icon: React.ReactNode
  description: string
  technologies: string[]
}

export default function FlipCard({ title, icon, description, technologies }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const isMobile = useIsMobile()

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`flip-card h-[300px] w-full ${isFlipped ? "flipped" : ""}`}
      onClick={isMobile ? handleFlip : undefined}
    >
      <div className="flip-card-inner relative w-full h-full">
        <Card className="flip-card-front absolute w-full h-full flex flex-col items-center justify-center p-6 cosmic-card">
          <div className="text-primary mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-center">{title}</h3>
          {!isMobile && (
            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground flex items-center gap-1">
              <RotateCw className="h-3 w-3" /> Hover to flip
            </div>
          )}
          {isMobile && (
            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground flex items-center gap-1">
              <Info className="h-3 w-3" /> Tap to flip
            </div>
          )}
        </Card>

        <Card className="flip-card-back absolute w-full h-full overflow-auto p-6 cosmic-card">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="rounded-full bg-primary/20 text-primary-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
            <Button variant="link" className="p-0 h-auto text-primary">
              View Details
            </Button>
          </div>
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={(e) => {
                e.stopPropagation()
                setIsFlipped(false)
              }}
            >
              <RotateCw className="h-4 w-4" />
            </Button>
          )}
        </Card>
      </div>
    </div>
  )
}
