"use client";
import ContactForm from "../components/ContactForm";
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "RGN Superload Transport",
      description: "Specialized transportation for oversized and overweight loads requiring removable gooseneck trailers. Perfect for construction equipment, industrial machinery, and large components.",
      features: ["Up to 20,000 lbs capacity", "Nationwide coverage", "24/7 dispatch", "Permit coordination"],
      image: "/gallery19.jpeg"
    },
    {
      title: "Heavy Equipment Hauling",
      description: "Transport of construction equipment, excavators, bulldozers, cranes, and other heavy machinery across the United States.",
      features: ["Equipment expertise", "Secure loading", "Insurance coverage", "Real-time tracking"],
      image: "/gallery20.jpeg"
    },
    {
      title: "Industrial Machinery Transport",
      description: "Specialized handling and transportation of industrial machinery, manufacturing equipment, and factory components.",
      features: ["Precision loading", "Climate control", "Damage protection", "Expert rigging"],
      image: "/gallery21.jpeg"
    },
    {
      title: "Airport & Aircraft Transport",
      description: "Specialized transportation services for airport equipment, aircraft components, and aviation infrastructure to airports and maintenance facilities.",
      features: ["Aircraft components", "Ground support equipment", "Aviation infrastructure", "Airport coordination"],
      image: "gallery34.jpg"
    },
    {
      title: "Oil & Gas Equipment",
      description: "Transportation of drilling rigs, pipeline equipment, and oil field machinery to remote locations.",
      features: ["Remote access", "Rough terrain", "Emergency response", "Safety protocols"],
      image: "/gallery23.jpeg"
    },
    {
      title: "Military & Government",
      description: "Secure transportation services for military equipment, government vehicles, and sensitive cargo requiring special handling.",
      features: ["Security clearance", "Escort services", "Documentation", "Compliance"],
      image: "/gallery33.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      {/* Hero Section - With Background Image */}
      <section className="min-h-[70vh] pt-32 pb-16 relative bg-gradient-to-r from-gray-900 via-slate-800 to-black text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery1.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center px-6 sm:px-8 lg:px-12"
        >
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight bg-gradient-to-r from-blue-400 via-slate-300 to-white bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed"
            >
              Specialized Transportation Solutions for Heavy & Oversized Loads
            </motion.p>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              RGN Superloads • Heavy Equipment • Industrial Machinery • Nationwide Coverage
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid - Enhanced Layout */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
              Comprehensive Transportation Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From superloads to specialized equipment, we provide end-to-end transportation services with precision and care.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform overflow-hidden border border-slate-600/30 hover:border-blue-500/50"
              >
                {/* Card Header with Image */}
                <div className="h-56 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  {/* Service Number Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg border border-blue-400/30">
                    {index + 1}
                  </div>
                  {/* Service Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  </div>
                  {/* Service Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm sm:text-base text-gray-300">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - With Background Image */}
      <section className="py-20 sm:py-24 lg:py-32 relative bg-gradient-to-r from-gray-900 via-slate-800 to-black text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery25.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
            Ready to Move Your Load?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed">
            Get a free quote for your transportation needs. Our team of experts is ready to handle your heavy haul requirements with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform shadow-lg shadow-blue-500/25 border border-blue-400/30"
              onClick={() => {
                document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Quote
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-400/50 text-blue-400 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-blue-400/10 backdrop-blur-sm transition-all duration-200 transform"
              onClick={() => {
                document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Dispatch
            </motion.button>
          </div>
        </motion.div>
      </section>
      <ContactForm />
    </div>
  );
} 