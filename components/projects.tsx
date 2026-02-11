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
} from "lucide-react"

const projects = [
  {
    title: "Workday Job Scraper & Automation Pipeline",
    icon: <Briefcase />,
    description:
      "Built a Python-based data ingestion pipeline using Requests and concurrent execution to scrape job postings from 100+ Workday-powered career sites, producing normalized, structured job datasets. Implemented modular filtering, deduplication, and job lifecycle tracking with reusable components.",
    technologies: ["Python", "Requests", "Concurrency", "Data Pipelines"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
  },
  {
    title: "Ashby Job Scraper, Matcher & Automation Workflow",
    icon: <Search />,
    description:
      "Developed an automated data pipeline using Python and REST APIs to ingest job postings from 300+ Ashby-hosted companies. Implemented rule-based and LLM-assisted job matching using Python and OpenAI APIs for downstream automation.",
    technologies: ["Python", "REST APIs", "OpenAI API", "LLM Matching"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
  },
  {
    title: "Greenhouse Job Scraper & Data Processing Pipeline",
    icon: <Database />,
    description:
      "Built a scalable Python data pipeline to collect job postings from 500+ Greenhouse-powered career portals, handling pagination, normalization, and structured field extraction. Designed modular filtering, matching, and persistence layers.",
    technologies: ["Python", "Data Pipelines", "Batch Processing", "Automation"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
  },
  {
    title: "GraphRAG-Based Brand Intelligence System",
    icon: <Database />,
    description:
      "Built end-to-end sportswear brand analytics platform using Python, Twikit, Asyncio for data collection; Snowflake and Neo4j for storage; and PyTorch, HuggingFace Transformers (RoBERTa, BART), OpenAI API for ML processing. Developed interactive dashboard and NL query system with Streamlit, Plotly, and RAG with GPT models.",
    technologies: ["Neo4j", "Snowflake", "PyTorch", "HuggingFace", "OpenAI API", "Streamlit"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
    medium: "https://medium.com/@choudhary.man",
  },
  {
    title: "Graph-Powered Event Recommendation System",
    icon: <Database />,
    description:
      "Built a Neo4j-backed knowledge graph connecting users, events, and attendance patterns, and implemented explainable collaborative and content-based filtering via Cypher. Collaborated on a flexible, real-time querying platform with visual exploration of recommendation paths.",
    technologies: ["Neo4j", "Cypher", "Knowledge Graph", "Collaborative Filtering"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
    medium: "https://medium.com/@choudhary.man",
  },
  {
    title: "AI-Powered Code Documentation Assistant",
    icon: <FileCode />,
    description:
      "Developed a Code Documentation Assistant using OpenAI, Pinecone, and Streamlit that leverages RAG to intelligently retrieve code context and generate comprehensive technical documentation. Engineered specialized prompts combining vector embeddings and LLMs to automate creation of high-quality documentation.",
    technologies: ["OpenAI", "Pinecone", "Streamlit", "RAG", "Vector Embeddings"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
    medium: "https://medium.com/@choudhary.man",
  },
  {
    title: "Financial Sentiment Analysis Model (NLP Fine-Tuning)",
    icon: <LineChart />,
    description:
      "Fine-tuned DistilBERT (PyTorch + Hugging Face) on the Twitter Financial News dataset, with hyperparameter tuning and error analysis via scikit-learn and matplotlib to reach 87.1% accuracy. Deployed a Streamlit UI for real-time sentiment inference with confidence scores and diagnostics.",
    technologies: ["PyTorch", "Hugging Face", "DistilBERT", "scikit-learn", "Streamlit"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
    medium: "https://medium.com/@choudhary.man",
  },
  {
    title: "Financial & News Analysis Chatbot",
    icon: <BarChart3 />,
    description:
      "Engineered end-to-end data pipelines in Python to ingest news articles, balance sheets, and stock prices into Neo4j via Cypher. Built advanced analytics & UI integrating OpenAI gpt-4o-mini for ticker extraction, RoBERTa sentiment analysis, and TensorFlow/Keras LSTM for price forecasting.",
    technologies: ["Neo4j", "OpenAI", "RoBERTa", "TensorFlow", "LSTM", "Streamlit"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
  },
  {
    title: "Portfolio FAQ Chatbot",
    icon: <MessageSquare />,
    description:
      "Designed and built an interactive portfolio chatbot using Voiceflow with logic blocks, capture, speak, agent, and conditional flows. Implemented LLM-powered knowledge base integration to answer portfolio-related questions with personalized user experiences.",
    technologies: ["Voiceflow", "LLM", "Knowledge Base", "Conversational AI"],
    location: "Boston, MA",
    github: "https://github.com/manishch7",
  },
  {
    title: "Chain of Thought (CoT) Prompt Pattern Study",
    icon: <LightbulbIcon />,
    description:
      "Researched and documented the Chain of Thought prompt engineering technique, creating comprehensive educational materials on step-by-step reasoning for complex problem-solving with LLMs. Developed interactive learning materials and multimodal educational content.",
    technologies: ["Prompt Engineering", "LLM", "Chain of Thought", "Education"],
    location: "Boston, MA",
  },
  {
    title: "Service Request Analytics: Kansas City 311 Calls",
    icon: <Building2 />,
    description:
      "Staged and profiled data from Kansas City's 311 service request system using Alteryx, reducing data preparation time by 20%. Created interactive dashboards using Power BI and Tableau, providing actionable insights that helped increase operational efficiency by 30%.",
    technologies: ["Alteryx", "Power BI", "Tableau", "Data Analysis"],
    location: "Boston, MA",
  },
  {
    title: "Motor Vehicle Collision/Crash Report Analysis",
    icon: <Car />,
    description:
      "Led a team analyzing vehicle collision datasets from New York, Austin, and Chicago government sources. Performed comprehensive data profiling, cleaning, and SQL validation. Developed interactive visualizations identifying high-risk areas and contributing factors.",
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
              className="project-card-container opacity-0"
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
