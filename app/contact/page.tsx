'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Users, TrendingUp, MessageCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ContactPage = () => {
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Connect with our leadership team for investment opportunities, partnerships, and business inquiries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
              Leadership Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Reach out to our experienced leadership team directly
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Tim Bint Contact */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Tim Bint</h3>
                <div className="text-xl text-primary-600 font-semibold mb-4">CEO & Inventor</div>
                <p className="text-neutral-600 mb-6">
                  Financial expert with 40+ years of executive experience. Contact Tim for investment discussions, strategic partnerships, and business development opportunities.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <Mail className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:tim.bint@anglepro.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                      tim.bint@anglepro.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <Phone className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-semibold">Direct Line</div>
                    <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-700 transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-semibold">Best For</div>
                    <div className="text-neutral-600">Investment, Strategy, Patents</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Paul O'Donnell Contact */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Paul O'Donnell</h3>
                <div className="text-xl text-accent-600 font-semibold mb-4">VP of Sales & Marketing</div>
                <p className="text-neutral-600 mb-6">
                  Dynamic sales leader with extensive cross-industry connections. Contact Paul for sales partnerships, marketing collaborations, and distribution opportunities.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <Mail className="w-6 h-6 text-accent-600" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:paul.odonnell@anglepro.com" className="text-accent-600 hover:text-accent-700 transition-colors">
                      paul.odonnell@anglepro.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <Phone className="w-6 h-6 text-accent-600" />
                  <div>
                    <div className="font-semibold">Direct Line</div>
                    <a href="tel:+15559876543" className="text-accent-600 hover:text-accent-700 transition-colors">
                      (555) 987-6543
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <MessageCircle className="w-6 h-6 text-accent-600" />
                  <div>
                    <div className="font-semibold">Best For</div>
                    <div className="text-neutral-600">Sales, Marketing, Partnerships</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Company Information
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              General company details and additional contact methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
              <div className="text-neutral-600">
                <p>AnglePro Technologies</p>
                <p>Innovation District</p>
                <p>United States</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <Mail className="w-12 h-12 text-accent-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
              <div className="text-neutral-600">
                <a href="mailto:info@anglepro.com" className="text-accent-600 hover:text-accent-700 transition-colors">
                  info@anglepro.com
                </a>
                <p className="mt-2">For general questions and information</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Investor Relations</h3>
              <div className="text-neutral-600">
                <a href="mailto:investors@anglepro.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                  investors@anglepro.com
                </a>
                <p className="mt-2">For investment and partnership opportunities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
                Get In Touch
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Ready to discuss investment opportunities or partnerships? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Investment Opportunities</h3>
                  <p className="text-neutral-600 mb-4">
                    Interested in our $2.5M Series A round? Contact Tim Bint directly to discuss our patent-protected technology and market opportunity.
                  </p>
                  <a href="mailto:tim.bint@anglepro.com" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                    <Mail className="w-4 h-4" />
                    tim.bint@anglepro.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sales & Partnerships</h3>
                  <p className="text-neutral-600 mb-4">
                    Looking for distribution partnerships or bulk sales opportunities? Paul O'Donnell can help you explore collaboration possibilities.
                  </p>
                  <a href="mailto:paul.odonnell@anglepro.com" className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold">
                    <Mail className="w-4 h-4" />
                    paul.odonnell@anglepro.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Response Time</h3>
                  <p className="text-neutral-600">
                    We typically respond to all inquiries within 24-48 hours. For urgent matters, please call our direct lines.
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
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Contact</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="mailto:tim.bint@anglepro.com" 
                      className="bg-primary-600 text-white p-4 rounded-lg text-center hover:bg-primary-700 transition-colors"
                    >
                      <Users className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Contact CEO</div>
                      <div className="text-sm opacity-90">Tim Bint</div>
                    </a>
                    <a 
                      href="mailto:paul.odonnell@anglepro.com" 
                      className="bg-accent-600 text-white p-4 rounded-lg text-center hover:bg-accent-700 transition-colors"
                    >
                      <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Contact VP Sales</div>
                      <div className="text-sm opacity-90">Paul O'Donnell</div>
                    </a>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-neutral-300">
                    <p className="text-neutral-600 mb-4">Or call us directly:</p>
                    <div className="space-y-2">
                      <a href="tel:+15551234567" className="block text-primary-600 font-semibold">
                        Tim: (555) 123-4567
                      </a>
                      <a href="tel:+15559876543" className="block text-accent-600 font-semibold">
                        Paul: (555) 987-6543
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
              Let's Build the Future Together
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              AnglePro represents a unique opportunity to transform the automotive cleaning industry. Contact us today to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/pitch-deck" className="bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-neutral-100 transition-all duration-300">
                View Investor Deck
              </a>
              <a href="/team" className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
                Meet Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage 