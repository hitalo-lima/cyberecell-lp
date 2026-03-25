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
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
