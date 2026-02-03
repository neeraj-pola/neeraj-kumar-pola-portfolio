"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export default function About() {
  const parallaxOffset = useParallax(0.025)

  return (
    <section id="about" className="relative py-28 px-4 bg-[#EFE3C2]">
      <div className="container mx-auto max-w-5xl" style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}>
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-sm text-foreground/60 tracking-wider">01 / EDUCATION</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Background</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 md:p-8 bg-card border-0 shadow-xl shadow-foreground/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <GraduationCap className="text-primary" size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-card-foreground">University at Buffalo</h3>
                  <p className="text-muted-foreground text-sm">Masters in Artificial Intelligence</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-mono text-muted-foreground">
                  GPA: <span className="text-foreground font-semibold">3.46/4</span> · Aug 2024 - Present
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deep Learning, Machine Learning, Data Intensive Computing, Reinforcement Learning, Algorithms, Artificial Intelligence, Computer Vision, Pattern Recognition
                </p>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-card border-0 shadow-xl shadow-foreground/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <GraduationCap className="text-secondary" size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-card-foreground">VBIT</h3>
                  <p className="text-muted-foreground text-sm">B.Tech in CS (AI & ML)</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-mono text-muted-foreground">
                  GPA: <span className="text-foreground font-semibold">8.38/10</span> · Sept 2020 - Apr 2024
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data Structures, Cloud Architecture, Computer Vision, NLP, Algorithms, Machine Learning, Database Management Systems, Software Engineering.
                </p>
              </div>
            </Card>
          </div>

          {/* <div className="flex items-center gap-2 text-foreground/70">
            <MapPin size={18} />
            <span className="text-sm font-medium">Based in Buffalo, NY</span>
          </div> */}
        </div>
      </div>
    </section>
  )
}
