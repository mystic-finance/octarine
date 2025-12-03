"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Loader2, Zap } from "./icons"
import { ImageWithFallback } from "./image-with-fallback"

interface Token {
  symbol: string
  name: string
  logo: string
  address: string
}

interface Quote {
  marketMaker: string
  rate: number
  expires: number
}

const TOKENS: Token[] = [
  {
    symbol: "TBILL",
    name: "Treasury Bill",
    logo: "/tbill-logo.png",
    address: "0x...",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    address: "0x...",
  },
]

interface SwapCardProps {
  showSettings?: boolean
}

export function SwapCard({ showSettings }: SwapCardProps) {
  const [fromToken] = useState<Token>(TOKENS[0])
  const [toToken] = useState<Token>(TOKENS[1])
  const [fromAmount, setFromAmount] = useState("1000")
  const [toAmount, setToAmount] = useState("")
  const [isGettingQuote, setIsGettingQuote] = useState(false)
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)

  // Auto-cycling demo - simulate real swap scenario
  useEffect(() => {
    const demoInterval = setInterval(() => {
      // Cycle through different amounts to show it's "live"
      const amounts = ["1000", "500", "2500", "750", "1200"]
      const randomAmount = amounts[Math.floor(Math.random() * amounts.length)]
      setFromAmount(randomAmount)
    }, 12000) // Change amount every 12 seconds

    return () => clearInterval(demoInterval)
  }, [])

  // Simulate getting RFQ quotes
  useEffect(() => {
    if (fromAmount && Number.parseFloat(fromAmount) > 0) {
      setIsGettingQuote(true)

      const timer = setTimeout(() => {
        // Mock RFQ response
        const mockQuote: Quote = {
          marketMaker: ["Market Maker 1", "Market Maker 2", "Market Maker 3", "Market Maker 4"][
            Math.floor(Math.random() * 4)
          ],
          rate: 0.98 + Math.random() * 0.04,
          expires: Date.now() + 30000,
        }

        setCurrentQuote(mockQuote)
        setIsGettingQuote(false)

        const amount = Number.parseFloat(fromAmount) * mockQuote.rate
        setToAmount(amount.toFixed(2))
      }, 800)

      return () => clearTimeout(timer)
    } else {
      setCurrentQuote(null)
      setToAmount("")
    }
  }, [fromAmount, fromToken, toToken])

  return (
    <div className="w-full max-w-[460px]">
      <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-lg">
        {/* From Token */}
        <div className="bg-gray-50 rounded-xl p-3 mb-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-xs">You pay</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-gray-200 pointer-events-none">
              <ImageWithFallback
                src={fromToken.logo || "/placeholder.svg"}
                alt={fromToken.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-black">{fromToken.symbol}</span>
            </div>
            <div className="flex-1 text-black text-3xl text-right">{fromAmount}</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center -my-2 relative z-10">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-1 pointer-events-none">
            <ArrowDown className="w-4 h-4 text-gray-600" />
          </div>
        </div>

        {/* To Token */}
        <div className="bg-gray-50 rounded-xl p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-xs">You receive</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-gray-200 pointer-events-none">
              <ImageWithFallback
                src={toToken.logo || "/placeholder.svg"}
                alt={toToken.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-black">{toToken.symbol}</span>
            </div>
            <div className="flex-1 text-black text-3xl text-right">{isGettingQuote ? "..." : toAmount || "0.0"}</div>
          </div>
        </div>

        {/* Quote Info */}
        {isGettingQuote && (
          <div className="mb-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Loader2 className="w-4 h-4 text-primary animate-spin" />
              <span>Finding the best route...</span>
            </div>
          </div>
        )}

        {currentQuote && !isGettingQuote && (
          <div className="mb-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2 text-black text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span>Best Quote From Market Makers</span>
              </div>
            </div>
            <div className="text-gray-600 text-xs">
              Rate: 1 {fromToken.symbol} = ${currentQuote.rate.toFixed(4)} {toToken.symbol}
            </div>
          </div>
        )}

        {/* Swap Button */}
        <button
          disabled
          className={`w-full py-3 rounded-xl font-semibold pointer-events-none ${
            currentQuote && !isGettingQuote
              ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-[0_0_20px_rgba(41,115,255,0.4)]"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          {!fromAmount ? "Enter amount" : isGettingQuote ? "Getting quotes..." : currentQuote ? "Swap" : "Get quote"}
        </button>
      </div>
    </div>
  )
}
