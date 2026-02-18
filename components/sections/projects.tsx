'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'

interface Project {
  title: string
  description: string
  fullDescription?: string
  features?: string[]
  tags: string[]
  image: string
  github: string
  live: string
  size?: 'small' | 'large'
}

const projects: Project[] = [
  {
    title: 'Web-Based Enrollment System',
    description: 'Production-grade enrollment system for Christian Bible Heritage Learning Center. Features include multi-role authorization (Super Admin, Admin, Registrar, Guardian, Student), billing and invoicing, document management with verification workflows, email notification system, and PDF report generation for student records.',
    fullDescription: 'A comprehensive, production-grade enrollment system built for Christian Bible Heritage Learning Center. This system handles the entire student enrollment lifecycle with sophisticated role-based access control, financial management, document verification, and automated communications.',
    features: [
      'Multi-role authorization system supporting 5 distinct roles',
      'Guardian and student management interface',
      'Automated billing and invoice generation',
      'Document upload and verification workflows',
      'Email notification system with 16+ notification types',
      'PDF report generation for student records',
      'Responsive design for mobile and desktop',
      'Docker containerization for deployment'
    ],
    tags: ['Laravel 12', 'React 18', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
    size: 'large',
  },
  {
    title: 'Billing & Invoice Module',
    description: 'Guardian-focused billing system with automated invoice generation, payment tracking, and notification system. Built with Laravel 12 backend and React 18 frontend.',
    fullDescription: 'A sophisticated billing module designed specifically for guardians to manage tuition and fees. The system automates invoice generation, tracks payment status, and sends timely notifications to guardians about pending payments and payment confirmations.',
    features: [
      'Automated invoice generation based on enrollment',
      'Payment status tracking and history',
      'Email notifications for invoices and payment reminders',
      'Guardian portal for viewing and paying invoices',
      'PDF invoice download functionality',
      'Payment method management',
      'Comprehensive financial reporting'
    ],
    tags: ['Laravel 12', 'React 18', 'DomPDF', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Document Management System',
    description: 'Comprehensive document handling with upload, verification, and rejection workflows. Integrated into the enrollment system for student records and supporting documents.',
    fullDescription: 'An integrated document management system that handles student record documentation with a complete verification workflow. Documents can be uploaded by guardians, reviewed by administrators, and either approved or rejected with feedback.',
    features: [
      'Document upload interface for guardians',
      'Document categorization and organization',
      'Verification workflow with admin approval',
      'Document rejection with feedback mechanism',
      'Document tracking and history',
      'Support for multiple file formats',
      'Secure file storage and retrieval'
    ],
    tags: ['React 18', 'Laravel 12', 'File Management'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Multi-Role Authorization System',
    description: 'Built using Spatie Laravel Permission package supporting 5 distinct user roles. Implements granular access control for Super Admin, Admin, Registrar, Guardian, and Student roles across the enrollment platform.',
    fullDescription: 'A comprehensive authorization system built with the industry-standard Spatie Laravel Permission package. Provides granular access control with 5 distinct user roles, each with specific permissions tailored to their responsibilities.',
    features: [
      'Super Admin - Full system control and configuration',
      'Admin - System management and reporting',
      'Registrar - Student enrollment and records management',
      'Guardian - Student and financial information access',
      'Student - Personal records and account management',
      'Granular permission assignment',
      'Role-based access control throughout the system',
      'Activity logging and audit trails'
    ],
    tags: ['Laravel 12', 'Spatie Permission', 'Authorization'],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4198c868f?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
    size: 'large',
  },
  {
    title: 'Email Notification System',
    description: 'Automated notification system with 16 notification types for enrollment status updates. Provides real-time alerts to guardians and students about admission progress and important events.',
    fullDescription: 'An automated email notification system that keeps stakeholders informed about important events and status updates. With 16+ different notification types, the system ensures timely communication for enrollment progress, document status, payments, and system announcements.',
    features: [
      'Enrollment status notifications',
      'Document verification notifications',
      'Payment reminders and confirmations',
      'Admission decision notifications',
      'System announcement distribution',
      'Customizable email templates',
      'Scheduled notification sending',
      'Notification history and logging'
    ],
    tags: ['Laravel 12', 'Email', 'Notifications'],
    image: 'https://images.unsplash.com/photo-1517694712568-f9a1db5e5b5c?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'PDF Report Generation',
    description: 'Dynamic PDF generation for student records and enrollment reports using DomPDF. Supports multiple report formats for administrative and guardian access.',
    fullDescription: 'A comprehensive PDF report generation system that creates dynamic documents for student records, enrollment reports, and financial statements. Using DomPDF, the system generates professional, formatted reports that can be downloaded or emailed.',
    features: [
      'Student record reports',
      'Enrollment summary reports',
      'Financial statements and billing reports',
      'Grade and transcript reports',
      'Attendance reports',
      'Custom report generation',
      'Multiple export formats',
      'Scheduled report generation and distribution'
    ],
    tags: ['DomPDF', 'Laravel 12', 'PDF'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-lg overflow-hidden glass-morphism hover:bg-white/20 transition-all duration-300 cursor-pointer ${
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
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">Click for details</span>
                  </div>
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
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
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

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">{selectedProject.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden h-80">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={selectedProject.github}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
