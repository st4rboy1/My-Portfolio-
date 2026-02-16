import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/sections/navbar'

// Mock framer-motion since it relies on DOM APIs
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

describe('Navbar Component', () => {
  it('renders the navbar with brand name', () => {
    render(<Navbar activeSection="home" />)
    const brandName = screen.getByText('Kyle Masangcay')
    expect(brandName).toBeInTheDocument()
  })

  it('renders navigation menu on desktop', () => {
    render(<Navbar activeSection="home" />)
    // Check if navigation links are rendered
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument()
  })
})
