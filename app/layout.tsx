import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'CyberECell | Assistência Técnica de Celular e Acessórios',
  description: 'Assistência técnica especializada em conserto de smartphones, localizada em São Leopoldo - RS. Reparos rápidos, peças de qualidade e garantia real, com atendimento diferenciado para cuidar do seu aparelho com segurança.',
  keywords: ['reparo smartphone', 'conserto de celular', 'assistência técnica smartphone', 'troca de tela', 'bateria celular', 'microsoldagem', 'São Leopoldo', 'multimarcas', 'capinha celular', 'película de vidro', 'carregador celular'],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CyberECell",
              "description": "Assistência técnica especializada em conserto de smartphones, localizada em São Leopoldo - RS. Reparos rápidos, peças de qualidade e garantia real, com atendimento diferenciado para cuidar do seu aparelho com segurança.",
              "image": "https://cyberecell.com.br/exterior-assistencia.webp",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Theodomiro Porto da Fonseca, 191",
                "addressLocality": "São Leopoldo",
                "addressRegion": "RS",
                "postalCode": "93010-305",
                "addressCountry": "BR"
              },
              "telephone": "+5551992667440",
              "url": "https://cyberecell.com.br",
              "openingHours": ["Mo-Fr 09:00-18:00"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "200"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -29.770668149381304,
                "longitude": -51.14860853376678
              }
            })
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
