'use client'

import React from "react"

import { motion } from 'framer-motion'
import { Code2, Database, Layout, Zap } from 'lucide-react'

interface TechItem {
  name: string
  icon: React.ReactNode
}

const techStack: TechItem[] = [
  { name: 'React', icon: <Code2 className="w-8 h-8" /> },
  { name: 'Next.js', icon: <Zap className="w-8 h-8" /> },
  { name: 'TypeScript', icon: <Code2 className="w-8 h-8" /> },
  { name: 'Tailwind CSS', icon: <Layout className="w-8 h-8" /> },
  { name: 'Node.js', icon: <Zap className="w-8 h-8" /> },
  { name: 'PostgreSQL', icon: <Database className="w-8 h-8" /> },
  { name: 'Framer Motion', icon: <Motion className="w-8 h-8" /> },
  { name: 'Git', icon: <Code2 className="w-8 h-8" /> },
]

function Motion({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function TechStack() {
  return (
    <div className="py-12 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg glass-morphism hover:bg-white/15 transition-colors"
          >
            <div className="text-primary">{tech.icon}</div>
            <p className="text-xs md:text-sm font-medium text-center text-muted-foreground hover:text-foreground transition-colors">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
