"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="contact" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="container max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll glow-text">Contact</h2>
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <Card className="p-8 cosmic-card">
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1">
                <Mail className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                <a href="mailto:manishbch07@gmail.com" className="text-base hover:text-white transition-colors">
                  manishbch07@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1">
                <Phone className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                <a href="tel:6173314105" className="text-base hover:text-white transition-colors">
                  +1 (617) 331-4105
                </a>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1">
                <Linkedin className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                <a
                  href="https://www.linkedin.com/in/manish-choudhary-bch7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1">
                <Github className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                <a
                  href="https://github.com/manishch7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1">
                <FileText className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                <a
                  href="https://medium.com/@choudhary.man"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-white transition-colors"
                >
                  Medium
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
