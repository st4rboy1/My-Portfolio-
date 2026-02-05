'use client'

import { useEffect, useState } from 'react'

interface TypingEffectProps {
  words: string[]
  delay?: number
  speed?: number
}

export function TypingEffect({ words, delay = 2000, speed = 50 }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const currentWord = words[wordIndex] || ''

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, speed / 2)
      }
    } else {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, speed)
      } else {
        setIsWaiting(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, wordIndex, isDeleting, isWaiting, words, delay, speed])

  return (
    <span className="relative">
      {displayedText}
      <span className="absolute -right-1 animate-pulse">|</span>
    </span>
  )
}
