const steps = [
  {
    number: '01',
    title: 'Cadastre seus clientes e projetos',
    description:
      'Importe ou registre seus clientes e comece a organizar cada trabalho da sua serralheria em segundos.',
  },
  {
    number: '02',
    title: 'Monte orçamentos e ordens de serviço',
    description:
      'Crie orçamentos com preços de materiais e mão de obra, aprove e converta em ordem de serviço com um clique.',
  },
  {
    number: '03',
    title: 'Acompanhe até a entrega',
    description:
      'Controle o status da produção, o estoque de materiais e a agenda de instalações do início ao fim.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simples de usar
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-700 uppercase tracking-tight sm:text-4xl">
            Comece a organizar em 3 passos
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-3">
              <span className="font-heading text-5xl font-700 text-steel">{step.number}</span>
              <div className="h-0.5 w-12 bg-primary" aria-hidden="true" />
              <h3 className="font-heading text-xl font-600 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
