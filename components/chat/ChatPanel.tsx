"use client"

import { useEffect, useRef, useState } from "react"
import ChatBubble from "./ChatBubble"

const API_URL = process.env.NEXT_PUBLIC_CHAT_API!
const STORAGE_KEY = "neeraj_chat_messages"

type Message = {
  role: "user" | "bot"
  content: string
}

function getLastMessages(messages: Message[], n = 6) {
  return messages.slice(-n)
}

export default function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  /* ---------------------------
     Load messages on mount
  ---------------------------- */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const greetings = ["Hey 👋", "Howdie🤠", "Ahoy⚓️!", "What's Up? 🌥️"];
    const randomInt = Math.floor(Math.random() * (3 - 0 + 1) + 0)

    if (saved) {
      setMessages(JSON.parse(saved))
    } else {
      setMessages([{ role: "bot", content: greetings[randomInt] }])
    }
  }, [])

  /* ---------------------------
     Persist messages
  ---------------------------- */
  useEffect(() => {
    if (messages.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages])

  /* ---------------------------
     Auto scroll
  ---------------------------- */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function sendMessage() {
    if (!input.trim() || loading) return

    const question = input.trim()

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: question },
    ]

    setInput("")
    setMessages(nextMessages)
    setLoading(true)

    // Add typing placeholder
    setMessages((m) => [...m, { role: "bot", content: "typing" }])

    let botMessage = ""
    let buffer = ""
    let lastFlush = Date.now()

    try {
      const res = await fetch(`${API_URL}-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          history: getLastMessages(nextMessages, 6),
        }),
      })

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error("No stream")

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (!line.startsWith("data:")) continue

          const data = line.replace("data:", "").trim()
          if (data === "[DONE]") break

          const parsed = JSON.parse(data)
          if (!parsed.token) continue

          buffer += parsed.token

          const now = Date.now()
          if (now - lastFlush >10) {
            botMessage += buffer
            buffer = ""
            lastFlush = now

            setMessages((m) => {
              const updated = [...m]
              updated[updated.length - 1] = {
                role: "bot",
                content: botMessage,
              }
              return updated
            })
          }
        }
      }

      // Flush remaining buffer
      if (buffer.length) {
        botMessage += buffer
        setMessages((m) => {
          const updated = [...m]
          updated[updated.length - 1] = {
            role: "bot",
            content: botMessage,
          }
          return updated
        })
      }
    } catch (err) {
      console.error(err)
      setMessages((m) => [
        ...m.slice(0, -1),
        { role: "bot", content: "Something went wrong 😅" },
      ])
    } finally {
      setLoading(false)
    }
  }

  function clearChat() {
    localStorage.removeItem(STORAGE_KEY)
    setMessages([{ role: "bot", content: "Hey 👋" }])
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[360px] rounded-2xl bg-[#FFF7DD] border border-[#ECDCA3] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
        <span className="font-semibold text-sm">
          Neeraj.AI 
        </span>
        <div className="flex gap-2">
          <button
            onClick={clearChat}
            className="text-xs opacity-80 hover:opacity-100"
          >
            Clear
          </button>
          <button onClick={onClose} className="opacity-80 hover:opacity-100">
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="h-[360px] overflow-y-auto p-4 space-y-4 bg-[#FBF3D6]">
        {messages.map((m, i) => (
          <ChatBubble key={i} role={m.role} text={m.content} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-[#FFFDF4] border-t border-[#ECDCA3] flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something…"
          className="flex-1 rounded-xl border border-[#ECDCA3] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="rounded-xl bg-primary px-4 text-primary-foreground hover:scale-105 transition disabled:opacity-50"
        >
          ➤
        </button>
      </div>
    </div>
  )
}