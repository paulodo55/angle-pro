import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'AnglePro - Revolutionary Angled Squeegee Technology',
  description: 'The only squeegee that reaches where others cannot. Patent-protected innovation for automotive, marine, and commercial cleaning applications.',
  keywords: 'squeegee, automotive cleaning, patent, innovation, AnglePro, car detailing, window cleaning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 