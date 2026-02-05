# Portfolio Extension Guide

Learn how to extend and customize your portfolio with new features and sections.

---

## Adding a New Section

### Step 1: Create the Component

Create `components/sections/blog.tsx`:

```tsx
'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  link: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn the basics of Next.js 14 App Router...',
    date: '2024-01-15',
    category: 'Next.js',
    link: '#'
  },
  // Add more posts...
]

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.article
                className="p-6 rounded-lg glass-morphism hover:bg-white/20 transition-all"
                whileHover={{ y: -5 }}
              >
                <span className="text-xs text-primary font-semibold">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                  <a href={post.link} className="text-xs text-primary hover:text-accent">
                    Read More →
                  </a>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Step 2: Import in Main Page

Edit `app/page.tsx`:

```tsx
import { Blog } from '@/components/sections/blog'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <Hero />
      <TechStack />
      <About />
      <Experience />
      <Projects />
      <Blog />  {/* Add here */}
      <Contact />
      <footer>...</footer>
    </main>
  )
}
```

### Step 3: Update Navigation

Edit `components/sections/navbar.tsx`:

```tsx
const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Blog', id: 'blog' },  // Add this
  { label: 'Contact', id: 'contact' },
]
```

---

## Integrating Contact Form with Backend

### Using a Service Like Formspree

1. Go to https://formspree.io and sign up
2. Create a new form for your domain
3. Update the contact form in `components/sections/contact.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  } catch (error) {
    console.error('Form error:', error)
  }
}
```

### Using a Custom API Route

Create `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  // Validate
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    )
  }

  try {
    // Configure your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      }
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
      replyTo: email,
    })

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

Then update your form to use this endpoint:

```tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

---

## Adding Dark/Light Mode Toggle

### Create a Theme Provider Component

Create `components/theme-toggle.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setIsDark(savedTheme === 'dark')
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', !isDark)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg glass-morphism"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600" />
      )}
    </motion.button>
  )
}
```

Add to navbar:

```tsx
import { ThemeToggle } from '@/components/theme-toggle'

<ThemeToggle />
```

---

## Adding Testimonials Section

Create `components/sections/testimonials.tsx`:

```tsx
'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  author: string
  role: string
  company: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    author: 'Jane Smith',
    role: 'CEO',
    company: 'Tech Startup',
    text: 'Exceptional developer who delivered beyond expectations. Highly recommended!',
    rating: 5
  },
  // Add more...
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="p-6 rounded-lg glass-morphism"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Adding a Newsletter Signup

Create `components/newsletter-signup.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Add your newsletter service integration here
      // e.g., Mailchimp, ConvertKit, Substack, etc.
      
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Signup error:', error)
    }
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-muted-foreground mb-6">
          Get notified about new posts and projects
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-foreground"
          />
          <motion.button
            type="submit"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {submitted ? '✓' : 'Sign Up'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
```

---

## Adding Google Analytics

Create `app/layout.tsx` update:

```tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YOUR_ID');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

---

## Adding Animations to Existing Elements

### Staggered Animation

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.div key={item} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Page Transition Animation

```tsx
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
```

---

## Performance Optimization Tips

1. **Image Optimization**:
```tsx
import Image from 'next/image'

<Image
  src="/project.jpg"
  alt="Project"
  width={600}
  height={400}
  loading="lazy"
/>
```

2. **Code Splitting**:
```tsx
import dynamic from 'next/dynamic'

const Blog = dynamic(() => import('@/components/sections/blog'))
```

3. **Memoization**:
```tsx
import { memo } from 'react'

export const ProjectCard = memo(function ProjectCard({ project }) {
  return (/* ... */)
})
```

---

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
EMAIL_USER=your@email.com
EMAIL_PASSWORD=your-app-password
NEWSLETTER_API_KEY=your-newsletter-key
```

Reference in your code:
```tsx
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const emailUser = process.env.EMAIL_USER
```

---

## Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Add social media links
- [ ] Set up contact form backend
- [ ] Add analytics
- [ ] Optimize images
- [ ] Test on mobile
- [ ] Check accessibility
- [ ] Set up SEO metadata
- [ ] Deploy to production

---

## Resources

- Framer Motion docs: https://www.framer.com/motion/
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Component libraries: https://ui.shadcn.com

Happy extending! 🚀
