"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`container max-w-5xl px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight glow-text">Manish Choudhary</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary glow-text">Data Scientist</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Data Scientist with experience delivering machine learning solutions for legal-tech and logistics sectors.
              Expert in building data pipelines and predictive models that enhance operational efficiency.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center backdrop-blur-sm overflow-hidden border-2 border-primary/30">
            <img src="/profile.png" alt="Manish Choudhary" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

