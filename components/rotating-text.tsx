"use client"

import { useEffect, useState } from "react"

interface RotatingTextProps {
  words: string[]
  className?: string
}

export function RotatingText({ words, className = "" }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setTimeout(() => setIsAnimating(false), 50)
      }, 400) // Wait for fade-out to complete
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  useEffect(() => {
    setDisplayText(words[currentIndex])
  }, [currentIndex, words])

  return (
    <span
      className={`${className} inline-block whitespace-nowrap transition-all duration-[400ms] ease-in-out bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent ${
        isAnimating ? "opacity-0 translate-y-2 blur-sm" : "opacity-100 translate-y-0 blur-0"
      }`}
    >
      {displayText.includes("\n") ? (
        <>
          {displayText.split("\n")[0]}
          <br />
          {displayText.split("\n")[1]}
        </>
      ) : (
        displayText
      )}
    </span>
  )
}
