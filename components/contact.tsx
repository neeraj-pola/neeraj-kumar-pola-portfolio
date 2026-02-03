"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Github, Linkedin, Globe, ArrowUpRight } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export default function Contact() {
  const parallaxOffset = useParallax(0.015)

  return (
    <section id="contact" className="relative py-28 px-4 bg-[#EFE3C2]">
      <div className="container mx-auto max-w-5xl" style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}>
        <div className="space-y-16">
          <div className="space-y-4">
            <span className="font-mono text-sm text-foreground/60 tracking-wider">06 / CONTACT</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Get In Touch</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact info */}
            <div className="space-y-8">
              <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
                I'm currently looking for new opportunities in ML engineering and data science. Feel free to reach out
                if you'd like to collaborate or just say hello.
              </p>

              <div className="space-y-5">
                <a
                  href="mailto:npola2@buffalo.edu"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 uppercase tracking-wider">Email</p>
                    <p className="font-mono text-foreground">neerajpola2002@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+17169579524"
                  className="flex items-center gap-4 text-foreground hover:text-secondary transition-colors group"
                >
                  <div className="p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 uppercase tracking-wider">Phone</p>
                    <p className="font-mono text-foreground">+1 716-957-9524</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-foreground">
                  <div className="p-3 bg-white rounded-xl shadow-md">
                    <MapPin className="text-muted-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 uppercase tracking-wider">Location</p>
                    <p className="text-foreground">Buffalo, NY</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://github.com/neeraj-pola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/neeraj-pola-381670247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://neeraj-pola.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:text-primary transition-all"
                  aria-label="Website"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col justify-center">
              <div className="p-10 bg-white rounded-2xl shadow-xl shadow-foreground/5 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Let's build something impactful together.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it's a complex ML system, Finetuning, or an innovative AI application, I'm ready to
                  contribute.
                </p>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 shadow-lg shadow-primary/25"
                  asChild
                >
                  <a href="mailto:neerajpola2002@gmail.com">
                    Send a Message
                    <ArrowUpRight size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="container mx-auto max-w-1xl mt-20 pt-8 border-t border-foreground/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© 2026 Neeraj Kumar Pola</p>
        </div>
      </footer>
    </section>
  )
}
