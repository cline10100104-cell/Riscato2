import { Flame } from 'lucide-react'

const columns = [
  {
    title: 'Produto',
    links: ['Recursos', 'Planos', 'Depoimentos', 'Novidades'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nós', 'Blog', 'Contato', 'Trabalhe conosco'],
  },
  {
    title: 'Suporte',
    links: ['Central de ajuda', 'Tutoriais', 'Status', 'Fale conosco'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground">
                <Flame className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-700 uppercase tracking-wide">
                Ris<span className="text-primary">cato</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              O software de gestão pensado para o dia a dia da serralheria brasileira.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-600 uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} Riscato. Todos os direitos reservados.`}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Termos de uso
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
