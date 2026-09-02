'use client'

import { CheckCircle2, Loader2 } from 'lucide-react'
import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success'

export function SignupForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ nome: '', email: '', oficina: '', whatsapp: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    // Simulação de envio (somente visual por enquanto)
    setTimeout(() => setStatus('success'), 900)
  }

  return (
    <section id="cadastro" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Comece hoje
            </span>
            <h2 className="text-balance font-heading text-3xl font-700 uppercase leading-tight tracking-tight sm:text-4xl">
              Assine e organize sua serralheria em minutos
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Cadastre-se para começar o teste grátis de 14 dias. Sem cartão de crédito, sem
              complicação. Você recebe o acesso e o passo a passo no seu WhatsApp.
            </p>
            <ul className="flex flex-col gap-2 pt-2">
              {['14 dias grátis', 'Cancele quando quiser', 'Suporte humano em português'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-700 uppercase tracking-wide">
                  Cadastro recebido!
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Obrigado, {form.nome || 'serralheiro'}. Em breve entraremos em contato pelo WhatsApp
                  com o acesso ao seu teste grátis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nome" className="text-sm font-medium text-foreground">
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="rounded border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="oficina" className="text-sm font-medium text-foreground">
                    Nome da serralheria
                  </label>
                  <input
                    id="oficina"
                    name="oficina"
                    type="text"
                    required
                    value={form.oficina}
                    onChange={handleChange}
                    placeholder="Ex: Serralheria do João"
                    className="rounded border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@email.com"
                    className="rounded border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-foreground">
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="rounded border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    'Quero meu teste grátis'
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Ao se cadastrar, você concorda em receber contato da nossa equipe.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
