import { Clock, Phone } from "lucide-react"
import { FacebookIcon } from "./icons/facebook-icon"
import { InstagramIcon } from "./icons/instagram-icon"

const contactInfo = [
  {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sex: 9h às 18h",
    detail: "Sáb: 9h às 12h",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(51) 99266-7440",
    detail: "WhatsApp disponível",
  },
]

const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/cyberecell", label: "Instagram" },
  { icon: FacebookIcon, href: "https://www.facebook.com/CyberECel/", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-sm text-background/70 leading-relaxed">
              Assistência técnica especializada em conserto de smartphones.
            </p>

            {/* Social Links */}
            <nav className="mt-6 flex gap-4" aria-label="Redes sociais">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-3">
              {contactInfo.map((info) => (
                <address key={info.label} className="flex gap-4 not-italic">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                    <info.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-background/50">
                      {info.label}
                    </span>
                    <p className="mt-1 font-semibold text-background">{info.value}</p>
                    <p className="text-sm text-background/70">{info.detail}</p>
                  </div>
                </address>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">
            &copy; 2026 CyberECell. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
