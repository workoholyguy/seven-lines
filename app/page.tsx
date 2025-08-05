'use client';

import { useState, useRef } from 'react';
import ContactForm from './components/ContactForm';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Create refs for each section
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "RGN Superload Transport",
      description: "Specialized transportation for oversized and overweight loads requiring removable gooseneck trailers.",
      icon: "🚛",
      features: ["Up to 200,000 lbs capacity", "Nationwide coverage", "24/7 dispatch", "Permit coordination"]
    },
    {
      title: "Heavy Equipment Hauling",
      description: "Transport of construction equipment, excavators, bulldozers, cranes, and other heavy machinery.",
      icon: "🏗️",
      features: ["Equipment expertise", "Secure loading", "Insurance coverage", "Real-time tracking"]
    },
    {
      title: "Industrial Machinery",
      description: "Specialized handling and transportation of industrial machinery and manufacturing equipment.",
      icon: "⚙️",
      features: ["Precision loading", "Climate control", "Damage protection", "Expert rigging"]
    },
    {
      title: "Airport & Aircraft Transport",
      description: "Specialized transportation services for airport equipment, aircraft components, and aviation infrastructure.",
      icon: "✈️",
      features: ["Aircraft components", "Ground support equipment", "Aviation infrastructure", "Airport coordination"]
    }
  ];

  const galleryProjects = [
    {
      id: 1,
      title: "Airport Equipment Transport",
      category: "Aviation",
      description: "Specialized transportation of airport equipment and aviation machinery",
      image: "/gallery2.jpg",
      details: {
        location: "Cleveland Hopkins International Airport",
        equipment: "Baggage handling systems, Ground support equipment",
        weight: "Up to 50,000 lbs",
        timeline: "3-5 days",
        challenges: "Precision loading, Airport security clearance, Time-sensitive delivery"
      }
    },
    {
      id: 2,
      title: "Construction Equipment",
      category: "Heavy Equipment",
      description: "Heavy construction equipment transport including excavators and bulldozers",
      image: "/gallery6.jpg",
      details: {
        location: "Multiple construction sites across Ohio",
        equipment: "Excavators, Bulldozers, Cranes, Loaders",
        weight: "Up to 80,000 lbs",
        timeline: "1-3 days",
        challenges: "Oversized load permits, Route planning, Site access coordination"
      }
    },
    {
      id: 3,
      title: "Industrial Machinery",
      category: "Industrial",
      description: "Large industrial machinery transport for manufacturing facility",
      image: "/gallery14.jpg",
      details: {
        location: "Manufacturing facility in Michigan",
        equipment: "Production line machinery, Industrial presses",
        weight: "Up to 120,000 lbs",
        timeline: "5-7 days",
        challenges: "Fragile equipment handling, Climate-controlled transport, Factory floor access"
      }
    }
  ];

  return (
    <div className="bg-slate-900/95 bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      <div className="overflow-y-auto scroll-smooth">
        {/* Hero Section - Full Screen */}
        <section 
          ref={heroRef}
          className="h-screen relative bg-gradient-to-r from-gray-900 via-slate-800 to-black text-white overflow-hidden pt-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/gallery15.jpg)' }}></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-slate-900/60 to-black/70"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-slate-300 to-white bg-clip-text text-transparent"
              >
              
                <span className="block text-red-400 text-4xl md:text-6xl mt-4">Reliable Trucking Company</span>
              </motion.h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12"
              >
                Specialized RGN Superload Transportation Across America
              </motion.p>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Based in Dayton, Ohio • Nationwide Coverage • Heavy Haul Specialists
              </motion.p>
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30" 
                  onClick={() => {
                    document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Quote
                </motion.button>
                <Link href="/gallery">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-400/50 text-blue-400 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-400/10 backdrop-blur-sm transition-all duration-300" 
                  >
                    View Fleet
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          {/* Truck silhouette overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </section>

        {/* Services Section - Full Screen */}
        <section 
          ref={servicesRef}
          className="h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-black flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive transportation solutions for heavy and oversized loads
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-slate-600/30 hover:border-blue-500/50"
                >
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section 
          ref={galleryRef}
                      className="bg-gradient-to-b from-slate-800 to-gray-900 py-5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                Recent Projects
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Showcasing our expertise in heavy haul transportation
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {galleryProjects.map((project, index) => (
                <motion.div 
                  key={index} 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-500/25 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 border border-slate-600/30 hover:border-blue-500/50"
                >
                  <div className="h-48 relative overflow-hidden">
                    <NextImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-blue-400 text-xs font-medium rounded-full border border-blue-500/40">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    {/* Expandable Details */}
                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-slate-600/50 pt-4 mt-4 overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold text-white mb-2">Project Details</h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <span className="font-medium text-blue-400">Location:</span>
                                  <p className="text-gray-300">{project.details.location}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-blue-400">Equipment:</span>
                                  <p className="text-gray-300">{project.details.equipment}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-blue-400">Weight:</span>
                                  <p className="text-gray-300">{project.details.weight}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-blue-400">Timeline:</span>
                                  <p className="text-gray-300">{project.details.timeline}</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2">Key Challenges</h4>
                              <p className="text-sm text-gray-300">{project.details.challenges}</p>
                            </div>
                          </div>
                          <Link href="/contact">
                            <motion.button 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30" 
                            > 
                              Get Quote for Similar Project
                            </motion.button>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setExpandedProject(expandedProject === project.id ? null : project.id);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
                    >
                      {expandedProject === project.id ? 'Hide Details' : 'View Details'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section - Full Screen */}
        <ContactForm />

      </div>
    </div>
  );
}
