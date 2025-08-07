'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, Users, TrendingUp, DollarSign, Target, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PitchDeckPage = () => {
  const sections = [
    {
      id: 'problem',
      title: 'THE PROBLEM',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">Traditional Flat Squeegees Cannot Reach Everywhere</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Pain Point</h4>
                  <p className="text-neutral-600">Millions of car owners and cleaning professionals struggle with unreachable curved and angled surfaces</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Flawed Solutions</h4>
                  <p className="text-neutral-600">Traditional flat squeegees miss curved areas under spoilers, around mirrors, and tight corners</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Urgent Need</h4>
                  <p className="text-neutral-600">$41.4B Window Cleaning Market demands innovation with 286 million registered vehicles in US alone</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-600 mb-4">286M</div>
              <div className="text-xl font-semibold mb-2">Registered Vehicles</div>
              <div className="text-neutral-600">All requiring regular cleaning with inadequate tools</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'THE ULTIMATE SOLUTION',
      content: (
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-8 gradient-text">AnglePro Precision Squeegee</h3>
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto">
            The only squeegee specifically engineered for curved and hard-to-reach surfaces with patented 15-degree precision angle
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Angled Edge Technology</h4>
              <p className="text-neutral-600">15-degree precision angle reaches under spoilers and around curves</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Dual-Function Design</h4>
              <p className="text-neutral-600">Works on flat surfaces AND curved areas seamlessly</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Professional Quality</h4>
              <p className="text-neutral-600">Durable materials suitable for both consumer and professional use</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market',
      title: 'MARKET OPPORTUNITY',
      content: (
        <div>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">
              <span className="gradient-text">$47+ Billion</span> Total Addressable Market
            </h3>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Multiple high-growth segments with proven demand indicators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-2xl">
              <TrendingUp className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Car Detailing Services</h4>
              <div className="text-3xl font-bold mb-2">$78.9B → $169.89B</div>
              <div className="text-primary-100">7.97% CAGR through 2034</div>
            </div>
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white p-8 rounded-2xl">
              <Zap className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Mobile Car Washing</h4>
              <div className="text-3xl font-bold mb-2">$9.3B → $21.7B</div>
              <div className="text-accent-100">8.8% CAGR through 2033</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-6 text-center">Market Validation</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">91.7%</div>
                <div className="text-neutral-600">US households own vehicles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">$3.2B</div>
                <div className="text-neutral-600">Car cleaning products market</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">15,000+</div>
                <div className="text-neutral-600">Mobile detailing services</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'business-model',
      title: 'BUSINESS MODEL',
      content: (
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Diversified Revenue Streams</h3>
            <p className="text-xl text-neutral-600">Multiple monetization opportunities across consumer and professional markets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold">Revenue Streams</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Product Sales</div>
                    <div className="text-neutral-600 text-sm">Core squeegee units (pricing TBD - estimated $29.99-$39.99)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Replacement Parts</div>
                    <div className="text-neutral-600 text-sm">Blade refills and accessories (pricing TBD - estimated $9.99-$14.99)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Professional Kits</div>
                    <div className="text-neutral-600 text-sm">Bulk packages for detailing businesses (B2B pricing TBD - estimated $199-$299)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Licensing</div>
                    <div className="text-neutral-600 text-sm">Patent licensing to major manufacturers (licensing terms TBD)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold mb-6">Go-To-Market Strategy</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Phase 1: Direct-to-Consumer</span>
                  <span className="text-primary-600 font-semibold">Months 1-6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Phase 2: Retail Partnerships</span>
                  <span className="text-accent-600 font-semibold">Months 7-18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Phase 3: Market Leadership</span>
                  <span className="text-primary-600 font-semibold">Months 19-36</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      title: 'THE WINNING TEAM',
      content: (
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Proven Leadership Meets Unstoppable Drive</h3>
            <p className="text-xl text-neutral-600">A unique combination of experience and hunger</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-center mb-4">CEO/Inventor</h4>
              <p className="text-neutral-700 text-center mb-6">
                Financial genius with 40+ years of executive experience (CFO to C-Suite), patent holder and proven innovator who understands both product development and financial scaling
              </p>
              <div className="text-center">
                <span className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  40+ Years Experience
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-center mb-4">VP Sales & Marketing</h4>
              <p className="text-neutral-700 text-center mb-6">
                Young, highly driven sales prodigy with relentless determination to succeed, exceptional marketing skills, and extensive cross-industry connections spanning multiple sectors
              </p>
              <div className="text-center">
                <span className="inline-block bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Unstoppable Drive
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-neutral-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-center mb-6">Why This Team Wins</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h5 className="font-semibold mb-2">Experience Meets Hunger</h5>
                <p className="text-neutral-600 text-sm">40+ years of financial wisdom guiding young, relentless sales energy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-600" />
                </div>
                <h5 className="font-semibold mb-2">Industry Connections</h5>
                <p className="text-neutral-600 text-sm">Deep network spanning automotive, retail, and consumer markets</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'competition',
      title: 'OUR COMPETITION',
      content: (
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Unique Patent-Protected Position</h3>
            <p className="text-xl text-neutral-600">No direct competition with sustainable competitive barriers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-lg mb-4">Traditional Squeegee Manufacturers</h4>
              <div className="space-y-2 text-sm">
                <div><strong>Ettore:</strong> Professional window cleaning tools, flat designs only</div>
                <div><strong>Unger:</strong> Commercial cleaning equipment, no automotive focus</div>
                <div><strong>Steccone:</strong> Consumer squeegees, limited innovation</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-4">Our Advantage</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Patent Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">First-Mover Advantage</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm">Superior Performance</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-lg mb-4">Market Share Strategy</h4>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">5%</div>
                <div className="text-sm text-neutral-600 mb-4">Target market share in Year 3</div>
                <div className="text-2xl font-bold text-primary-600">$38M</div>
                <div className="text-sm text-neutral-600">Revenue potential</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'financials',
      title: 'FINANCIAL ASK',
      content: (
        <div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">
              <span className="gradient-text">$2.5M</span> Series A Investment
            </h3>
            <p className="text-xl text-neutral-600">Strategic investment for market leadership position</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-2xl font-bold mb-6">Revenue Projections</h4>
              <div className="space-y-4">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Year 1:</span>
                    <span className="text-lg font-bold">Revenue targets TBD</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-1">Unit sales projections TBD based on market testing</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Year 2:</span>
                    <span className="text-lg font-bold">Growth projections TBD</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-1">Scaling strategy dependent on Year 1 performance</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Year 3:</span>
                    <span className="text-lg font-bold">Long-term targets TBD</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-1">Market penetration goals subject to competitive analysis</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-6">Use of Funds</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-primary-500 rounded"></div>
                    <span>Manufacturing Setup</span>
                  </div>
                  <span className="font-semibold">$800K (32%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-accent-500 rounded"></div>
                    <span>Marketing & Sales</span>
                  </div>
                  <span className="font-semibold">$600K (24%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-primary-400 rounded"></div>
                    <span>Team Expansion</span>
                  </div>
                  <span className="font-semibold">$400K (16%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-accent-400 rounded"></div>
                    <span>Working Capital</span>
                  </div>
                  <span className="font-semibold">$500K (20%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-neutral-400 rounded"></div>
                    <span>Contingency</span>
                  </div>
                  <span className="font-semibold">$200K (8%)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white p-8 rounded-2xl text-center">
            <h4 className="text-2xl font-bold mb-4">Investment Highlights</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">20%</div>
                <div>Equity Offered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">10-15x</div>
                <div>Projected Returns</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">17</div>
                <div>Year Patent Protection</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 gradient-bg">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Investor Pitch Deck
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Revolutionary Angled Squeegee Technology - Complete Investment Opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pitch Deck Sections */}
      <div className="container-custom py-16">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="mb-24 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
                {section.title}
              </h2>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              {section.content}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Call to Action */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              AnglePro represents a unique opportunity to transform a patent-protected innovation into a market-leading automotive cleaning solution with massive growth potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/research" className="bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-neutral-100 transition-all duration-300 inline-flex items-center gap-3">
                View Market Research
                <ArrowRight className="w-6 h-6" />
              </a>
              <a href="mailto:invest@anglepro.com" className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
                Contact for Investment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PitchDeckPage 