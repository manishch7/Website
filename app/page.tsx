"use client"

import { useEffect, useRef } from "react"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import ExperienceTree from "@/components/experience-tree"
import Education from "@/components/education"
import Contact from "@/components/contact"
import BackgroundImage from "@/components/background-image"

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate in if the section is entering the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")

            // Find all animatable elements within this section
            const animatableElements = entry.target.querySelectorAll(".animate-on-scroll, .project-card-container")
            animatableElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-in")
              }, 100 * index)
            })
          } else {
            // Remove animation classes when section leaves viewport
            entry.target.classList.remove("animate-in")

            const animatableElements = entry.target.querySelectorAll(".animate-on-scroll, .project-card-container")
            animatableElements.forEach((el) => {
              el.classList.remove("animate-in")
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px", // Trigger a bit before the section enters the viewport
      },
    )

    // Observe all section containers
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  // Function to add sections to the ref array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <main className="min-h-screen">
      <BackgroundImage />
      <div className="section-container">
        <Hero />
      </div>
      <div ref={addToRefs} className="section-transition section-observer opacity-0">
        <Projects />
      </div>
      <div ref={addToRefs} className="section-transition section-observer opacity-0">
        <Skills />
      </div>
      <div ref={addToRefs} className="section-transition section-observer opacity-0">
        <ExperienceTree />
      </div>
      <div ref={addToRefs} className="section-transition section-observer opacity-0">
        <Education />
      </div>
      <div ref={addToRefs} className="section-transition section-observer opacity-0">
        <Contact />
      </div>
    </main>
  )
}
