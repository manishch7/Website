"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

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
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight glow-text">
              Manish Bansilal Choudhary
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white glow-text">Founder & AI/Data Engineer</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Building production-grade AI systems and data platforms. Currently scaling EarlyApply.io — a job intelligence platform serving 170+ users with 1000+ visitors and 3.5+ pages visited in 3 weeks. 3+ years shipping data pipelines, LLM integrations, and cloud infrastructure across compliance, logistics, and AI. Expertise in Python ETL, GCP Cloud Run, Supabase, Gemini 2.0, and autonomous scraping at scale.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full btn-primary text-black"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                See EarlyApply & More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                onClick={() => window.open("https://earlyapply.io", "_blank")}
              >
                Visit EarlyApply.io →
              </Button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/15">
            <Image
              src="/profile-image.png"
              alt="Manish Bansilal Choudhary"
              width={240}
              height={240}
              className="profile-image w-44 h-44 md:w-60 md:h-60"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
