import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import CosmicBackground from "@/components/cosmic-background"
import CursorEffect from "@/components/cursor-effect"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <CursorEffect />
      <CosmicBackground />
      <div className="section-container">
        <Hero />
      </div>
      <div className="section-transition">
        <Projects />
      </div>
      <div className="section-transition">
        <Skills />
      </div>
      <div className="section-transition">
        <Experience />
      </div>
      <div className="section-transition">
        <Education />
      </div>
      <div className="section-transition">
        <Contact />
      </div>
    </main>
  )
}

