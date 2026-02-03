"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export default function Blogs() {
  const parallaxOffset = useParallax(0.02)

  const blogs = [
    {
      title: "Contextual Temporal Classification (CTC)",
      subtitle: "Sequence Modeling",
      description:
        "Deep dive into CTC ALgorithm from basics to the core usage of it in sequence based problems.",
      tags: ["CTC", "Sequence Modeling", "Deep Learning", "Automatic Speech Recognition", "Viterbi Algorithm", "Expectations"],
      meta: ["15-20 min read"],
      url: "https://neeraj-pola.github.io/CTC/",
    },
    {
      title: "Retrieval-Augmented Generation",
      subtitle: "RAGs and LangChain",
      description:
        "Deep dive into the working of RAGs and their need along with a code-along to get you ready",
      tags: ["RAG", "LangChain", "Vector Databases", "Retrieval-Augmented Generation", "AI"],
      meta: ["12-15 min read"],
      url: "https://neeraj-pola.github.io/RAG/",
    },
  ]

  return (
    <section id="blogs" className="relative py-24 px-20 bg-#FAF4DC]">
      <div
        className="container mx-auto max-w-5xl"
        style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
      >
        <div className="space-y-16">
          {/* Section header */}
          <div className="space-y-4">
            <span className="font-mono text-sm text-muted-foreground tracking-wider">
              04 / BLOGS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Technincal Writing & Insights
            </h2>
          </div>

          {/* Blogs grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-0 shadow-xl shadow-foreground/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex flex-col h-full space-y-5">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-mono text-primary">
                        {blog.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {blog.title}
                      </h3>
                    </div>

                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Read blog"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {blog.description}
                  </p>

                  {/* Meta */}
                  {blog.meta.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {blog.meta.map((item, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-primary/40 text-foreground font-mono text-xs"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-muted-foreground font-mono"
                      >
                        {tag}
                        {i < blog.tags.length - 1 && " ·"}
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