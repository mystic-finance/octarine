"use client"

import { useState } from "react"
import { useEffect, useRef } from "react"
import { Shield3DGlossy } from "@/components/icons"
import { WaitlistModal } from "@/components/waitlist-modal"

export function LiquidationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const shouldBeFullscreen = rect.top <= viewportHeight * 0.3 && rect.bottom >= viewportHeight * 0.5

      setIsFullscreen(shouldBeFullscreen)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section ref={sectionRef} className="relative px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-secondary py-12 px-6 sm:py-16 sm:px-8 lg:py-32 lg:pl-20 lg:pr-32 shadow-lg">
            <div className="absolute inset-0">
              <div className="absolute inset-0 animate-glow-move" />
            </div>

            <div className="absolute right-4 top-4 w-10 h-10 sm:w-12 sm:h-12 md:right-8 md:top-1/2 md:-translate-y-1/2 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 opacity-90">
              <Shield3DGlossy className="w-full h-full" />
            </div>

            <div className="relative z-10 max-w-xl">
              <h2 className="text-balance text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground">
                Liquidation Fallbacks for RWAs
              </h2>
              <p className="mt-3 sm:mt-4 lg:mt-6 text-pretty text-sm sm:text-base lg:text-lg leading-relaxed text-foreground">
                Octarine backstops bad debt and enables RWAs to be onboarded in lending markets even in the absence of
                AMM liquidity. Reach out to us to know more.
              </p>
              <div className="mt-6 sm:mt-8">
                <button
                  className="px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-bold tracking-wide shadow-[0_0_20px_rgba(41,115,255,0.4)] bg-gradient-to-r from-primary to-blue-600 text-white cursor-pointer hover:from-blue-400 hover:to-blue-500 transition-all text-sm sm:text-base"
                  onClick={() => setIsWaitlistOpen(true)}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  )
}
