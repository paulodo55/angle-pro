'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Award, TrendingUp, Shield, Zap, Globe, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              AnglePro
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              The Only Squeegee That Reaches Where Others Cannot
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Revolutionary patent-protected angled squeegee technology solving the fundamental problem of curved surface cleaning in automotive, marine, and commercial applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Link href="/pitch-deck" className="group bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all duration-300 flex items-center gap-3">
                View Investor Deck
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/research" className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
                Market Research
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Market Opportunity Section */}
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
              <span className="gradient-text">$47+ Billion</span> Market Opportunity
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Multiple high-growth segments converging to create an ideal environment for patent-protected innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Car Detailing Services",
                value: "$78.9B → $169.89B",
                growth: "7.97% CAGR",
                color: "text-primary-600"
              },
              {
                icon: Zap,
                title: "Mobile Car Washing",
                value: "$9.3B → $21.7B",
                growth: "8.8% CAGR",
                color: "text-accent-500"
              },
              {
                icon: Globe,
                title: "Window Cleaning Services",
                value: "$41.4B → $58.06B",
                growth: "5.9% CAGR",
                color: "text-primary-500"
              },
              {
                icon: DollarSign,
                title: "Car Cleaning Products",
                value: "$3.2B → $4.5B",
                growth: "5.76% CAGR",
                color: "text-accent-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <item.icon className={`w-12 h-12 ${item.color} mb-6`} />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-2xl font-bold text-neutral-900 mb-2">{item.value}</p>
                <p className={`text-sm font-medium ${item.color}`}>{item.growth}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Unassailable Competitive Advantages
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Patent-protected innovation with first-mover advantage in a massive, underserved market
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Patent Protection",
                description: "17-year exclusive position on angled design for automotive use with additional patents pending for product improvements.",
                highlight: "17-Year Exclusivity"
              },
              {
                icon: Award,
                title: "First-Mover Advantage",
                description: "No existing competitors with automotive-specific angled squeegees. Market education opportunity similar to Scrub Daddy's approach.",
                highlight: "Zero Competition"
              },
              {
                icon: Users,
                title: "Proven Market Demand",
                description: "91.7% of US households own vehicles. Growing professional market with 15,000+ mobile detailing services nationwide.",
                highlight: "286M Vehicles"
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {advantage.highlight}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Investment Opportunity
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Join us in transforming a patent-protected innovation into the next breakout consumer product success story
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-3xl font-bold mb-2">$2.5M</div>
                <div className="text-lg opacity-80">Funding Ask</div>
              </div>
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-3xl font-bold mb-2">20%</div>
                <div className="text-lg opacity-80">Equity Offered</div>
              </div>
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-3xl font-bold mb-2">10-15x</div>
                <div className="text-lg opacity-80">Projected Returns</div>
              </div>
            </div>
            
            <Link href="/pitch-deck" className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-neutral-100 transition-all duration-300 group">
              View Complete Pitch Deck
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage 