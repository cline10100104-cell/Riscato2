import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const highlights = ['Orçamentos em minutos', 'Sem instalação', 'Suporte em português']

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Feito para serralheiros
          </span>

          <h1 className="text-balance font-heading text-4xl font-700 uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            A sua serralheria <span className="text-primary">organizada</span> do orçamento à entrega
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            O Riscato reúne orçamentos, ordens de serviço, controle de materiais e clientes em um só
            lugar. Ganhe tempo na oficina e feche mais trabalhos sem depender de caderno e planilha.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-accent"
            >
              Quero testar grátis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded border border-border bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Ver como funciona
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/hero-serralheria.png"
              alt="Serralheiro soldando uma estrutura de aço com faíscas em uma oficina moderna"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="absolute -bottom-4 -left-4 hidden rounded-lg border border-border bg-card p-4 shadow-xl sm:block">
            <p className="font-heading text-3xl font-700 text-primary">+38%</p>
            <p className="text-xs text-muted-foreground">de orçamentos fechados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
