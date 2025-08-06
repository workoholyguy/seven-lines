"use client";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <section className="relative bottom-0 left-0 right-0 z-40 bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white py-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Company Info */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent italic">7 Lines Inc</h3>
            <p className="text-gray-300 mb-3 text-sm">
              Leading heavy haul transportation specialists since 2003.
            </p>
            <div className="flex space-x-3">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+19372063308" 
                className="bg-gradient-to-r from-blue-600 to-slate-700 text-white p-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
              >
                <span className="text-lg">📞</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:7linesinc@gmail.com" 
                className="bg-gradient-to-r from-blue-600 to-slate-700 text-white p-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
              >
                <span className="text-lg">✉️</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/samlines.inc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-blue-600 to-slate-700 text-white p-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
              >
                <span className="text-lg">📷</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs">Services</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs">About Us</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold mb-2 text-white">Services</h4>
            <ul className="space-y-1">
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs">RGN Superloads</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs">Heavy Equipment</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs">Industrial Machinery</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs">Airport & Aircraft</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-600/50 mt-4 pt-2 text-center"
        >
          <p className="text-gray-400 text-xs">
            © 2024 Seven Lines Inc. All rights reserved. | 2128 Division Ave, Dayton, OH | Nationwide Coverage
          </p>
        </motion.div>
      </div>
    </section>
  );
} 