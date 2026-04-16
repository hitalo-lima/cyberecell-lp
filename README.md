# CyberECell LP

Landing page da [CyberECell](https://cyberecell.com.br), assistência técnica especializada em smartphones, localizada em São Leopoldo - RS.

## Funcionalidades

### SEO
- `<title>` e `<meta description>` configurados via `next/metadata`.
- `keywords` relevantes para buscas locais (conserto de celular, troca de tela, São Leopoldo, etc.).
- Structured data (JSON-LD) com schema `LocalBusiness` contendo endereço, telefone, horário de funcionamento, coordenadas geográficas e avaliação agregada — melhora a exibição no Google (rich results, Google Maps).
- `lang="pt-BR"` no HTML para indexação correta pelo idioma.
- Favicon configurado para desktop e Apple touch.

### Seções da página
| Seção | Conteúdo |
|---|---|
| **Header** | Logo e navegação |
| **Hero** | Headline, diferenciais e CTA para orçamento via WhatsApp |
| **Serviços** | Troca de tela, bateria, conector de carga e reparos de placa |
| **Demais serviços** | Periféricos, hard reset, limpeza, desoxidação, películas e acessórios |
| **Avaliações** | Widget do Google Reviews (Elfsight) com lazy load via IntersectionObserver |
| **Galeria** | Carrossel de fotos dos reparos realizados |
| **Footer** | Endereço, horário, telefone, Instagram e Facebook |

### Performance e UX
- Fontes otimizadas com `next/font` (sem layout shift).
- Imagens com `next/image` (lazy load automático, formatos modernos `.webp`).
- Widget de avaliações carregado apenas quando visível na tela (IntersectionObserver).
- Botão flutuante de WhatsApp acessível em todas as seções.
- Layout responsivo mobile-first com Tailwind CSS.

### Analytics
- [Vercel Analytics](https://vercel.com/analytics) integrado para monitoramento de pageviews e performance sem configuração extra.

## Stack
- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** (componentes base)
- **Vercel Analytics**

## Desenvolvimento

```bash
npm ci
npm run dev   # http://localhost:3000
```
