"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_QUOTE_URL } from "@/lib/whatsapp"

const galleryItems = [
  {
    id: 1,
    title: "Nossa Bancada",
    description: "Estrutura e ferramentas de trabalho em manutenção.",
    category: "Estrutura",
    imageSrc: "/gallery/nossa-bancada-765-1020.webp",
    width: 765,
    height: 1020,
    alt: "Bancada de manutenção com ferramentas e aparelho em reparo",
  },
  {
    id: 2,
    title: "Antes e Depois - Traseira",
    description: "Troca e restauração da parte traseira do aparelho.",
    category: "Microsoldagem",
    imageSrc: "/gallery/antes-depois-traseiro-573-1020.webp",
    width: 573,
    height: 1020,
    alt: "iPhone 14 Pro com traseira danificada e depois restaurada",
  },
  {
    id: 3,
    title: "Antes e Depois - Frontal",
    description: "Troca de frontal com resultado final limpo.",
    category: "Antes x Depois",
    imageSrc: "/gallery/antes-depois-frontal-573-1020.webp",
    width: 573,
    height: 1020,
    alt: "Samsung A06 antes e depois da troca de frontal",
  },
  {
    id: 4,
    title: "Troca de Placa de Carga",
    description: "Instalação de nova placa de carga no aparelho.",
    category: "Processo",
    imageSrc: "/gallery/troca-placa-de-carga-573-1020.webp",
    width: 573,
    height: 1020,
    alt: "Placa de carga pronta para instalação no Moto G8 Plus",
  },
  {
    id: 5,
    title: "Limpeza do Conector de Carga",
    description: "Antes e depois da limpeza técnica do conector.",
    category: "Microsoldagem",
    imageSrc: "/gallery/limpeza-conector-de-carga-573-1020.webp",
    width: 573,
    height: 1020,
    alt: "Conector de carga antes e depois da limpeza técnica",
  },
  {
    id: 6,
    title: "Troca de Bateria",
    description: "Substituição de bateria com peça de qualidade.",
    category: "Bateria",
    imageSrc: "/gallery/troca-de-bateria-573-1020.webp",
    width: 573,
    height: 1020,
    alt: "Troca de bateria do Redmi Note 10S",
  },
  {
    id: 7,
    title: "Troca de Botões",
    description: "Substituição dos botões de volume e power.",
    category: "Micro Reparo",
    imageSrc: "/gallery/troca-de-botoes-573-1020.webp",
    width: 573,
    height: 1020,
    alt: "Botões de volume e power prontos para substituição no Samsung A10S",
  },

]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentItem = galleryItems[currentIndex]
  const nextIndex = (currentIndex + 1) % galleryItems.length
  const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
  const nextItem = galleryItems[nextIndex]
  const prevItem = galleryItems[prevIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="bg-background py-12 sm:py-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Galeria
          </span>
          <h2 id="galeria-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Nosso Trabalho em Detalhes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Confira alguns dos nossos reparos e nossa estrutura de trabalho.
          </p>
        </header>

        {/* Gallery Carousel */}
        <div className="relative mt-16">
          <div className="hidden">
            <Image
              src={nextItem.imageSrc}
              alt=""
              width={nextItem.width}
              height={nextItem.height}
              priority
              decoding="async"
            />
            <Image
              src={prevItem.imageSrc}
              alt=""
              width={prevItem.width}
              height={prevItem.height}
              priority
              decoding="async"
            />
          </div>

          {/* Main Display */}
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-card shadow-lg sm:aspect-video">
            <Image
              src={currentItem.imageSrc}
              alt={currentItem.alt}
              fill
              className="object-cover blur-md brightness-75"
              sizes="100vw"
              priority={currentIndex === 0}
              decoding="async"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/30" />

            <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6">
              <div
                className="relative h-full max-h-full w-full max-w-80 sm:max-w-95 md:max-w-107.5"
                style={{ aspectRatio: `${currentItem.width} / ${currentItem.height}` }}
              >
                <Image
                  src={currentItem.imageSrc}
                  alt={currentItem.alt}
                  fill
                  className="rounded-xl object-contain shadow-2xl"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 430px"
                  decoding="async"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-6 pt-16 sm:px-6">
              <span className="inline-block rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
                {currentItem.category}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                {currentItem.title}
              </h3>
              <p className="mt-1 text-sm text-white/85 sm:text-base">
                {currentItem.description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-background"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-background"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute right-4 top-4 z-30 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
              {currentIndex + 1}/{galleryItems.length}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Quer ver mais do nosso trabalho?
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href={WHATSAPP_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
