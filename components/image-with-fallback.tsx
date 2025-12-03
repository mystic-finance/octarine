"use client"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
}

export function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-xs ${className}`}
      >
        {alt.charAt(0)}
      </div>
    )
  }

  return <img src={src || "/placeholder.svg"} alt={alt} className={className} onError={() => setError(true)} />
}
