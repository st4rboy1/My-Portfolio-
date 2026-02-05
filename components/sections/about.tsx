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
                I'm a passionate full-stack developer with 5+ years of experience building web applications. My journey started with a
                curiosity about how things work, which led me to dive deep into web development.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I specialize in creating responsive, user-friendly interfaces with a focus on performance and accessibility. I love
                collaborating with teams to bring ideas to life and continuously learning new technologies.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or enjoying
                the outdoors.
              </motion.p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '30+', label: 'Projects Completed' },
                { number: '15+', label: 'Happy Clients' },
                { number: '100%', label: 'Satisfaction Rate' },
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
