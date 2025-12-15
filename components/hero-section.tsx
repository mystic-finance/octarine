"use client"

import { useState } from "react"
import { SwapCard } from "@/components/swap-card"
import { OctarineLogo } from "@/components/octarine-logo"
import { RotatingText } from "@/components/rotating-text"
import { WaitlistModal } from "@/components/waitlist-modal"

export function HeroSection() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col bg-gradient-to-r from-[#4AABFF] via-[#6BBFFF] to-[#B8DEFF]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-glow-move-white" />
        </div>

        {/* Transmutation Circle Overlay (Large Watermark) - hidden on mobile */}
        <div className="hidden sm:block absolute -left-20 top-20 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
          <OctarineLogo variant="dark" size="lg" className="w-full h-full [&_svg]:w-full [&_svg]:h-full" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-12 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full py-24 sm:py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              {/* Left: Text Content - aligns with navbar logo */}
              <div className="animate-fade-in min-w-0">
                <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-[1.1] font-bold tracking-tight text-left">
                  Instant
                  <br />
                  liquidity for <br />
                  <span className="relative inline-block h-[1.1em] align-baseline w-full overflow-hidden">
                    <span className="relative z-10 text-foreground absolute left-0 top-0 w-full">
                      <RotatingText
                        words={["Real-World Assets", "US Treasuries", "Tokenized Funds", "Private Credit"]}
                        className="inline-block whitespace-nowrap"
                      />
                    </span>
                  </span>
                </h1>

                <p className="text-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-lg font-normal mt-1">
                  Octarine enables 24/7 instant swaps between stablecoins and tokenized RWAs by aggregating offchain
                  liquidity from partner solvers and market makers.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button
                    className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold tracking-wide shadow-[0_0_20px_rgba(41,115,255,0.4)] bg-gradient-to-r from-primary to-blue-600 text-white cursor-pointer hover:from-blue-400 hover:to-blue-500 transition-all"
                    onClick={() => setIsWaitlistOpen(true)}
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>

              {/* Right: Demo Interface - aligns with navbar Join Waitlist button */}
              <div className="relative animate-fade-in-delay flex justify-end">
                <SwapCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  )
}
