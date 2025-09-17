"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Briefcase, Plus, X } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    company: "Humanitarians AI",
    position: "Data and AI Engineer",
    period: "Sep 2025 – Present",
    location: "Boston, MA",
    responsibilities: [
      "Building AI Job Search Agents using RAG, LLM, LangChain, and Cloud Data Warehouse technologies to create intelligent job matching systems.",
      "Responsible for developing comprehensive data pipelines for job and resume data processing, ensuring efficient data flow and transformation across multiple systems.",
      "Applying Large Language Models (LLMs) for advanced text understanding and natural language processing to extract meaningful insights from job descriptions and resumes.",
      "Implementing Retrieval Augmented Generation (RAG) systems for intelligent job matching, combining semantic search with generative AI to provide personalized job recommendations.",
      "Creating autonomous agents for automation and real-time user interaction, enabling seamless user experiences and reducing manual intervention in job search processes.",
    ],
  },
  {
    company: "Kroll",
    position: "Data Executive",
    period: "Sep 2022 – Jul 2023",
    location: "Mumbai, Maharashtra, India",
    responsibilities: [
      "Engineered ETL pipelines by ingesting settlement data into AWS S3, orchestrating workflows with Airflow and applying Spark and SQL transformations for reconciliation and validation.",
      "Integrated LexisNexis APIs and developed reconciliation scripts to strengthen compliance workflows before loading datasets into Snowflake, fast-tracking the process by reducing manual intervention for reviews.",
      "Designed Snowflake data models with star schema and SCD Type 2 pipelines, enabling audit-ready compliance and finance reporting.",
      "Implemented data masking using tokenization and hashing and enforced column-level RBAC, ensuring secure access for compliance and finance teams while supporting analyst dashboards.",
      "Applied Redis query caching to accelerate compliance dashboard performance, improving responsiveness for audit and risk users.",
    ],
  },
  {
    company: "BLC Logistics",
    position: "Analyst",
    period: "May 2020 – Aug 2022",
    location: "Mumbai, Maharashtra, India",
    responsibilities: [
      "Built near-real-time GPS tracking pipeline using Kafka streams and Redis caching for operations team route optimization, reducing query response time by 65%.",
      "Automated finance team invoice reconciliation with AWS Lambda and Talend mapping, matching delivery confirmations to billing data and reducing manual work significantly.",
      "Developed dual-stream architecture processing GPS data for operations and invoice workflows for finance, utilizing Snowflake Tasks and Streams for automated ETL.",
      "Created department-specific dashboards in Power BI combining GPS analytics for operations and financial KPIs for finance, reducing logistics costs by 12% YoY.",
      "Implemented Airflow orchestration managing separate data pipelines for operations GPS feeds and finance billing workflows, ensuring reliable cross-system validation.",
    ],
  },
  {
    company: "Motilal Oswal Financial Services",
    position: "Research Analyst Intern",
    period: "Apr 2019 – Jul 2019",
    location: "Mumbai, Maharashtra, India",
    responsibilities: [
      "Performed comprehensive equity research by analyzing complex financial statements and developing Python scripts to automate data extraction, significantly enhancing analysis efficiency.",
      "Constructed sophisticated predictive models to evaluate diverse investment opportunities, providing critical support for portfolio analytics and enabling data-driven risk assessment strategies.",
      "Revamped data reporting workflows to optimize decision-making processes for investment analysis, resulting in more timely and actionable intelligence for investment teams.",
    ],
  },
]

