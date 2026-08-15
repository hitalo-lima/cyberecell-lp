"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_QUOTE_URL } from "@/lib/whatsapp"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="CyberECell - voltar ao topo">
            <Image
              src="/cyberecell-logo-h-45.webp"
              alt="Logo CyberECell"
              width={107}
              height={45}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">
                Contato
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col gap-4 px-4 py-6" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">
                  Contato
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
