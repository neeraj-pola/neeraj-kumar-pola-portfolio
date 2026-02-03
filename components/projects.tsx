"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export default function Projects() {
  const parallaxOffset = useParallax(0.02)

  const projects = [
    {
      title: "Wav2Vec2-for-customized-language",
      subtitle: "ASR System",
      description:
        "Fine-tuned Wav2Vec2 models for underrepresented languages with custom retrainable modules for Bengali and Assamese speech-to-text conversion.",
      tags: ["PyTorch", "Wav2Vec2", "Transformers", "ASR"],
      metrics: ["WER 38.7", "45+ Hours"],
      featured: true,
      url: "https://github.com/neeraj-pola/Wav2Vec2-for-customized-language",
    },
    {
      title: "MindMate",
      subtitle: "AI Mental Health Platform",
      description:
        "End-to-end RAG platform with TiDB vector DB, LangChain orchestration, and OpenAI APIs for contextual PHQ-9 and GAD-7 mental health assessments.",
      tags: ["RAG", "LangChain", "FastAPI", "Vector DB"],
      metrics: ["1000+ Sessions", "Real-time"],
      featured: true,
      url: "https://github.com/neeraj-pola/MindMate",
    },
    {
      title: "Surya Namaskar with Real-time Feedback",
      subtitle: "Yoga Pose and Sequence Detection",
      description:
        "Real-time yoga pose classification using MediaPipe for accurate posture analysis with instant feedback.",
      tags: ["Computer Vision", "MediaPipe", "Python"],
      metrics: ["Published Research"],
      featured: true,
      url: "https://github.com/neeraj-pola/suryanamaskar",
    },
    {
      title: "Time Series Forecasting",
      subtitle: "Demand Prediction Pipeline",
      description:
        "ETL pipelines feeding Prophet and LSTM models for improved forecast accuracy on 10,000+ time series records.",
      tags: ["Prophet", "LSTM", "ETL"],
      metrics: ["15% ↑ Accuracy", "10K+ Records"],
      featured: true,
      url: "https://github.com/neeraj-pola/Time-series-Analysis-and-Prediction",
    },
    {
      title: "Music-Generator-using-Genetic-Algorithm",
      subtitle: "Can we generate new music? That is what we tried to find out",
      description:
        "Music generation using genetic algorithms to explore evolutionary approaches to creative composition.",
      tags: ["Python", "FastAPI", "Genetic Algorithms"],
      metrics: [],
      featured: true,
      url: "https://github.com/Jhanavi-24/Music-Generator-using-Genetic-Algorithm",
    },
    {
      title:
        "Comparative Analysis of Algorithms in Discrete and Continuous Action Spaces",
      subtitle: "Reinforcement Learning Project",
      description:
        "Implemented and benchmarked RL algorithms (A3C, PPO, TD3, DDPG, DQN, DDQN) across CartPole, LunarLander, MountainCar, Pendulum, and Atari environments.",
      tags: ["PyTorch", "OpenAI Gym", "NumPy", "Matplotlib"],
      metrics: [],
      featured: true,
      url: "https://github.com/Jhanavi-24/Comparative_Analysis_of_algorithms_in_discrete_and_continuous_action_spaces",
    },
    {
      title: "Time Table Generator Using Linear Programming",
      subtitle: "Optimization System",
      description:
        "Flexible timetable generator using linear programming to efficiently handle constraints like subjects, faculty, and class frequency.",
      tags: ["Python", "PuLP", "Optimization"],
      metrics: [],
      featured: true,
      url: "https://github.com/neeraj-pola/Time-Table-Generator",
    },
  ]

  return (
    <section id="projects" className="relative py-28 px-4 bg-[#EFE3C2]">
      <div
        className="container mx-auto max-w-5xl"
        style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
      >
        <div className="space-y-16">
          <div className="space-y-4">
            <span className="font-mono text-sm text-muted-foreground tracking-wider">
              03 / PROJECTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Applied Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-0 shadow-xl shadow-foreground/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex flex-col h-full space-y-5">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-mono text-primary">
                        {project.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <Badge
                          key={i}
                          className="bg-primary text-primary-foreground font-mono text-xs shadow-md shadow-primary/20"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-muted-foreground font-mono"
                      >
                        {tag}
                        {i < project.tags.length - 1 && " ·"}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}