# Components Guide

This document provides an overview of all custom components and their props.

## Section Components

### `<Hero />`
**Location**: `components/sections/hero.tsx`

The landing section with typing effect and CTA buttons.

**Features**:
- Typing effect showing multiple roles
- Animated background blobs
- Call-to-action buttons with scroll navigation
- Animated scroll indicator

**Usage**:
```tsx
import { Hero } from '@/components/sections/hero'

<Hero />
```

**Customization**:
- Update the name: Change "Your Name" in the component
- Modify typing words: Update the `words` array in TypingEffect
- Change button text and actions: Edit button labels and scroll targets

---

### `<Navbar />`
**Location**: `components/sections/navbar.tsx`

**Props**:
```tsx
interface NavbarProps {
  activeSection: string  // Current section ID
}
```

**Features**:
- Fixed glass-morphism design
- Active section highlighting
- Responsive mobile menu
- Smooth scroll to sections

**Usage**:
```tsx
import { Navbar } from '@/components/sections/navbar'

<Navbar activeSection="about" />
```

**Customization**:
- Add/remove nav items: Modify `navItems` array
- Change styles: Update Tailwind classes
- Adjust transparency: Modify glass-morphism classes

---

### `<About />`
**Location**: `components/sections/about.tsx`

Personal biography and achievements section.

**Features**:
- Scroll-triggered reveal animations
- Statistics cards
- Responsive grid layout
- Staggered item animations

**Customization**:
- Update bio text: Edit the `<p>` content
- Modify statistics: Change the stats array data
- Adjust animations: Modify `containerVariants` and `itemVariants`

---

### `<Experience />`
**Location**: `components/sections/experience.tsx`

Work history and professional experience.

**Features**:
- Card-based timeline layout
- Skill tags
- Hover effects with elevation
- Date range display

**Customization**:
- Add/edit experiences: Modify `experiences` array
- Update company names and roles
- Change skill tags
- Adjust card styling

---

### `<Projects />`
**Location**: `components/sections/projects.tsx`

Featured projects showcase with bento grid layout.

**Features**:
- Responsive bento grid (1-2-3 columns)
- Mixed card sizes for visual interest
- Image overlays with hover reveal
- GitHub and Live project links
- Technology tags

**Props**:
```tsx
interface Project {
  title: string          // Project name
  description: string    // Project description
  tags: string[]         // Technology stack
  image: string          // Image URL
  github: string         // GitHub link
  live: string          // Live demo link
  size?: 'small' | 'large'  // Card size
}
```

**Customization**:
- Add projects: Add to `projects` array
- Change images: Update image URLs or use local images
- Update links: Replace GitHub and live demo URLs
- Modify grid layout: Adjust responsive breakpoints

---

### `<Contact />`
**Location**: `components/sections/contact.tsx`

Contact form and social links.

**Features**:
- Functional contact form with validation
- Form submission handling
- Social media links
- Email and location info
- Success feedback message

**Customization**:
- Update email: Change `mailto:` link
- Add social links: Modify `socialLinks` array
- Update location: Change location text
- Customize form handling: Modify `handleSubmit` function
- Add backend integration: Connect to email service

---

## Animation Components

### `<TypingEffect />`
**Location**: `components/animations/typing-effect.tsx`

Animated typing text effect.

**Props**:
```tsx
interface TypingEffectProps {
  words: string[]        // Words to type
  delay?: number         // Delay between words (ms)
  speed?: number         // Typing speed (ms per character)
}
```

**Usage**:
```tsx
import { TypingEffect } from '@/components/animations/typing-effect'

<TypingEffect 
  words={['Developer', 'Designer', 'Creator']}
  delay={2000}
  speed={50}
/>
```

**Customization**:
- Adjust typing speed: Modify `speed` prop
- Change pause duration: Adjust `delay` prop
- Update words: Modify `words` array

---

### `<ScrollReveal />`
**Location**: `components/animations/scroll-reveal.tsx`

Scroll-triggered reveal animation wrapper.

**Props**:
```tsx
interface ScrollRevealProps {
  children: ReactNode     // Content to reveal
  delay?: number         // Animation delay (seconds)
  duration?: number      // Animation duration (seconds)
}
```

**Usage**:
```tsx
import { ScrollReveal } from '@/components/animations/scroll-reveal'

<ScrollReveal delay={0.2}>
  <div>Content revealed on scroll</div>
</ScrollReveal>
```

**Customization**:
- Adjust threshold: Modify `threshold` in IntersectionObserver
- Change animation: Update `initial` and `animate` states
- Modify easing: Update `transition` object

---

## Utility Components

### `<TechStack />`
**Location**: `components/tech-stack.tsx`

Technology stack display with icons.

**Features**:
- Grid layout (2-4-8 columns responsive)
- Hover scale animations
- Lucide React icons
- Staggered animations

**Customization**:
- Add/remove technologies: Modify `techStack` array
- Change icons: Update icon components
- Adjust grid columns: Modify `grid-cols-*` classes
- Update animation delays: Modify `delay` values

**Usage**:
```tsx
import { TechStack } from '@/components/tech-stack'

<TechStack />
```

---

## Styling & Utilities

### Custom CSS Classes

**Glass Morphism**:
```tsx
// Semi-transparent background with blur effect
<div className="glass-morphism">
  Content
</div>
```

**Gradient Text**:
```tsx
// Cyan to blue to purple gradient
<span className="gradient-text">
  Gradient Text
</span>
```

**Animated Blob**:
```tsx
// Background blob with animation
<div className="animate-blob" />
```

---

## Animation Utilities

### Framer Motion Patterns

**Hover Scale**:
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Button
</motion.button>
```

**Staggered List**:
```tsx
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

**Scroll Trigger**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

---

## Integration Examples

### Adding a New Section

1. Create `components/sections/new-section.tsx`:
```tsx
'use client'

import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { motion } from 'framer-motion'

export function NewSection() {
  return (
    <section id="new-section" className="py-20 md:py-32 px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold">New Section</h2>
      </ScrollReveal>
    </section>
  )
}
```

2. Import in `app/page.tsx`:
```tsx
import { NewSection } from '@/components/sections/new-section'

export default function Home() {
  return (
    <main>
      ...
      <NewSection />
      ...
    </main>
  )
}
```

### Custom Form Handling

```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Send to your backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    // Show success
  }
}
```

---

## Performance Tips

1. **Use Scroll Reveal Wisely**: Wrap heavy components to avoid unnecessary renders
2. **Optimize Images**: Use Next.js Image component or compress images
3. **Lazy Load Heavy Sections**: Consider code splitting for large sections
4. **Throttle Scroll Events**: Already implemented in main page.tsx
5. **CSS Animations Over JS**: Use CSS where possible (already optimized)

---

## Troubleshooting

**Animations Not Working**:
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check that components are marked with `'use client'`

**Styling Issues**:
- Verify Tailwind CSS is properly configured
- Check that custom CSS classes are in globals.css
- Clear `.next` folder and rebuild

**Scroll Issues**:
- Check that section IDs match in navigation
- Verify smooth scroll is enabled in globals.css
- Test on different browsers

---

For more examples and patterns, refer to the component files directly—each has detailed inline comments!
