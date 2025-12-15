"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "@/components/waitlist-modal"
import { Menu, X } from "lucide-react"

const OctarineLogoIcon = () => (
  <svg width="28" height="28" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" className="brightness-0">
    <g transform="rotate(0)">
      <path d="M 0 -25 L 15 -55 L 0 -75 L -15 -55 Z" fill="#3b82f6" stroke="none" />
    </g>
    <g transform="rotate(45)">
      <path d="M 0 -25 L 15 -55 L 0 -75 L -15 -55 Z" fill="#3b82f6" stroke="none" />
    </g>
    <g transform="rotate(90)">
      <path d="M 0 -25 L 15 -55 L 0 -75 L -15 -55 Z" fill="#3b82f6" stroke="none" />
    </g>
    <g transform="rotate(135)">
      <path d="M 0 -25 L 15 -55 L 0 -75 L -15 -55 Z" fill="#3b82f6" stroke="none" />
    </g>
    <g transform="rotate(180)">
      <path d="M 0 -25 L 15 -55 L 0 -75 L -15 -55 Z" fill="#3b82f6" stroke="none" />
    </g>
    <g transform="rotate(225)">
      <path d="M 0 -25 L 15 -55 L 0 -75 L -15 -55 Z" fill="#3b82f6" stroke="none" />
    </g>
    <g transform="rotate(270)">
      <path d="M 0 -25 L 15 -55 L 0 -75 L -15 -55 Z" fill="#3b82f6" stroke="none" />
    </g>
    <g transform="rotate(315)">
      <path d="M 0 -25 L 15 -55 L 0 -75 L -15 -55 Z" fill="#3b82f6" stroke="none" />
    </g>
  </svg>
)

export function Navbar() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-1">
              <div className="text-black">
                <OctarineLogoIcon />
              </div>
              <span className="text-xl font-bold text-black tracking-tight">Octarine</span>
            </Link>

            <div className="hidden sm:flex items-center gap-8">
              <a href="https://docs.octarine.finance/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-lg text-gray-600 font-medium hover:bg-gray-100 hover:text-gray-900"
                >
                  Docs
                </Button>
              </a>
              <Button
                size="sm"
                className="rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white cursor-pointer shadow-[0_0_20px_rgba(41,115,255,0.4)] hover:from-blue-400 hover:to-blue-500 transition-all"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join Waitlist
              </Button>
            </div>

            <button
              className="sm:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
            <a
              href="https://docs.octarine.finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </a>
            <button
              className="w-full px-4 py-3 rounded-xl font-bold tracking-wide shadow-[0_0_20px_rgba(41,115,255,0.4)] bg-gradient-to-r from-primary to-blue-600 text-white cursor-pointer hover:from-blue-400 hover:to-blue-500 transition-all"
              onClick={() => {
                setIsWaitlistOpen(true)
                setIsMobileMenuOpen(false)
              }}
            >
              Join Waitlist
            </button>
          </div>
        )}
      </nav>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  )
}
