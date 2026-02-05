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
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Led development of scalable web applications using React and Node.js. Mentored junior developers and established best practices.',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency Co.',
    period: '2020 - 2022',
    description: 'Developed client websites and web applications. Collaborated with designers to implement pixel-perfect designs.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'GraphQL'],
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Labs',
    period: '2018 - 2020',
    description: 'Built responsive user interfaces and integrated APIs. Improved performance and user experience across all platforms.',
    skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Git'],
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
