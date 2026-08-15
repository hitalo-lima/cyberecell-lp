import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AnotherServices } from "@/components/another-services"
import { Reviews } from "@/components/reviews"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AnotherServices />
      <Reviews />
      <Gallery />

      <section id="localizacao" className="bg-secondary/50 py-12 sm:py-16 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 text-center sm:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Localização</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Venha nos visitar
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground">
              Estamos em São Leopoldo - RS, na Avenida Theodomiro Porto da Fonseca, 191.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              title="Localização da CyberECell em São Leopoldo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.240492762612!2d-51.148597800000005!3d-29.770686799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519691914f56b57%3A0xca03a4ce4d766d6b!2sCyber%20E%20Cell%20%7C%20Assist%C3%AAncia%20T%C3%A9cnica%20de%20Celular!5e0!3m2!1spt-BR!2sbr!4v1786751480020!5m2!1spt-BR!2sbr"
              className="h-80 w-full border-0 sm:h-104"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