export default function ExperienceTree() {
  const [activeLeaf, setActiveLeaf] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
            setActiveLeaf(null) // Reset active leaf when scrolling away
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleLeafClick = (index: number) => {
    setActiveLeaf(activeLeaf === index ? null : index)
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Aurora background for the entire section */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url(/images/aurora-background.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 0.2 : 0,
        }}
      />

      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center glow-text">Professional Experience</h2>

        {/* Tree container */}
        <div className="relative">
          {/* Tree trunk - visible on desktop only */}
          {!isMobile && (
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-4 bg-gradient-to-t from-[#3a1c5e] to-[#6a3c9e] rounded-full transition-all duration-1000 ease-out ${isVisible ? "h-[80%] opacity-100" : "h-0 opacity-0"}`}
              style={{
                bottom: "5%",
                top: "15%",
                backgroundImage: "url(/images/aurora-background.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "soft-light",
                boxShadow: "0 0 15px rgba(106, 60, 158, 0.5)",
              }}
            />
          )}

          {/* Experience leaves */}
          <div className="relative flex flex-col items-center gap-16 md:gap-24 py-4">
            {experiences.map((experience, index) => {
              // Calculate branch position for desktop
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`w-full max-w-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <div
                    className={`relative flex ${isLeft && !isMobile ? "justify-start" : !isMobile ? "justify-end" : "justify-center"}`}
                  >
                    {/* Branch connecting to trunk (desktop only) */}
                    {!isMobile && (
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-[#6a3c9e] to-[#3a1c5e] z-0 ${isLeft ? "left-full" : "right-full"}`}
                        style={{
                          width: "3rem",
                          backgroundImage: "url(/images/aurora-background.jpeg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "soft-light",
                        }}
                      />
                    )}

                    {/* Leaf card container */}
                    <div
                      className={`relative z-10 ${!isMobile ? "w-[85%] md:w-[70%] lg:w-[60%]" : "w-full"} ${isLeft && !isMobile ? "mr-12" : !isMobile ? "ml-12" : ""}`}
                    >
                      {/* Leaf card */}
                      <div
                        className={`
                          relative cursor-pointer transition-all duration-500 ease-in-out
                          ${activeLeaf === index ? "scale-100" : "hover:scale-105"}
                        `}
                        onClick={() => handleLeafClick(index)}
                      >
                        {/* Collapsed leaf view */}
                        {activeLeaf !== index ? (
                          <div className="leaf-card relative overflow-hidden rounded-2xl">
                            <div
                              className="p-5 backdrop-blur-md flex items-center gap-4"
                              style={{
                                background: "rgba(30, 10, 60, 0.7)",
                                border: "1px solid rgba(180, 120, 255, 0.3)",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 15px rgba(180, 70, 255, 0.2)",
                              }}
                            >
                              <div
                                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                  backgroundImage: "url(/images/aurora-background.jpeg)",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  border: "1px solid rgba(180, 120, 255, 0.3)",
                                }}
                              >
                                <Briefcase className="h-6 w-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-white text-lg">{experience.position}</h3>
                                <p className="text-white/80">{experience.company}</p>
                                <p className="text-sm text-white/60 mt-1">{experience.period}</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center backdrop-blur-sm">
                                <Plus className="h-5 w-5 text-white" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Expanded card view
                          <Card
                            className="p-6 relative overflow-hidden"
                            style={{
                              background: "rgba(20, 5, 40, 0.85)",
                              backdropFilter: "blur(12px)",
                              border: "1px solid rgba(180, 120, 255, 0.3)",
                              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(180, 70, 255, 0.3)",
                            }}
                          >
                            <button
                              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                setActiveLeaf(null)
                              }}
                            >
                              <X className="h-5 w-5 text-white" />
                            </button>

                            <div className="mb-4">
                              <div className="flex items-center gap-4 mb-3">
                                <div
                                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                  style={{
                                    backgroundImage: "url(/images/aurora-background.jpeg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    border: "1px solid rgba(180, 120, 255, 0.3)",
                                  }}
                                >
                                  <Briefcase className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-semibold">{experience.position}</h3>
                                  <div className="text-primary font-medium">{experience.company}</div>
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {experience.period} | {experience.location}
                              </div>
                            </div>

                            <ul className="space-y-3">
                              {experience.responsibilities.map((resp, idx) => (
                                <li key={idx} className="text-sm">
                                  {resp}
                                </li>
                              ))}
                            </ul>

                            {/* Subtle aurora background effect */}
                            <div
                              className="absolute inset-0 -z-10 opacity-20 pointer-events-none"
                              style={{
                                backgroundImage: "url(/images/aurora-background.jpeg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                mixBlendMode: "screen",
                              }}
                            />
                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
