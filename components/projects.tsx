"use client"

import { useRef } from "react"
import ProjectCard from "./project-card"
import {
  Database,
  BarChart3,
  MessageSquare,
  LightbulbIcon,
  Building2,
  Car,
  Utensils,
  Bot,
  FileCode,
  Briefcase,
  Search,
  LineChart,
  Rocket,
  TrendingUp,
  Zap,
} from "lucide-react"

const projects = [
  {
    title: "EarlyApply.io - Production Job Intelligence Platform",
    icon: <Rocket />,
    description:
      "🚀 Live platform serving 100+ users with 1000+ monthly visitors, 3.5+ pages visited per session in 3 weeks (zero paid marketing). Architected async Python scraper across 6 ATS portals (Greenhouse, Lever, Ashby, Workday, Oracle, Icims) via 200 concurrent requests every 15 min on GCP Cloud Run. Engineered Gemini 2.0 Flash classification pipeline processing 45K+ jobs, extracting visa sponsorship, location, and experience signals into Supabase PostgreSQL. Built Next.js 14 frontend with Supabase Auth, real-time filtering, PDF.js resume extraction, AI outreach generator, and full activity tracking.",
    technologies: ["Next.js 14", "Python", "GCP Cloud Run", "Supabase", "Gemini 2.0", "Playwright", "Tavily", "GPT-4o"],
    location: "San Jose, CA",
    github: "https://github.com/manishch7/earlyapply",
    website: "https://earlyapply.io",
    featured: true,
  },
  {
    title: "TruthDNA - Autonomous Misinformation Detection",
    icon: <Zap />,
    description:
      "Async pipeline using Tavily (14 sources), GLiNER2 NER (12 entity types), and Reka Vision API processing claims in under 12 seconds. Self-improving Neo4j knowledge graph with confidence-weighted risk scoring and GPT-4o-mini verdict scoring (0-100%) via Streamlit UI and HTML reports.",
    technologies: ["Python", "Tavily", "GLiNER2", "Reka Vision", "Neo4j", "GPT-4o-mini", "Streamlit"],
    location: "Boston, MA",
    github: "https://github.com/manishch7/TruthDNA",
  },
  {
    title: "Graph-RAG Sports Brand Intelligence",
    icon: <TrendingUp />,
    description:
      "End-to-end pipeline processing 75K+ social media posts into Snowflake and Neo4j, RAG-based NL query system with vector embeddings for real-time brand analytics. Streamlit and Plotly dashboard with RoBERTa sentiment analysis, BART topic classification, and GPT conversational Q&A.",
    technologies: ["Neo4j", "Snowflake", "PyTorch", "RoBERTa", "BART", "OpenAI", "Streamlit"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
    medium: "https://medium.com/@choudhary.man",
  },
  {
    title: "Financial Sentiment Analysis Model (NLP Fine-Tuning)",
    icon: <LineChart />,
    description:
      "Fine-tuned DistilBERT on Twitter Financial News dataset, with hyperparameter tuning to reach 87.1% accuracy. Deployed Streamlit UI for real-time sentiment inference with confidence scores, confusion-matrix visualizations, and error-pattern diagnostics.",
    technologies: ["PyTorch", "Hugging Face", "DistilBERT", "scikit-learn", "Streamlit"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
    medium: "https://medium.com/@choudhary.man",
  },
  {
    title: "Financial & News Analysis Chatbot",
    icon: <BarChart3 />,
    description:
      "End-to-end Python pipelines ingesting news articles, balance sheets, and stock prices into Neo4j. Integrated OpenAI gpt-4o-mini for ticker extraction, RoBERTa sentiment analysis, and TensorFlow/Keras LSTM for next-day price forecasting with Matplotlib/Streamlit visualizations.",
    technologies: ["Neo4j", "OpenAI", "RoBERTa", "TensorFlow", "LSTM", "Streamlit"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="projects" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center glow-text opacity-0 animate-on-scroll">
          Real-World Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card-container opacity-0 ${project.featured ? "lg:col-span-2 h-[400px]" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                icon={project.icon}
                description={project.description}
                technologies={project.technologies}
                location={project.location}
                github={project.github}
                medium={project.medium}
                website={project.website}
                featured={project.featured}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
