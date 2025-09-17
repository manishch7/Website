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
            <h2 className="text-2xl md:text-3xl font-medium text-primary glow-text">Data and AI Engineer</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Data and AI Engineer with industry experience in SQL, Python, and BI dashboards, combined with academic
              expertise in ML, NLP, and cloud. Skilled in AWS, Snowflake, Spark, Kafka and Airflow to build scalable,
              audit-ready pipelines and analytics solutions supporting compliance-driven environments.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 btn-primary"
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
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center backdrop-blur-sm">
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
