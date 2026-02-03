"use client"

import { useEffect, useState } from "react"

export function useParallax(speed = 0.03) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Cap at 5% scroll delta for premium feel
      const scrollY = window.scrollY
      const maxOffset = 16 // max 16px transform
      const calculatedOffset = scrollY * speed
      setOffset(Math.min(calculatedOffset, maxOffset))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return offset
}
