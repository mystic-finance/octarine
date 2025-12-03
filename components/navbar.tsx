"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <div className="text-black">
              <OctarineLogoIcon />
            </div>
            <span className="text-xl font-bold text-black tracking-tight">Octarine</span>
          </Link>

          <div className="flex items-center gap-8">
            <Button
              size="sm"
              className="rounded-lg bg-blue-500 text-white cursor-not-allowed opacity-50 hover:opacity-50"
            >
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
