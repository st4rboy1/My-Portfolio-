'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm an IT student with hands-on full-stack development experience building production-grade web applications. As a primary contributor to a web-based enrollment system with 1,575+ commits, I've gained expertise in Laravel 12, React 18, and modern DevOps practices.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I specialize in collaborative development workflows, automated testing, and continuous deployment. My experience spans multi-role authorization systems, document management, PDF generation, and building scalable backend solutions with modern frontend frameworks.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm passionate about building robust, maintainable code and creating seamless user experiences. I'm actively seeking OJT opportunities to further develop my technical skills in a professional environment.
              </motion.p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { number: '1,575+', label: 'Commits' },
                { number: '2', label: 'Work Experiences' },
                { number: '8+', label: 'Technologies' },
                { number: '4', label: 'Team Members' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 md:p-8 rounded-lg glass-morphism hover:bg-white/20 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  )
}
