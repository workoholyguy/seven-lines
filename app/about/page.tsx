"use client";
import ContactForm from "../components/ContactForm";
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

export default function About() {
  const isMobile = useIsMobile();
  const values = [
    {
      title: "Safety First",
      description: "We never compromise on safety. Every load is secured and transported with the highest safety standards.",
      icon: "🛡️"
    },
    {
      title: "Reliability",
      description: "Your cargo is our priority. We deliver on time, every time, with precision and care.",
      icon: "⏰"
    },
    {
      title: "Expertise",
      description: "We stay current with the latest transportation regulations and equipment technology.",
      icon: "🚛"
    },
    {
      title: "Integrity",
      description: "Honest pricing, transparent communication, and reliable service you can trust.",
      icon: "🤝"
    }
  ];

  const stats = [
    { number: "1000+", label: "Loads Transported" },
    { number: "20+", label: "Years Experience" },
    { number: "99%", label: "On-Time Delivery" },
    { number: "24/7", label: "Dispatch Available" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      {/* Hero Section - With Background Image */}
      <section className="h-screen relative bg-gradient-to-r from-gray-900 via-slate-800 to-black text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery2.jpg')",
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
              About Seven Lines
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed"
            >
              Leading Heavy Haul Transportation Since 2003
            </motion.p>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Based in Dayton, Ohio • Nationwide Coverage • RGN Superload Specialists
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="min-content bg-gradient-to-br from-slate-800 via-gray-900 to-black py-6">
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ x: isMobile ? 0 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
                  Founded in 2003, Seven Lines Trucking began with a simple mission: to provide exceptional heavy haul transportation services across America. What started as a small family operation has grown into one of the nation&apos;s most trusted trucking companies.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
                  Our commitment to safety, reliability, and outstanding customer service has earned us the trust of hundreds of satisfied clients. We believe that every load deserves the highest level of care and attention.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Today, we continue to push the boundaries of what&apos;s possible in heavy haul transportation, always staying true to our core values of safety, integrity, and customer satisfaction.
                </p>
              </motion.div>
              <motion.div 
                initial={{ x: isMobile ? 0 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-2xl shadow-blue-500/25 border border-slate-600/30"
              >
                <div className="text-center">
                  <div className="text-6xl sm:text-8xl mb-4">🚛</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">20+ Years of Excellence</h3>
                  <p className="text-gray-300 text-lg">
                    Serving America with pride and dedication
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="min-content bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white py-6">
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="transform transition-transform duration-300 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-600/30 hover:border-blue-500/50 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex flex-col justify-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent leading-tight break-words">{stat.number}</div>
                  <div className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl leading-tight break-words">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-black">
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16 sm:mb-20 lg:mb-24"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                These core values guide everything we do and ensure we deliver the best possible experience for our clients.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform border border-slate-600/30 hover:border-blue-500/50"
                >
                  <div className="text-6xl sm:text-7xl mb-4">{value.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - With Background Image */}
      <section className="h-screen relative bg-gradient-to-r from-gray-900 via-slate-800 to-black text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery26.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
              Ready to Work With Us?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed">
              Let&apos;s discuss your transportation needs and see how we can help move your cargo safely and efficiently across America.
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
                Get Quote
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
          </div>
        </motion.div>
      </section>
      <ContactForm />
    </div>
  );
} 