'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-display font-bold mb-4">AnglePro</div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Revolutionary patent-protected angled squeegee technology solving the fundamental problem of curved surface cleaning.
            </p>
            <div className="text-sm text-neutral-500">
              © 2024 AnglePro. All rights reserved. Patent-protected technology.
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Investors</h3>
            <div className="space-y-3">
              <Link href="/pitch-deck" className="block text-neutral-400 hover:text-white transition-colors">
                Pitch Deck
              </Link>
              <Link href="/research" className="block text-neutral-400 hover:text-white transition-colors">
                Market Research
              </Link>
              <Link href="/financials" className="block text-neutral-400 hover:text-white transition-colors">
                Financial Projections
              </Link>
            </div>
          </div>
          
                      <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/team" className="block text-neutral-400 hover:text-white transition-colors">
                  Team
                </Link>
                <Link href="/contact" className="block text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
          <p>This website contains confidential and proprietary information intended solely for qualified investors.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 