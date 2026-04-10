import { ArrowRight, Shield, Clock, Award, UserStar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_QUOTE_URL } from "@/lib/whatsapp"

const features = [
  { icon: Shield, label: "Peças de qualidade" },
  { icon: Clock, label: "Reparo rápido" },
  { icon: Award, label: "Garantia real" },
  { icon: UserStar, label: "Atendimento diferenciado" },
]

function CircuitPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.18]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Grid lines */}
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#64983c" strokeWidth="0.5" />
          {/* Horizontal traces */}
          <line x1="0" y1="20" x2="30" y2="20" stroke="#64983c" strokeWidth="1" />
          <line x1="50" y1="20" x2="80" y2="20" stroke="#64983c" strokeWidth="1" />
          <line x1="0" y1="60" x2="20" y2="60" stroke="#64983c" strokeWidth="1" />
          <line x1="60" y1="60" x2="80" y2="60" stroke="#64983c" strokeWidth="1" />
          {/* Vertical traces */}
          <line x1="20" y1="0" x2="20" y2="15" stroke="#64983c" strokeWidth="1" />
          <line x1="20" y1="25" x2="20" y2="55" stroke="#64983c" strokeWidth="1" />
          <line x1="60" y1="25" x2="60" y2="80" stroke="#64983c" strokeWidth="1" />
          {/* Nodes / solder pads */}
          <circle cx="20" cy="20" r="2.5" fill="#64983c" />
          <circle cx="60" cy="20" r="2.5" fill="#64983c" />
          <circle cx="20" cy="60" r="2.5" fill="#64983c" />
          <circle cx="60" cy="60" r="2.5" fill="#64983c" />
          {/* Small IC outline */}
          <rect x="32" y="32" width="16" height="16" rx="2" fill="none" stroke="#64983c" strokeWidth="0.8" />
          <line x1="32" y1="36" x2="28" y2="36" stroke="#64983c" strokeWidth="0.8" />
          <line x1="32" y1="40" x2="28" y2="40" stroke="#64983c" strokeWidth="0.8" />
          <line x1="48" y1="36" x2="52" y2="36" stroke="#64983c" strokeWidth="0.8" />
          <line x1="48" y1="40" x2="52" y2="40" stroke="#64983c" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-background pt-24 pb-14 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Circuit board SVG background */}
      <CircuitPattern />

      {/* Soft color washes */}
      <div className="absolute top-0 right-0 z-0 h-125 w-125 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 z-0 h-100 w-100 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-primary">Assistência Técnica de Celulares e Acessórios</span>
          </div>

          {/* Headline */}
          <h1 id="hero-title" className="max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
            Consertamos seu smartphone com <span className="text-primary">excelência</span> e <span className="text-primary">confiança</span>.
          </h1>

          
          {/* Subheadline */}
          <p className="mt-6 max-w-2xl leading-relaxed text-base text-muted-foreground text-pretty lg:text-xl">
            Assistência técnica especializada em <strong>conserto de smartphones</strong>, localizada em{" "}
            <a
              href="https://maps.app.goo.gl/SU2UrV6XKeoisPEM6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-3 hover:text-primary/80"
            >
              <MapPin className="inline h-4 w-4 mr-0.5" aria-hidden="true" /><strong className="font-semibold">São Leopoldo - RS</strong>
            </a>
            .
            Reparos rápidos, peças de qualidade e garantia real, com atendimento diferenciado para cuidar do seu aparelho com segurança.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 animate-pulse"
            >
              <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento via WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary text-base"
            >
              <a href="#servicos">Ver Serviços</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
