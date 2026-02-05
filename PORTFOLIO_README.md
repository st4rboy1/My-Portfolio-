# Modern Portfolio Website

A beautiful, modern portfolio website built with Next.js 14 (App Router), React, Tailwind CSS, and Framer Motion animations.

## Project Structure

```
/vercel/share/v0-project
├── app/
│   ├── layout.tsx              # Root layout with font configuration
│   ├── page.tsx                # Main portfolio page with section orchestration
│   └── globals.css             # Global styles and theme configuration
│
├── components/
│   ├── sections/
│   │   ├── navbar.tsx          # Fixed glass-morphism navigation bar
│   │   ├── hero.tsx            # Hero section with typing effect
│   │   ├── about.tsx           # About section with stats
│   │   ├── experience.tsx       # Experience/work history section
│   │   ├── projects.tsx        # Bento grid projects showcase
│   │   └── contact.tsx         # Contact form and social links
│   │
│   ├── animations/
│   │   ├── typing-effect.tsx   # Typing text animation component
│   │   └── scroll-reveal.tsx   # Scroll-triggered reveal animations
│   │
│   ├── tech-stack.tsx          # Tech stack grid with hover effects
│   │
│   └── ui/                     # shadcn/ui components (pre-installed)
│
├── lib/
│   └── utils.ts                # Utility functions (cn for class merging)
│
├── hooks/
│   └── use-mobile.tsx          # Mobile detection hook
│
├── public/                     # Static assets
│
├── package.json                # Dependencies (updated with framer-motion)
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## Key Features

### 1. **Smooth Scrolling Navigation**
- Floating glass-morphism navbar that reveals on scroll
- Active section highlighting
- Responsive mobile menu with smooth animations

### 2. **Hero Section**
- Bold, animated introduction
- Typing effect with multiple words
- Call-to-action buttons with hover effects
- Animated background blobs

### 3. **Tech Stack Display**
- Interactive grid showcasing 8+ technologies
- Hover animations and scale effects
- Icons from lucide-react

### 4. **About Section**
- Personal bio with multiple paragraphs
- Statistics cards (Years, Projects, Clients, Satisfaction)
- Staggered animation on scroll

### 5. **Experience Timeline**
- Card-based layout for each position
- Skill tags with hover effects
- Company and period information
- Professional descriptions

### 6. **Projects (Bento Grid)**
- Responsive grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
- Mixed card sizes for visual interest
- Image overlays with hover effects
- GitHub and Live links
- Project tags/technologies

### 7. **Contact Section**
- Functional contact form with validation
- Social media links
- Email and location information
- Success feedback message

### 8. **Animations**
- Framer Motion for smooth transitions
- Scroll-triggered reveal animations
- Hover and tap effects
- Blob background animations
- Staggered animations for lists

## Color System

The portfolio uses a modern dark-mode aesthetic with:
- **Primary Color**: Cyan/Blue gradient (`hsl(211, 98%, 64%)`)
- **Background**: Near-black (`hsl(0, 0%, 3.9%)`)
- **Cards**: Slightly lighter dark (`hsl(0, 0%, 8%)`)
- **Text**: White/light gray (`hsl(0, 0%, 98%)`)
- **Accents**: Glass-morphism with semi-transparent white overlays

## Typography

- **Sans Serif**: Geist (primary font for all text)
- **Monospace**: Geist Mono (for code/technical elements)

## Getting Started

### 1. Clone and Install
```bash
cd /vercel/share/v0-project
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## Customization Guide

### Update Personal Information
Edit `/app/page.tsx` and individual section components:
- Hero: Update name, subtitle, and description
- About: Change bio text and statistics
- Experience: Add your work history
- Projects: Replace with your projects
- Contact: Update email and social links

### Modify Colors
Update the CSS variables in `/app/globals.css`:
```css
:root {
  --primary: 211 98% 64%;        /* Main brand color */
  --background: 0 0% 3.9%;        /* Background */
  --card: 0 0% 8%;                /* Card background */
  --muted-foreground: 0 0% 70%;   /* Secondary text */
}
```

### Change Fonts
Update font imports in `/app/layout.tsx`:
```tsx
import { YourFont, YourMono } from 'next/font/google'
```

### Add More Sections
1. Create new component in `/components/sections/`
2. Import and add to `/app/page.tsx`
3. Add corresponding scroll listener for active state

## Dependencies

- **next**: ^16.0.7 - React framework
- **react**: ^19 - UI library
- **framer-motion**: ^11.0.3 - Animation library
- **tailwindcss**: ^3.4.17 - Utility CSS framework
- **lucide-react**: ^0.544.0 - Icon library
- **typescript**: 5.7.3 - Type safety

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Intersection Observer for scroll reveal animations
- Lazy loading images
- CSS animations instead of JavaScript where possible
- Optimized Framer Motion animations
- Responsive images and grid layouts
- Mobile-first design approach

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance
- Alt text for images

## Deployment

Deploy to Vercel with one click:
```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## License

Feel free to use this portfolio template for your own website. Customize it to match your personal brand!

## Need Help?

- Check the component files for inline comments
- Review Framer Motion docs: [https://www.framer.com/motion](https://www.framer.com/motion)
- Check Tailwind CSS docs: [https://tailwindcss.com](https://tailwindcss.com)
- Review Next.js docs: [https://nextjs.org](https://nextjs.org)
