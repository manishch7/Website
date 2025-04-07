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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <Card className="p-6 cosmic-card h-full">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:choudhary.man@northeastern.edu" className="text-sm hover:text-primary">
                    choudhary.man@northeastern.edu
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:6173314105" className="text-sm hover:text-primary">
                    617-331-4105
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/manish-choudhary-bch7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary"
                  >
                    linkedin.com/in/manish-choudhary-bch7
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/manishch7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary"
                  >
                    github.com/manishch7
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <a
                    href="https://medium.com/@choudhary.man"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary"
                  >
                    medium.com/@choudhary.man
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: "150ms" }}>
            <Card className="p-6 cosmic-card">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="bg-background/20 border-primary/20 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-background/20 border-primary/20 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Message"
                    className="bg-background/20 border-primary/20 backdrop-blur-sm min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-primary/80 hover:bg-primary/90 backdrop-blur-sm"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

