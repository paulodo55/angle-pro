'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, DollarSign, Target, Award, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ResearchPage = () => {
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
              Market Research & Strategy
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Comprehensive Analysis of the $47+ Billion Automotive Cleaning Market
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Market Overview
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              The automotive cleaning tools market represents a massive opportunity with multiple high-growth segments converging to create an ideal environment for innovative products.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Car Detailing Services",
                current: "$78.9B",
                projected: "$169.89B",
                cagr: "7.97%",
                timeframe: "2024-2034",
                color: "primary"
              },
              {
                icon: Globe,
                title: "Mobile Car Washing",
                current: "$9.3B",
                projected: "$21.7B",
                cagr: "8.8%",
                timeframe: "2024-2033",
                color: "accent"
              },
              {
                icon: DollarSign,
                title: "Window Cleaning Services",
                current: "$41.4B",
                projected: "$58.06B",
                cagr: "5.9%",
                timeframe: "2024-2032",
                color: "primary"
              },
              {
                icon: Users,
                title: "Car Cleaning Products",
                current: "$3.2B",
                projected: "$4.5B",
                cagr: "5.76%",
                timeframe: "2024-2030",
                color: "accent"
              }
            ].map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl card-hover"
              >
                <segment.icon className={`w-12 h-12 text-${segment.color}-600 mb-6`} />
                <h3 className="text-xl font-semibold mb-4">{segment.title}</h3>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">{segment.current} → {segment.projected}</div>
                  <div className={`text-${segment.color}-600 font-medium`}>{segment.cagr} CAGR</div>
                  <div className="text-sm text-neutral-500">{segment.timeframe}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Validation */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Market Validation
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Strong demand indicators across multiple customer segments
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">286M</div>
              <div className="text-xl font-semibold mb-2">Registered Vehicles</div>
              <div className="text-neutral-600">91.7% of US households own vehicles requiring regular cleaning</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl font-bold text-accent-600 mb-4">15,000+</div>
              <div className="text-xl font-semibold mb-2">Mobile Detailing Services</div>
              <div className="text-neutral-600">Professional market growing rapidly with specialized tool needs</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">$926M</div>
              <div className="text-xl font-semibold mb-2">Scrub Daddy Success</div>
              <div className="text-neutral-600">Proven model for innovative cleaning product success</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Market Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Consumer Behavior</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 73% of car owners wash their vehicles monthly</li>
                  <li>• Premium tool adoption growing at 12% annually</li>
                  <li>• DIY detailing market expanding rapidly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Professional Market</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Mobile detailing services growing 8.8% CAGR</li>
                  <li>• Professional tools command 40-60% margins</li>
                  <li>• Quality tools reduce labor time by 25%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Competitive Landscape
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              No direct competitors with automotive-specific angled squeegee technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Traditional Manufacturers</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-primary-600">Ettore</div>
                  <div className="text-sm text-neutral-600">Professional window cleaning, flat designs only, $50-150M revenue</div>
                </div>
                <div>
                  <div className="font-semibold text-primary-600">Unger</div>
                  <div className="text-sm text-neutral-600">Commercial cleaning equipment, no automotive focus, $200M+ revenue</div>
                </div>
                <div>
                  <div className="font-semibold text-primary-600">Steccone</div>
                  <div className="text-sm text-neutral-600">Consumer squeegees, limited innovation, $10-25M revenue</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">AnglePro Advantages</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" />
                  <span>Patent-protected angled design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5" />
                  <span>Automotive-specific engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5" />
                  <span>First-mover advantage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>Dual consumer/professional market</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Market Opportunity</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-600 mb-2">5%</div>
                <div className="text-sm text-neutral-600 mb-4">Target market share by Year 3</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">$38M</div>
                <div className="text-sm text-neutral-600">Annual revenue potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategy */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Go-To-Market Strategy
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Phased approach to market penetration and scale
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                phase: "Phase 1",
                title: "Direct-to-Consumer Launch",
                timeframe: "Months 1-6",
                description: "Build brand awareness and validate product-market fit through direct sales",
                tactics: [
                  "E-commerce platform launch",
                  "Social media marketing campaigns",
                  "Influencer partnerships",
                  "Trade show participation"
                ],
                goals: [
                  "Establish brand presence",
                  "Generate initial revenue",
                  "Collect customer feedback",
                  "Build email list of 10,000+"
                ]
              },
              {
                phase: "Phase 2",
                title: "Retail Partnership Expansion",
                timeframe: "Months 7-18",
                description: "Scale through strategic retail partnerships and professional channels",
                tactics: [
                  "Auto parts store partnerships",
                  "Professional detailing distributor agreements",
                  "Amazon marketplace optimization",
                  "B2B sales team development"
                ],
                goals: [
                  "Achieve national retail distribution",
                  "Capture professional market share",
                  "Scale manufacturing operations",
                  "Build recurring revenue streams"
                ]
              },
              {
                phase: "Phase 3",
                title: "Market Leadership",
                timeframe: "Months 19-36",
                description: "Establish category leadership and explore expansion opportunities",
                tactics: [
                  "International market expansion",
                  "Product line extensions",
                  "Strategic partnerships",
                  "Licensing opportunities"
                ],
                goals: [
                  "Achieve market leadership position",
                  "Expand into adjacent markets",
                  "Build sustainable competitive moats",
                  "Prepare for potential exit strategies"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-primary-600 font-semibold">{phase.phase}</div>
                        <div className="text-xl font-bold">{phase.title}</div>
                        <div className="text-sm text-neutral-500">{phase.timeframe}</div>
                      </div>
                    </div>
                    <p className="text-neutral-600">{phase.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Tactics</h4>
                    <ul className="space-y-2">
                      {phase.tactics.map((tactic, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {tactic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Success Metrics</h4>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Capitalize on This Opportunity?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Comprehensive market research validates the massive opportunity for AnglePro to capture significant market share in multiple high-growth segments.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/pitch-deck" className="bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-neutral-100 transition-all duration-300 inline-flex items-center gap-3">
                View Investment Deck
                <ArrowRight className="w-6 h-6" />
              </a>
              <a href="mailto:invest@anglepro.com" className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
                Schedule Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ResearchPage 