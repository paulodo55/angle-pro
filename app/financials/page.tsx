'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, PieChart, BarChart3, Target, Calculator } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FinancialsPage = () => {
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
              Financial Projections
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Strategic investment opportunity in patent-protected automotive cleaning technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              <span className="gradient-text">$2.5M</span> Series A Investment
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Strategic funding for market leadership in the $47+ billion automotive cleaning opportunity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-2xl text-center"
            >
              <DollarSign className="w-16 h-16 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">$2.5M</div>
              <div className="text-lg opacity-90">Funding Ask</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-500 to-accent-600 text-white p-8 rounded-2xl text-center"
            >
              <PieChart className="w-16 h-16 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">20%</div>
              <div className="text-lg opacity-90">Equity Offered</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-accent-500 text-white p-8 rounded-2xl text-center"
            >
              <TrendingUp className="w-16 h-16 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">10-15x</div>
              <div className="text-lg opacity-90">Projected Returns</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revenue Projections */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
              Revenue Projections
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              All projections TBD - Early planning phase with market validation pending
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">3-Year Revenue Outlook</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg">Year 1:</span>
                    <span className="text-lg font-bold text-primary-600">Revenue targets TBD</span>
                  </div>
                  <p className="text-sm text-neutral-600">Unit sales projections TBD based on market testing and customer validation</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg">Year 2:</span>
                    <span className="text-lg font-bold text-accent-600">Growth projections TBD</span>
                  </div>
                  <p className="text-sm text-neutral-600">Scaling strategy dependent on Year 1 performance and market penetration</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg">Year 3:</span>
                    <span className="text-lg font-bold text-primary-600">Long-term targets TBD</span>
                  </div>
                  <p className="text-sm text-neutral-600">Market penetration goals subject to competitive analysis and expansion strategy</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Unit Economics (TBD)</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Manufacturing Cost:</span>
                  <span className="font-semibold">TBD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Gross Margin:</span>
                  <span className="font-semibold">TBD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Customer Acquisition Cost:</span>
                  <span className="font-semibold">TBD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Lifetime Value:</span>
                  <span className="font-semibold">TBD</span>
                </div>
                <div className="pt-4 border-t border-neutral-300">
                  <p className="text-sm text-neutral-600 italic">
                    All metrics pending supplier negotiations, pricing strategy validation, and customer behavior analysis
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
              Use of Funds
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Strategic allocation of $2.5M Series A investment for maximum market impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Fund Allocation</h3>
              
              <div className="space-y-4">
                {[
                  { category: "Manufacturing Setup", amount: "$800K", percentage: "32%", color: "primary" },
                  { category: "Marketing & Sales", amount: "$600K", percentage: "24%", color: "accent" },
                  { category: "Working Capital", amount: "$500K", percentage: "20%", color: "primary" },
                  { category: "Team Expansion", amount: "$400K", percentage: "16%", color: "accent" },
                  { category: "Contingency", amount: "$200K", percentage: "8%", color: "neutral" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 bg-${item.color}-500 rounded`}></div>
                      <span className="font-semibold">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{item.amount}</div>
                      <div className="text-sm text-neutral-500">{item.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-2xl">
                <BarChart3 className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-4">Manufacturing Priority</h3>
                <p className="opacity-90">
                  Largest allocation ensures rapid production capability and quality control systems for market entry
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white p-8 rounded-2xl">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-4">Market Penetration</h3>
                <p className="opacity-90">
                  Significant marketing investment to establish brand presence and capture market share quickly
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Market Opportunity Validation
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Strong market indicators support investment thesis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calculator,
                title: "$47+ Billion",
                subtitle: "Total Addressable Market",
                description: "Combined automotive, marine, and commercial cleaning markets"
              },
              {
                icon: TrendingUp,
                title: "7.97% CAGR",
                subtitle: "Market Growth Rate",
                description: "Car detailing services growing rapidly through 2034"
              },
              {
                icon: Target,
                title: "286 Million",
                subtitle: "US Registered Vehicles",
                description: "Massive customer base requiring regular cleaning"
              },
              {
                icon: DollarSign,
                title: "17 Years",
                subtitle: "Patent Protection",
                description: "Exclusive market position with competitive moat"
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">{metric.title}</div>
                <div className="text-lg font-semibold mb-4">{metric.subtitle}</div>
                <p className="text-neutral-600 text-sm">{metric.description}</p>
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
              Ready to Invest?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Join us in capturing this massive market opportunity with patent-protected technology and experienced leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-neutral-100 transition-all duration-300">
                Contact for Investment
              </a>
              <a href="/pitch-deck" className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
                View Complete Pitch Deck
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FinancialsPage 