import { Cable, Camera, Droplets, Headphones, RotateCcw, Shield, Smartphone, Sparkles, Wrench } from "lucide-react"

const otherServices = [
  {
    icon: Camera,
    title: "Troca de periféricos",
    description: "Câmera, alto-falante, microfone e sensores.",
  },
  {
    icon: RotateCcw,
    title: "Hard Reset e formatação",
    description: "Restauração de sistema com configuração inicial.",
  },
  {
    icon: Sparkles,
    title: "Limpeza interna preventiva",
    description: "Higienização técnica para manter o bom funcionamento.",
  },
  {
    icon: Droplets,
    title: "Desoxidação de aparelhos",
    description: "Tratamento para aparelhos com sinais de umidade.",
  },
  {
    icon: Smartphone,
    title: "Aplicação de películas",
    description: "Aplicação com alinhamento preciso.",
  },
  {
    icon: Shield,
    title: "Capinhas protetoras",
    description: "Modelos para proteção no dia a dia.",
  },
  {
    icon: Cable,
    title: "Carregadores e cabos",
    description: "Opções de carregamento e cabos para diferentes modelos.",
  },
  {
    icon: Headphones,
    title: "Fones de ouvido",
    description: "Alternativas com fio e sem fio.",
  },
  {
    icon: Wrench,
    title: "Outros acessórios disponíveis",
    description: "Consulte itens adicionais conforme disponibilidade.",
  },
]

export function AnotherServices() {
  return (
    <section id="demais-servicos" aria-labelledby="demais-servicos-title" className="bg-background py-12 sm:py-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Demais Serviços
          </span>
          <h2 id="demais-servicos-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluções extras para manter seu smartphone completo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Além dos reparos principais, também oferecemos serviços complementares e acessórios
            para garantir praticidade, proteção e melhor desempenho no seu dia a dia.
          </p>
        </header>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service) => (
            <div
              key={service.title}
              className="group flex gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-card-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
