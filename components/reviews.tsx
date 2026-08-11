"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false)

  useEffect(() => {
    const target = sectionRef.current
    if (!target || shouldLoadWidget) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          setShouldLoadWidget(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [shouldLoadWidget])

  return (
    <section
      ref={sectionRef}
      id="avaliacoes"
      aria-labelledby="avaliacoes-title"
      className="bg-secondary/50 py-14 sm:py-20 lg:py-28"
    >
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Avaliações
          </span>
          <h2 id="avaliacoes-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Já são <strong className="text-primary">mais de 200 avaliações 5 estrelas no Google</strong>. Excelência reconhecida por nossos clientes.
          </p>
        </header>

        <div className="mt-16">
          <div
            className={`relative min-h-25 overflow-hidden rounded-2xl ${
              shouldLoadWidget ? "bg-transparent" : "bg-muted/40"
            }`}
            aria-busy={!shouldLoadWidget}
          >
            {!shouldLoadWidget ? (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted/30 via-muted/60 to-muted/30" />
            ) : null}

            {shouldLoadWidget ? (
              <div className="elfsight-app-d825703c-6138-4f48-8212-cd71c15590fb" />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
