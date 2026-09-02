'use client'

import { Flame, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground">
            <Flame className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-700 uppercase tracking-wide">
            Forja<span className="text-primary">Flow</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#cadastro"
            className="rounded bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            Começar agora
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cadastro"
              onClick={() => setOpen(false)}
              className="mt-2 rounded bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Começar agora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
