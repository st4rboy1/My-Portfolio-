'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Developer - Capstone Project',
    company: 'Christian Bible Heritage Learning Center',
    period: 'Feb 2025 - Nov 2025',
    description: 'Led development of core modules including billing, invoicing, and payment tracking for a web-based enrollment system. Built multi-role authorization system for 5 user types, implemented document management workflows, and created email notification system with 16 notification types. Contributed to CI/CD pipeline setup and wrote comprehensive tests using Pest PHP and Laravel Dusk.',
    skills: ['Laravel 12', 'React 18', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Junior Front-End Developer',
    company: 'Smart Hyperion',
    period: 'Jan 2021 - Dec 2022',
    description: 'Assisted in end-to-end design, development, and deployment of web applications. Leveraged modern containerization and component-based architecture to deliver robust and scalable solutions with a focus on responsive design and user experience.',
    skills: ['React', 'HTML', 'CSS', 'JavaScript'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="p-6 md:p-8 rounded-lg glass-morphism hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm md:text-base text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-xs md:text-sm bg-white/10 text-primary font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
