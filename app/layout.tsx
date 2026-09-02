import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Riscato — Gestão completa para serralherias',
  description:
    'O software que organiza orçamentos, ordens de serviço, materiais e clientes da sua serralheria. Menos papelada, mais projetos entregues no prazo.',
  keywords: [
    'software para serralheria',
    'gestão de serralheria',
    'orçamento serralheria',
    'ordem de serviço',
    'sistema para serralheiro',
  ],
  openGraph: {
    title: 'Riscato — Gestão completa para serralherias',
    description:
      'Organize orçamentos, ordens de serviço e materiais da sua serralheria em um só lugar.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport = {
  themeColor: '#16181c',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
