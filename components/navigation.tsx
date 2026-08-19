"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Avatar */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/Profile_picture.jpg"
              alt="Neeraj Kumar Pola"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/40"
            />
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">NKP</span>
              <span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://github.com/neeraj-pola/Resumes/blob/main/Neeraj_Kumar_Pola_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md shadow-primary/20"
              >
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://github.com/neeraj-pola/Resumes/blob/main/Neeraj_Kumar_Pola_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="w-full mt-4 bg-primary text-primary-foreground font-semibold"
              >
                Resume
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
