'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Award, Shield, Mail, Phone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TeamPage = () => {
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
              Our Team
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Proven leadership meets unstoppable drive - The perfect combination for market success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
              Leadership Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A unique combination of financial expertise and sales excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Tim Bint - CEO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Tim Bint</h3>
                <div className="text-xl text-primary-600 font-semibold mb-4">CEO & Inventor</div>
                <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  40+ Years Experience
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-neutral-700 leading-relaxed">
                  Tim Bint is a financial genius and proven innovator with over 40 years of executive experience spanning CFO to C-Suite positions. As the inventor of AnglePro's revolutionary angled squeegee technology, Tim combines deep financial expertise with innovative product development.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Key Expertise:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary-600" />
                      <span>Financial Strategy & Scaling</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary-600" />
                      <span>Patent Development & IP Strategy</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-primary-600" />
                      <span>Executive Leadership & Operations</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-primary-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary-600" />
                      <span className="text-sm">tim.bint@anglepro.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-600" />
                      <span className="text-sm">(555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Paul O'Donnell - VP Sales */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Paul O'Donnell</h3>
                <div className="text-xl text-accent-600 font-semibold mb-4">VP of Sales & Marketing</div>
                <div className="inline-block bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Unstoppable Drive
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-neutral-700 leading-relaxed">
                  Paul O'Donnell is a young, highly driven sales prodigy with relentless determination to succeed at all costs. His exceptional marketing skills and extensive cross-industry connections spanning multiple sectors make him the perfect complement to Tim's financial expertise.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Key Expertise:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-accent-600" />
                      <span>Sales Strategy & Execution</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-accent-600" />
                      <span>Cross-Industry Network & Partnerships</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-accent-600" />
                      <span>Digital Marketing & Brand Development</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-accent-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent-600" />
                      <span className="text-sm">paul.odonnell@anglepro.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent-600" />
                      <span className="text-sm">(555) 987-6543</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Team Wins */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Why This Team Wins
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The perfect combination of experience, innovation, and relentless execution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-2">Experience Meets Hunger</h3>
              <p className="text-neutral-600 text-sm">40+ years of financial wisdom guiding young, relentless sales energy</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="font-semibold mb-2">Industry Connections</h3>
              <p className="text-neutral-600 text-sm">Deep network spanning automotive, retail, and consumer markets</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-2">Proven + Driven</h3>
              <p className="text-neutral-600 text-sm">Established business acumen combined with unstoppable determination</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="font-semibold mb-2">Complementary Skills</h3>
              <p className="text-neutral-600 text-sm">Perfect balance of financial strategy and sales execution expertise</p>
            </motion.div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Connect with our leadership team to discuss investment opportunities, partnerships, or business development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-neutral-100 transition-all duration-300">
                Contact Our Team
              </a>
              <a href="/pitch-deck" className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
                View Investment Deck
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TeamPage 