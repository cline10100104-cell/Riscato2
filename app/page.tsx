import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { SignupForm } from '@/components/signup-form'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <SignupForm />
      </main>
      <SiteFooter />
    </div>
  )
}
