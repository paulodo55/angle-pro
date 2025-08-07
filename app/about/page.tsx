'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Target, TrendingUp, Users, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage = () => {
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
              About AnglePro
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Revolutionizing automotive cleaning with patent-protected angled squeegee technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  AnglePro was born from a simple observation: traditional flat squeegees couldn't effectively clean the curved surfaces of modern vehicles, particularly the challenging areas under rear spoilers on SUVs and sports cars.
                </p>
                <p>
                  What started as a solution to a specific automotive detailing problem has evolved into a revolutionary patent-protected technology with applications across multiple industries including marine, commercial, and residential cleaning.
                </p>
                <p>
                  Our innovative 15-degree angled design represents the first major advancement in squeegee technology in decades, addressing a $47+ billion market opportunity with zero direct competition.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">17</div>
                  <div className="text-sm text-neutral-600">Years Patent Protection</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">$47B+</div>
                  <div className="text-sm text-neutral-600">Market Opportunity</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">286M</div>
                  <div className="text-sm text-neutral-600">US Registered Vehicles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">15°</div>
                  <div className="text-sm text-neutral-600">Precision Angle</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
              <p className="text-neutral-600 text-center leading-relaxed">
                To revolutionize vehicle cleaning by providing the first and only squeegee specifically designed for the curved and angled surfaces of modern vehicles, delivering professional results for both consumers and professionals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Our Vision</h3>
              <p className="text-neutral-600 text-center leading-relaxed">
                To become the leading brand in specialized automotive cleaning tools by solving fundamental problems that traditional tools cannot address, expanding into marine, commercial, and residential markets worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
              Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The principles that drive our innovation and guide our business decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Innovation Excellence",
                description: "We continuously push the boundaries of traditional cleaning tools through patent-protected technology and engineering excellence."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Every AnglePro product meets the highest standards for durability, performance, and professional-grade quality."
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "We listen to our customers' needs and develop solutions that make their cleaning tasks more efficient and effective."
              },
              {
                icon: Zap,
                title: "Market Leadership",
                description: "We strive to lead the market through first-mover advantages and sustained competitive differentiation."
              },
              {
                icon: Target,
                title: "Problem Solving",
                description: "We identify real-world problems and create practical, innovative solutions that deliver measurable value."
              },
              {
                icon: TrendingUp,
                title: "Sustainable Growth",
                description: "We build long-term value through strategic planning, smart partnerships, and responsible business practices."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
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
              Join Our Journey
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Be part of the revolution in automotive cleaning technology. Together, we're building the future of specialized cleaning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/team" className="bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-neutral-100 transition-all duration-300">
                Meet Our Team
              </a>
              <a href="/contact" className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage 