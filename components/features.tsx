import { FileText, ClipboardList, Package, Users, CalendarClock, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Orçamentos rápidos',
    description:
      'Monte orçamentos profissionais com itens, mão de obra e materiais. Envie em PDF pelo WhatsApp em minutos.',
  },
  {
    icon: ClipboardList,
    title: 'Ordens de serviço',
    description:
      'Acompanhe cada projeto por status: aprovado, em produção, instalação e concluído. Nada se perde.',
  },
  {
    icon: Package,
    title: 'Controle de materiais',
    description:
      'Saiba quanto de ferro, tubo, chapa e solda você tem em estoque e receba alertas de reposição.',
  },
  {
    icon: Users,
    title: 'Cadastro de clientes',
    description:
      'Histórico completo de cada cliente, com projetos, orçamentos e contatos sempre à mão.',
  },
  {
    icon: CalendarClock,
    title: 'Agenda de instalações',
    description:
      'Organize as visitas e instalações da equipe em um calendário simples e evite conflitos de horário.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios do negócio',
    description:
      'Veja faturamento, projetos em aberto e margem de lucro para tomar decisões com dados reais.',
  },
]

export function Features() {
  return (
    <section id="recursos" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Tudo em um só lugar
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-700 uppercase tracking-tight sm:text-4xl">
            Feito para o dia a dia da oficina
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Do primeiro contato do cliente até a entrega da peça, o Riscato cuida da parte
            burocrática para você focar no que faz de melhor: trabalhar o metal.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-600 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
