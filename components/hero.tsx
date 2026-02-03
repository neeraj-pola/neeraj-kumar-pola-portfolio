"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, MapPin } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const parallaxOffset = useParallax(0.03)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-5xl">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transform: `translateY(${-parallaxOffset}px)` }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Content */}
            
            <div className="flex-1 space-y-8">

              <div className="inline-flex items-center gap-2">
                <span className="w-10 h-1 bg-primary rounded-full" />
                
                <span className="text-muted-foreground font-mono text-sm tracking-wide">Machine Learning Engineer</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-balance">
                <span className="text-foreground">Neeraj Kumar</span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-foreground">Pola</span>
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-primary/50 -z-0 rounded-sm" />
                </span>
              </h1>


              <p className="text-xl md:text-xl font-medium text-foreground max-w-xl leading-snug">
                Applied Data & ML Engineer building production-ready systems across data, machine learning, and analytics.
              </p>

              <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl leading-snug">
                I’ve delivered end-to-end data and ML pipelines that
                <span className="font-semibold text-foreground"> reduced processing time by 12x</span>,
                improved model performance from
                <span className="font-semibold text-foreground"> 95% to 98%</span>,
                and supported real-time, data-driven decision-making in production.
              </p>

              <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-xl leading-snug">
                My work includes fine-tuning large models such as
                <span className="font-medium text-foreground"> Wav2Vec2 for low resource languages and LLMs</span>,
                building scalable data pipelines, and deploying ML systems that bridge research and real-world use cases.
              </p>
{/* 
              <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-xl leading-snug">
                Currently seeking roles in <span className="font-medium text-foreground">data science, data engineering, and AI/ML engineering</span> where ownership and impact matter.
              </p> */}

              <p className="text-sm text-muted-foreground mt-1">
              Machine Learning · Data Science · Agentic AI · Data Analytics
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-lg shadow-primary/25"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-muted hover:border-foreground/30 bg-transparent font-medium"
                  asChild
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>

              <div className="flex items-center gap-5 pt-4">
                <a
                  href="https://github.com/neeraj-pola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/neeraj-pola-381670247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:neerajpola2002@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                {/* Decorative yellow ring */}
                <div className="absolute -inset-3 bg-primary/40 rounded-full blur-3xl" />
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                  <img
                    src="/Profile_picture.jpg"
                    alt="Neeraj Kumar Pola"
                    className="w-half h-half object-cover hover:scale-[1.03] transition-transform"
                  />
                </div>
                {/* Floating accent badge */}
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-mono text-sm font-semibold shadow-lg">
                  MS in AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
