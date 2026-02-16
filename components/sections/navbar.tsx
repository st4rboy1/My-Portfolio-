'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface NavbarProps {
  activeSection: string
}

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism py-3 md:py-4' : 'py-6 md:py-8'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div
          className="text-xl md:text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Kyle Masangcay
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 glass-morphism-dark mt-2 mx-4 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-3 text-sm font-medium text-left transition-colors border-b border-white/10 last:border-b-0 ${
                activeSection === item.id ? 'text-primary bg-white/5' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
              initial={{ opacity: 0 }}
              animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
