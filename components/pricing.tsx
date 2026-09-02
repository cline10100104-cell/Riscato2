import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Bancada',
    price: '49',
    description: 'Para o serralheiro autônomo que quer sair do caderno.',
    features: [
      'Até 30 orçamentos por mês',
      'Cadastro de clientes ilimitado',
      'Orçamentos em PDF',
      'Controle básico de materiais',
      '1 usuário',
    ],
    highlighted: false,
  },
  {
    name: 'Oficina',
    price: '99',
    description: 'Para serralherias com equipe e vários projetos ao mesmo tempo.',
    features: [
      'Orçamentos ilimitados',
      'Ordens de serviço com status',
      'Controle de estoque e alertas',
      'Agenda de instalações',
      'Relatórios do negócio',
      'Até 5 usuários',
    ],
    highlighted: true,
  },
  {
    name: 'Indústria',
    price: '199',
    description: 'Para serralherias em crescimento que precisam de mais controle.',
    features: [
      'Tudo do plano Oficina',
      'Usuários ilimitados',
      'Múltiplas unidades',
      'Suporte prioritário',
      'Integrações personalizadas',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="planos" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Planos</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-700 uppercase tracking-tight sm:text-4xl">
            Um plano para cada tamanho de oficina
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Teste grátis por 14 dias, sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-lg border bg-card p-8 ${
                plan.highlighted ? 'border-primary shadow-xl' : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Mais popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-700 uppercase tracking-wide">{plan.name}</h3>
              <p className="mt-2 min-h-10 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="font-heading text-5xl font-700">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cadastro"
                className={`mt-8 inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-accent'
                    : 'border border-border text-foreground hover:bg-muted'
                }`}
              >
                Começar teste grátis
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
