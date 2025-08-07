'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-display font-bold gradient-text">
            AnglePro
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/pitch-deck" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              Investor Deck
            </Link>
            <Link href="/research" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              Research & Strategy
            </Link>
            <Link href="/pitch-deck" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              View Pitch Deck
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/pitch-deck" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                Investor Deck
              </Link>
              <Link href="/research" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                Research & Strategy
              </Link>
              <Link href="/pitch-deck" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                View Pitch Deck
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 