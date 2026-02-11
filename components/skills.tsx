"use client"

import { useRef } from "react"
import { Code, Database, BarChart3, Brain, Server, LineChart } from "lucide-react"

const skillCategories = [
  {
    title: "Analytics",
    icon: <LineChart className="h-6 w-6" />,
    skills: [
      "SQL",
      "Advanced SQL",
      "KPI Reporting",
      "Statistical Analysis",
      "Forecasting",
      "Excel (Power Query, VBA)",
      "Google Sheets",
    ],
  },
  {
    title: "Data Visualization",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: [
      "Power BI (DAX)",
      "Tableau",
      "Looker",
      "Streamlit",
      "Plotly",
      "Matplotlib",
    ],
  },
  {
    title: "Data Engineering",
    icon: <Server className="h-6 w-6" />,
    skills: [
      "Snowflake",
      "Data Pipelines",
      "SQL Pipelines",
      "Python ETL",
      "API Integration",
      "Workflow Automation (n8n)",
      "Talend",
      "Alteryx",
      "Data Modeling",
      "Data Quality",
      "JSON / REST APIs",
    ],
  },
  {
    title: "GenAI & ML",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      "OpenAI API",
      "LLM Integration",
      "RAG",
      "NLP",
      "Time Series Forecasting",
      "Knowledge Graph Modeling",
      "Semantic Search",
    ],
  },
  {
    title: "Programming",
    icon: <Code className="h-6 w-6" />,
    skills: [
      "Python (Pandas, NumPy, Asyncio)",
      "Cypher",
      "scikit-learn",
      "TensorFlow / Keras",
      "PyTorch",
      "Hugging Face Transformers",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="h-6 w-6" />,
    skills: [
      "Snowflake",
      "Microsoft SQL Server",
      "MySQL",
      "Neo4j",
      "MongoDB",
      "Oracle",
      "AWS S3",
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="skills" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll glow-text">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="skill-category h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
