"use client"

import { MessageCircle } from "lucide-react"
import { WHATSAPP_QUOTE_URL } from "@/lib/whatsapp"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_QUOTE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Abrir conversa no WhatsApp</span>
      
      {/* Pulse Animation */}
      <span className="absolute -z-10 h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  )
}
