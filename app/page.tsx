import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProcessSection from '@/components/ProcessSection'
import CommitmentsSection from '@/components/CommitmentsSection'
import FormContact from '@/components/FormContact'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />
      <HeroSection />
      <div id="benefices">
        <BenefitsSection />
      </div>
      <div id="temoignages">
        <TestimonialsSection />
      </div>
      <div id="process">
        <ProcessSection />
      </div>
      <CommitmentsSection />
      <div id="contact">
        <FormContact />
      </div>
      <Footer />
      <StickyCTA />
    </main>
  )
}

