"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    school: "Northeastern University",
    location: "Boston, MA",
    degree: "Master's, Data Architecture and Management",
    period: "Expected May 2025",
    gpa: "GPA: 3.6",
    courses:
      "Prompt Engineering & AI, LLM with Knowledge Graph DB, Generative AI with Applications in Data Engineering, Parallel Machine Learning & AI",
  },
  {
    school: "University of Mumbai",
    location: "Mumbai, India",
    degree: "Bachelor's, Management Studies",
    period: "Jun 2018 – Apr 2021",
    gpa: "GPA: 3.7",
    courses: "",
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="education" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="container max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll glow-text">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="p-6 cosmic-card h-full">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                    <div className="text-primary font-medium">{edu.degree}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {edu.period} | {edu.location}
                    </div>
                    <div className="text-sm font-medium mt-2">{edu.gpa}</div>
                    {edu.courses && (
                      <div className="text-sm text-muted-foreground mt-2">
                        <span className="font-medium">Relevant Coursework:</span> {edu.courses}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
