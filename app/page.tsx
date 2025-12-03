import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { USPSection } from "@/components/usp-section"
import { LiquidationSection } from "@/components/liquidation-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <USPSection />
      <LiquidationSection />
      <Footer />
    </main>
  )
}
