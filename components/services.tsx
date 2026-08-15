import { Smartphone, ArrowRight, BatteryCharging, PlugZap, Cpu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Smartphone,
    title: "Troca de Tela",
    description:
      "Substituição de display com peças de alta qualidade, restaurando a aparência e a funcionalidade do seu smartphone com segurança e precisão.",
    features: ["Peças de qualidade e acabamento profissional", "Reparo rápido e preço justo", "Garantia real e testes completos"],
  },
  {
    icon: BatteryCharging,
    title: "Troca de Bateria",
    description:
      "Seu smartphone com mais autonomia e desempenho novamente. Substituição de bateria com componentes certificados e instalação profissional com garantia.",
    features: ["Baterias homologadas pela Anatel", "Troca rápida e segura", "Checklist completo antes da entrega"],
  },
  {
    icon: PlugZap,
    title: "Troca de Conector de Carga",
    description:
      "Seu smartphone voltando a carregar com eficiência e segurança. Realizamos a substituição do conector de carga com precisão técnica e componentes de qualidade.",
    features: ["Substituição com peças de qualidade", "Diagnóstico preciso do sistema de carga", "Testes completos de carregamento"],
  },
  {
    icon: Cpu,
    title: "Reparos Intermediários de Placa",
    description:
      "Soluções técnicas para falhas eletrônicas específicas no seu aparelho. Realizamos reparos intermediários com diagnóstico preciso e procedimentos profissionais.",
    features: ["Diagnóstico técnico especializado", "Reparos intermediários realizados em loja", "Testes completos após o reparo"],
  },
]

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-secondary/50 py-12 sm:py-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nossos Serviços
          </span>
          <h2 id="servicos-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Assistência técnica especializada
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Realizamos os principais reparos em smartphones com peças de qualidade, garantia, preço justo e atendimento profissional.
          </p>
        </header>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-3 w-3 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* Decorative Element */}
              <div className="absolute -bottom-1 -right-1 h-20 w-20 rounded-tl-3xl bg-primary/5 transition-all group-hover:bg-primary/10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
