'use client'

import React from "react"

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const socialLinks = [
    { icon: <Mail className="w-6 h-6" />, label: 'Email', href: 'mailto:masangcaykyle11@gmail.com' },
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', href: 'https://github.com/st4rboy1' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kyle-masangcay-12a9923a7/' },
    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', href: 'https://x.com/kaayl_x' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                {submitted ? 'Message Sent! ✨' : 'Send Message'}
              </motion.button>
            </motion.form>
          </ScrollReveal>

          {/* Social Links & Info */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always open to new opportunities and interesting projects. Whether you have a question or just want to say hi, feel
                  free to reach out!
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">Connect with me</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-lg glass-morphism text-foreground hover:text-primary hover:bg-white/20 transition-all"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-lg glass-morphism">
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a href="mailto:masangcaykyle11@gmail.com" className="text-lg font-semibold text-primary hover:underline">
                  masangcaykyle11@gmail.com
                </a>
              </div>

              <div className="p-6 rounded-lg glass-morphism">
                <p className="text-sm text-muted-foreground mb-2">Location</p>
                <p className="text-lg font-semibold">Metro Manila, Phillipines</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
