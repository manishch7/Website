import type React from "react"
import { Card } from "@/components/ui/card"

interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  skills: string[]
}

export default function SkillCategory({ title, icon, skills }: SkillCategoryProps) {
  return (
    <Card className="p-6 cosmic-card h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </Card>
  )
}

