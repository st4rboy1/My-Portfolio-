'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'
import { Code, Database, Box, GitBranch, Server, Palette, Zap, Terminal } from 'lucide-react'

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

  const techStackWithIcons = [
    {
      category: 'Languages',
      skills: [
        { name: 'PHP', icon: Code },
        { name: 'JavaScript', icon: Code },
        { name: 'TypeScript', icon: Code },
        { name: 'HTML', icon: Code },
        { name: 'CSS', icon: Palette },
        { name: 'SQL', icon: Database },
        { name: 'Java', icon: Code },
        { name: 'C#', icon: Code },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Laravel 12', icon: Server },
        { name: 'Inertia.js', icon: Zap },
        { name: 'MySQL', icon: Database },
        { name: 'Redis', icon: Database },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React 18', icon: Zap },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'shadcn/ui', icon: Palette },
        { name: 'Radix UI', icon: Palette },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: Box },
        { name: 'GitHub Actions', icon: GitBranch },
        { name: 'Laravel Forge', icon: Server },
        { name: 'Git', icon: GitBranch },
        { name: 'VS Code', icon: Terminal },
      ],
    },
  ]

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

        {/* Tech Stack Section */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 md:mt-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Technical Stack</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {techStackWithIcons.map((stack, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg glass-morphism hover:bg-white/15 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-primary mb-6">{stack.category}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {stack.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon
                      return (
                        <motion.div
                          key={skillIndex}
                          className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <IconComponent className="w-5 h-5 text-primary" />
                          <span className="text-xs text-center text-foreground font-medium">{skill.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
