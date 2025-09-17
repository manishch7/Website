"use client"

import { useRef } from "react"
import ProjectCard from "./project-card"
import { Database, BarChart3, MessageSquare, LightbulbIcon, Building2, Car, Utensils } from "lucide-react"

const projects = [
  {
    title: "Graph-Powered Event Recommendation System",
    icon: <Database />,
    description:
      "Designed and implemented a personalized event discovery system using Neo4j, creating a knowledge graph model connecting people, events, and attendance patterns. Developed both collaborative and content-based filtering approaches using Cypher queries to provide explainable recommendations.",
    technologies: ["Neo4j", "Cypher", "Knowledge Graph", "Collaborative Filtering"],
    location: "Boston, MA",
  },
  {
    title: "GraphRAG-Based Brand Intelligence System",
    icon: <Database />,
    description:
      "Built a Neo4j knowledge graph from web-scraped Twitter data using Snowflake for data storage and processing to model brand interactions, sentiment (RoBERTa), and topics (zero-shot Hugging Face). Integrated a GraphRAG pipeline using GPT-4o mini for brand-related Q&A.",
    technologies: ["Neo4j", "Snowflake", "RoBERTa", "Hugging Face", "GPT-4o mini", "Streamlit"],
    location: "Boston, MA",
  },
  {
    title: "Financial & News Analysis Chatbot",
    icon: <BarChart3 />,
    description:
      "Extracted news articles, balance sheets, and stock prices into a Neo4j database and applied a Sentiment RoBERTa model to derive market sentiment insights. Developed a TensorFlow LSTM model integrated with technical indicators for robust stock price forecasting.",
    technologies: ["Neo4j", "RoBERTa", "TensorFlow", "LSTM", "Streamlit"],
    location: "Boston, MA",
  },
  {
    title: "Portfolio FAQ Chatbot",
    icon: <MessageSquare />,
    description:
      "Designed and built an interactive portfolio chatbot using Voiceflow with logic blocks, capture, speak, agent, and conditional flows. Implemented LLM-powered knowledge base integration to answer portfolio-related questions about projects, skills, and contact information.",
    technologies: ["Voiceflow", "LLM", "Knowledge Base", "Conversational AI"],
    location: "Boston, MA",
  },
  {
    title: "Chain of Thought (CoT) Prompt Pattern Study",
    icon: <LightbulbIcon />,
    description:
      "Researched and documented the Chain of Thought prompt engineering technique, creating comprehensive educational materials on step-by-step reasoning approaches for complex problem-solving with LLMs. Developed interactive learning materials including example prompts.",
    technologies: ["Prompt Engineering", "LLM", "Chain of Thought", "Educational Content"],
    location: "Boston, MA",
  },
  {
    title: "Service Request Analytics: Study of Kansas City's 311 Calls",
    icon: <Building2 />,
    description:
      "Staged and profiled data from Kansas City's 311 service request system using Alteryx, reducing data preparation time by 20%. Created interactive dashboards using Power BI and Tableau to visualize service request patterns and response times.",
    technologies: ["Alteryx", "Power BI", "Tableau", "Data Analysis"],
    location: "Boston, MA",
  },
  {
    title: "Motor Vehicle Collision/Crash Report Analysis",
    icon: <Car />,
    description:
      "Led a team analyzing vehicle collision datasets from New York, Austin, and Chicago government sources. Performed comprehensive data profiling, cleaning, and SQL validation to ensure data accuracy and integrity.",
    technologies: ["SQL", "Data Profiling", "Data Visualization", "Team Leadership"],
    location: "Boston, MA",
  },
  {
    title: "Dabba On Wheels - Food Delivery Service",
    icon: <Utensils />,
    description:
      "Designed an Oracle database for subscription and order management. Developed PL/SQL programs to support scalable, efficient delivery workflows.",
    technologies: ["Oracle", "PL/SQL", "Database Design", "Workflow Optimization"],
    location: "Boston, MA",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="projects" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center glow-text opacity-0 animate-on-scroll">
          Academic Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card-container opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                icon={project.icon}
                description={project.description}
                technologies={project.technologies}
                location={project.location}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
