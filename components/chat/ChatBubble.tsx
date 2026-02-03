"use client"

export default function ChatBubble({
  role,
  text,
}: {
  role: "user" | "bot"
  text: string
}) {
  const isUser = role === "user"
  const isTyping = text === "typing"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed shadow-sm
        ${
          isUser
            ? "bg-[#F2CF63] text-black rounded-2xl rounded-br-md"
            : "bg-white text-black border border-gray-100 rounded-2xl rounded-bl-md"
        }`}
      >
        {isTyping ? (
          <span className="flex gap-1 items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
          </span>
        ) : (
          text
        )}
      </div>
    </div>
  )
}