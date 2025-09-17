"use client"

import { useRef } from "react"
import { Code, Database, BarChart3, Brain, Server, LineChart } from "lucide-react"

const skillCategories = [
  {
    title: "Programming & Software Development",
    icon: <Code className="h-6 w-6" />,
    skills: [
      "Python (NumPy, Pandas, SciPy)",
      "SQL",
      "R",
      "PL/SQL",
      "Advanced Excel (VBA, Macros)",
      "Git",
      "Version Control",
    ],
  },
  {
    title: "Machine Learning & Statistical Analysis",
    icon: <LineChart className="h-6 w-6" />,
    skills: [
      "Scikit-Learn",
      "Regression Modeling",
      "Time Series Forecasting",
      "Anomaly Detection",
      "Bayesian Methods",
      "A/B Testing",
      "Feature Engineering",
    ],
  },
  {
    title: "Deep Learning & Natural Language Processing",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      "TensorFlow",
      "Keras",
      "LSTM Networks",
      "Transformer Models (RoBERTa)",
      "Hugging Face",
      "Zero-shot Classification",
      "Named Entity Recognition",
    ],
  },
  {
    title: "Data Engineering & Cloud Infrastructure",
    icon: <Server className="h-6 w-6" />,
    skills: [
      "Airflow",
      "AWS (EC2, S3, Lambda)",
      "ETL Pipeline Development",
      "Snowflake",
      "Oracle",
      "Data Warehouse Design",
      "Data Modeling",
    ],
  },
  {
    title: "Visualization & Business Intelligence",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: [
      "Power BI (DAX, Power Query)",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Flask",
      "Plotly",
      "Streamlit",
      "Interactive Dashboard Design",
    ],
  },
  {
    title: "Advanced Technologies & Architectures",
    icon: <Database className="h-6 w-6" />,
    skills: [
      "Neo4j Graph Database",
      "GraphRAG Implementations",
      "Large Language Models (GPT)",
      "Knowledge Graph Construction",
      "Vector Databases",
      "Semantic Search",
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
