'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  live: string
  size?: 'small' | 'large'
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4198c868f?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
    size: 'large',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    tags: ['React', 'Firebase', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard for business metrics and KPIs.',
    tags: ['Next.js', 'Chart.js', 'APIs'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media App',
    description: 'Full-featured social platform with user profiles, messaging, and notifications.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
    size: 'large',
  },
  {
    title: 'Portfolio Generator',
    description: 'AI-powered tool to generate beautiful portfolio websites from data.',
    tags: ['Next.js', 'OpenAI', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1517694712568-f9a1db5e5b5c?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application with location-based forecasts and alerts.',
    tags: ['React', 'REST API', 'MapBox'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className={`group relative rounded-lg overflow-hidden glass-morphism hover:bg-white/20 transition-all duration-300 ${
                  project.size === 'large' ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                }`}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 rounded-full text-xs bg-white/10 text-primary font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
