"use client"

import { Card } from "@/components/ui/card"
import { TargetPriceIcon, ShieldWithCheck, Zap, Wallet } from "./icons"

const features = [
  {
    icon: TargetPriceIcon,
    title: "The Best Prices in the Market",
    description: "We aggregate bids from the best market makers and solvers to give you the best possible swaps.",
  },
  {
    icon: ShieldWithCheck,
    title: "Compliance-first",
    description:
      "Only eligible parties can fill and request swaps on Octarine. We run whitelist checks on all participants.",
  },
  {
    icon: Zap,
    title: "Lightning-fast Execution",
    description: "We settle swaps in seconds, not minutes. A DeFi experience with offchain liquidity.",
  },
  {
    icon: Wallet,
    title: "No Money Wasted",
    description:
      "If the swap doesn't go through, you pay nothing. You know all fees ahead of time, no slippage surprises.",
  },
]

export function USPSection() {
  return (
    <section className="relative px-6 lg:px-12 py-32 lg:py-48">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-full">
        <svg
          className="h-full w-full"
          viewBox="0 0 1400 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 Q 350 60, 700 100 T 1400 100"
            stroke="hsl(220 90% 56%)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0 100 Q 350 60, 700 100 T 1400 100;
                      M0 100 Q 350 140, 700 100 T 1400 100;
                      M0 100 Q 350 60, 700 100 T 1400 100"
            />
          </path>
          <path
            d="M0 140 Q 350 100, 700 140 T 1400 140"
            stroke="hsl(220 90% 56%)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0 140 Q 350 100, 700 140 T 1400 140;
                      M0 140 Q 350 180, 700 140 T 1400 140;
                      M0 140 Q 350 100, 700 140 T 1400 140"
            />
          </path>
          <path
            d="M0 180 Q 350 140, 700 180 T 1400 180"
            stroke="hsl(220 90% 56%)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="M0 180 Q 350 140, 700 180 T 1400 180;
                      M0 180 Q 350 220, 700 180 T 1400 180;
                      M0 180 Q 350 140, 700 180 T 1400 180"
            />
          </path>
        </svg>
      </div>

      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-full">
        <svg
          className="h-full w-full"
          viewBox="0 0 1400 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1400 200 Q 1050 160, 700 200 T 0 200"
            stroke="hsl(220 90% 56%)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              values="M1400 200 Q 1050 160, 700 200 T 0 200;
                      M1400 200 Q 1050 240, 700 200 T 0 200;
                      M1400 200 Q 1050 160, 700 200 T 0 200"
            />
          </path>
          <path
            d="M1400 160 Q 1050 120, 700 160 T 0 160"
            stroke="hsl(220 90% 56%)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              dur="11s"
              repeatCount="indefinite"
              values="M1400 160 Q 1050 120, 700 160 T 0 160;
                      M1400 160 Q 1050 200, 700 160 T 0 160;
                      M1400 160 Q 1050 120, 700 160 T 0 160"
            />
          </path>
          <path
            d="M1400 120 Q 1050 80, 700 120 T 0 120"
            stroke="hsl(220 90% 56%)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              dur="13s"
              repeatCount="indefinite"
              values="M1400 120 Q 1050 80, 700 120 T 0 120;
                      M1400 120 Q 1050 160, 700 120 T 0 120;
                      M1400 120 Q 1050 80, 700 120 T 0 120"
            />
          </path>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl pt-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left side - Sticky header */}
          <div className="lg:w-5/12 lg:shrink-0">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Redeem Instantly</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                The only platform purpose-built for institutional RWA trading with compliance, speed, and security.
              </p>
            </div>
          </div>

          {/* Right side - Scrollable features */}
          <div className="lg:w-7/12 lg:flex-1">
            <div className="space-y-6 lg:min-h-[200vh]">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-pretty text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
