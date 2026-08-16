"use client"

import { Badge } from "@/components/ui/badge"
import { useParallax } from "@/hooks/use-parallax"

export default function Experience() {
  const parallaxOffset = useParallax(0.02)

  /* ---------------------------
     Work Experience
  ---------------------------- */
  const experiences = [
      {
      title: "AI Engineer",
      company: "VRT Management Group, LLC",
      period: "Mar 2026 - Present",
      achievements: [
        "Led a company-wide AI automation initiative using n8n and LangChain, automating 8+ business workflows and cutting manual processing time by 70%.",
        "Built an 8-agent recruitment pipeline (LangGraph, FastAPI, Streamlit) that turns a raw job description into a ranked, audited shortlist with personalized outreach in under 2 minutes for $0.05 in LLM cost, validated at a 100% pass rate across a 10-job regression suite.",
        "Built a hybrid retrieval and scoring system (vector search, keyword search, cross-encoder reranking) running 300 evidence-backed evaluations per job, with bias safeguards that screen job descriptions in under 2 seconds and strip names before scoring.",
        "Simplified candidate sourcing by replacing three separate job board integrations with a single spreadsheet upload, cutting integration overhead while holding 100% recall on duplicate detection across 110 candidates."
      ],
      metrics: ["8+ business workflows", "70% Faster"],
    },
    
    {
      title: "Machine Learning Engineer Intern",
      company: "Media Sales Plus",
      period: "Aug 2025 - Dec 2025",
      achievements: [
        "Architected and deployed a production-grade NLP system leveraging spaCy NER, rule-based supervision, regex pipelines, entity normalization, and linguistic feature engineering to convert unstructured text into high-fidelity structured outputs with full correction traceability.",
        "Built end-to-end data pipelines with automated validation, error detection, profanity screening, and relationship extraction, improving overall processing accuracy from ~95% to ~98% while enabling scalable analytics and downstream data consumption.",
        "Reduced manual processing time from ~60 minutes to 5 minutes per document (12× productivity gain) by automating editorial workflows and deployed the system as a Flask-based service on Azure App Service, ensuring reliability, scalability, and low-latency access in production.",
      ],
      metrics: ["98% Accuracy", "12× Speedup"],
    },
    {
      title: "Artificial Intelligence Intern",
      company: "CAIR, DRDO",
      period: "Oct 2023 - Mar 2024",
      achievements: [
        "Fine-tuned Wav2Vec2 transformer ASR models on 45+ hours of Bengali and Assamese audio.",
        "Achieved WER 38.7 and CER 10.2 on Bengali, with 12–18% WER improvement on Assamese.",
        "Engineered a custom 512-unit neural layer for BPE-based transfer learning on resource-scarce datasets.",
        "Collaborated with senior researchers to design and implement methodologies from research literature.",
      ],
      metrics: ["WER 38.7", "45+ Hours"],
    },
    {
      title: "Machine Learning Intern",
      company: "Feynn Labs",
      period: "Mar 2023 - May 2023",
      achievements: [
        "Built time-series forecasting models using Python, SQL, and Prophet, improving demand prediction accuracy by 15%.",
        "Performed statistical analysis, feature engineering, and customer segmentation to support data-driven decisions.",
        "Created interactive dashboards in Tableau and Power BI for KPI reporting to stakeholders.",
      ],
      metrics: ["15% Improvement"],
    },
  ]

  /* ---------------------------
     College Club Activities
  ---------------------------- */
  const clubActivities = [
    {
      title: "Machine Learning Associate",
      organization: "EpsilonPi (University ML Club)",
      period: "Aug 2022 - Oct 2023",
      achievements: [
        "Organized and led Enigma, a large-scale machine learning competition with 200+ participants, designing problem statements and datasets across multiple difficulty levels.",
        "Delivered a technical lecture on machine learning models and practical applications to an audience of 500+ students.",
        "Actively mentored peers on machine learning fundamentals, model optimization, and real-world use cases.",
      ],
      metrics: ["200+ Participants", "500+ Attendees"],
    },
    {
      title: "Senior Software Developer",
      organization: "coding.Studio() (University Tech Club)",
      period: "Aug 2022 - Mar 2024",
      achievements: [
        "Played a key role in building and maintaining college-wide full-stack projects used by students across departments.",
        "Mentored peers in Python programming, software architecture, and project structuring best practices.",
        "Participated in multiple IEEE and inter-college coding competitions, collaborating in team-based problem-solving environments.",
      ],
      metrics: ["Full-Stack Projects", "IEEE Competitions"],
    },
  ]

  return (
    <section id="experience" className="relative py-28 px-4 bg-white">
      <div
        className="container mx-auto max-w-5xl"
        style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
      >
        <div className="space-y-20">
          {/* ---------------------------
              Section Header
          ---------------------------- */}
          <div className="space-y-4">
            <span className="font-mono text-sm text-muted-foreground tracking-wider">
              02 / EXPERIENCE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Work History
            </h2>
          </div>

          {/* ---------------------------
              Work History
          ---------------------------- */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40" />

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex gap-2">
                        {exp.metrics.map((metric, i) => (
                          <Badge
                            key={i}
                            className="bg-primary/20 text-foreground font-mono text-xs border-0"
                          >
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {exp.company}
                      </span>
                      <span className="mx-2">·</span>
                      <span className="font-mono text-sm">{exp.period}</span>
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-primary mt-1.5 text-xs">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ---------------------------
              College Club Activities
          ---------------------------- */}
          <div className="space-y-10">
  <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
    College Club Activities
  </h3>

  <div className="space-y-8">
    {clubActivities.map((club, index) => (
      <div
        key={index}
        className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors pb-8 last:pb-0"
      >
        {/* Yellow dot — SAME as Work History */}
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40" />

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-foreground">
                {club.title}
              </h3>
              <div className="flex gap-2">
                {club.metrics.map((metric, i) => (
                  <Badge
                    key={i}
                    className="bg-primary/20 text-foreground font-mono text-xs border-0"
                  >
                    {metric}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">
                {club.organization}
              </span>
              <span className="mx-2">·</span>
              <span className="font-mono text-sm">
                {club.period}
              </span>
            </p>
          </div>

          <ul className="space-y-2">
            {club.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3"
              >
                <span className="text-primary mt-1.5 text-xs">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>


        </div>
      </div>
    </section>
  )
}
