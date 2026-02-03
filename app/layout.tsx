import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ChatWidget from "@/components/chat/Chatwidget"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Neeraj Kumar Pola - Portfolio",
  description:
    "Applied Data & AI Engineer specializing in machine learning, NLP, ASR, and production-ready ML systems.",
  icons: {
    icon: "/Profile_picture.jpg",        // browser tab
    shortcut: "/Profile_picture.jpg",    // legacy support
    apple: "/Profile_picture.jpg",       // iOS / Safari
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <ChatWidget />
      </body>
    </html>
  )
}