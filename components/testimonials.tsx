import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Antes eu perdia orçamento anotado em papel. Hoje mando tudo em PDF pelo WhatsApp na hora e fecho muito mais serviço.',
    name: 'Carlos Menezes',
    role: 'Serralheria Menezes • Campinas/SP',
  },
  {
    quote:
      'O controle de material salvou minha oficina. Nunca mais parei uma produção porque acabou a chapa sem eu perceber.',
    name: 'Rafael Souza',
    role: 'RS Estruturas Metálicas • Curitiba/PR',
  },
  {
    quote:
      'Consigo ver todos os projetos em andamento e cobrar minha equipe pelo status. Ficou tudo mais organizado.',
    name: 'Anderson Lima',
    role: 'Portões & Cia • Fortaleza/CE',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quem usa aprova
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-700 uppercase tracking-tight sm:text-4xl">
            Serralheiros que saíram do caderno
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-lg border border-border bg-background p-6"
            >
              <div className="flex gap-1" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-base font-600 uppercase tracking-wide">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
