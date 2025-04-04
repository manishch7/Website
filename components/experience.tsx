"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Kroll Settlement Administration",
    position: "Data Analyst",
    period: "Sep 2022 – Jul 2023",
    location: "Mumbai, Maharashtra, India",
    responsibilities: [
      "Architected end-to-end Python data pipelines for processing complex legal settlement claims, resulting in 30% improved case processing efficiency and reduced operational bottlenecks.",
      "Engineered a sophisticated fraud detection system combining supervised learning algorithms with anomaly detection techniques to identify irregular patterns in legal claims, significantly enhancing compliance accuracy.",
      "Designed intuitive Power BI dashboards with dynamic visualizations of case status and risk indicators, enabling stakeholders to monitor high-value settlements in real-time and make data-driven decisions.",
      "Collaborated cross-functionally with legal teams to extract actionable insights from claimant data through advanced statistical analysis and exploratory data techniques, directly influencing case strategy.",
      "Implemented automated data validation protocols with intelligent quality checks, substantially reducing manual review time and minimizing human error in the settlement process.",
    ],
  },
  {
    company: "BLC Logistics",
    position: "Jr. Data Scientist",
    period: "May 2020 – Aug 2022",
    location: "Mumbai, Maharashtra, India",
    responsibilities: [
      "Developed sophisticated predictive maintenance models leveraging time-series analysis to forecast vehicle maintenance needs with high accuracy, significantly improving fleet uptime and reducing unexpected breakdowns.",
      "Constructed a robust ETL pipeline with Airflow that seamlessly integrated real-time traffic and fuel consumption data, enabling intelligent route optimization that reduced transportation costs by 20%.",
      "Implemented advanced SQL-based inventory analytics that transformed raw data into actionable intelligence, enhancing warehouse stock turnover through precise demand forecasting algorithms.",
      "Crafted interactive dashboards using Python (Flask, Matplotlib) that visualized critical fleet performance metrics, providing operations teams with comprehensive insights for strategic decision-making.",
      "Pioneered an AWS-powered system for processing IoT sensor data from fleet vehicles, eliminating manual collection processes while enabling real-time shipment tracking and monitoring.",
      "Spearheaded collaboration with logistics managers to identify and implement data-driven optimization opportunities, resulting in measurable improvements in delivery performance and customer satisfaction.",
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

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="container max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll glow-text">
          Professional Experience
        </h2>
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 animate-on-scroll ${
                index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
              }`}
              style={{
                maxWidth: "calc(100% - 40px)",
                marginLeft: index % 2 === 0 ? "40px" : undefined,
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute left-0 md:left-auto md:right-full md:mr-8 top-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <Card className="p-6 cosmic-card">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <div className="text-primary font-medium">{exp.company}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {exp.period} | {exp.location}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm">
                      {resp}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

