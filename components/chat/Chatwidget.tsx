"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import ChatPanel from "./ChatPanel"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-10 right-10 z-50 flex items-center gap-2 rounded-full bg-primary px-10 py-8 text-primary-foreground shadow-xl hover:scale-105 transition-transform"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        <span className="text-sm font-medium">
          {open ? "Close" : "Chat with me"}
        </span>
      </button>

      {/* Chat Panel */}
      {open && <ChatPanel onClose={() => setOpen(false)} />}
    </>
  )
}