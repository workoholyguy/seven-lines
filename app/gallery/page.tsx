'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Airport Equipment Transport",
      category: "aviation",
      description: "Transportation of airport equipment and aircraft components to maintenance facilities",
      image: "/gallery34.jpg",
      location: "Cleveland Hopkins International Airport",
      weight: "85,000 lbs",
      distance: "450 miles"
    },
    {
      id: 2,
      title: "Construction Equipment Haul",
      category: "equipment",
      description: "Heavy construction equipment transport including excavators and bulldozers",
      image: "/gallery6.jpg",
      location: "Colorado Construction Site",
      weight: "120,000 lbs",
      distance: "320 miles"
    },
    {
      id: 3,
      title: "Industrial Machinery",
      category: "industrial",
      description: "Large industrial machinery transport for manufacturing facility",
      image: "/gallery29.jpeg",
      location: "Michigan Factory",
      weight: "95,000 lbs",
      distance: "280 miles"
    },
    {
      id: 4,
      title: "Oil Rig Components",
      category: "oil-gas",
      description: "Transportation of oil rig components to drilling site",
      image: "/gallery24.jpeg",
      location: "North Dakota Oil Field",
      weight: "45,000 lbs",
      distance: "600 miles"
    },
    {
      id: 5,
      title: "Oil Rig Components",
      category: "oil-gas",
      description: "Transport of pipeline construction equipment and materials",
      image: "/gallery35.jpg",
      location: "South Dakota Oil Field",
      weight: "115,000 lbs",
      distance: "750 miles"
    },
    {
      id: 6,
      title: "Bridge Components",
      category: "infrastructure",
      description: "Large bridge components transport for infrastructure project",
      image: "/gallery32.jpg",
      location: "Ohio Infrastructure Project",
      weight: "80,000 lbs",
      distance: "520 miles"
    },
    {
      id: 7,
      title: "Mining Equipment",
      category: "mining",
      description: "Heavy mining equipment transport to remote mining site",
      image: "/gallery7.jpg",
      location: "Wyoming Mining Site",
      weight: "40,000 lbs",
      distance: "750 miles"
    },
    {
      id: 9,
      title: "Aircraft Components",
      category: "aviation",
      description: "Transport of aircraft components and parts",
      image: "/gallery26.jpeg",
      location: "Aircraft Manufacturing",
      weight: "75,000 lbs",
      distance: "290 miles"
    },
    {
      id: 10,
      title: "Heavy Machinery Transport",
      category: "equipment",
      description: "Specialized transport of heavy machinery and industrial equipment",
      image: "/gallery21.jpeg",
      location: "Texas Industrial Complex",
      weight: "34,000 lbs",
      distance: "380 miles"
    },
    {
      id: 11,
      title: "Manufacturing Equipment",
      category: "industrial",
      description: "Transport of precision manufacturing equipment and machinery",
      image: "/gallery25.jpeg",
      location: "California Manufacturing Plant",
      weight: "39,000 lbs",
      distance: "320 miles"
    },
    {
      id: 12,
      title: "Pipeline Equipment",
      category: "oil-gas",
      description: "Transport of pipeline construction equipment and materials",
      image: "/gallery18.jpeg",
      location: "Alaska Pipeline Project",
      weight: "30,000 lbs",
      distance: "680 miles"
    },
    {
      id: 14,
      title: "Highway Infrastructure",
      category: "infrastructure",
      description: "Transport of highway construction equipment and materials",
      image: "/gallery14.jpg",
      location: "Interstate Highway Project",
      weight: "37,000 lbs",
      distance: "480 miles"
    },
    {
      id: 15,
      title: "Excavation Equipment",
      category: "mining",
      description: "Transport of large excavation and mining equipment",
      image: "/gallery15.jpg",
      location: "Mining Operation Site",
      weight: "39,000 lbs",
      distance: "720 miles"
    },
    {
      id: 18,
      title: "Crane Equipment",
      category: "equipment",
      description: "Transport of heavy crane equipment and lifting machinery",
      image: "/gallery18.jpeg",
      location: "Construction Site",
      weight: "55,000 lbs",
      distance: "440 miles"
    },
    {
      id: 19,
      title: "Factory Equipment",
      category: "industrial",
      description: "Transport of factory equipment and production machinery",
      image: "/gallery19.jpeg",
      location: "Manufacturing Facility",
      weight: "30,000 lbs",
      distance: "290 miles"
    },
    {
      id: 21,
      title: "Armored Vehicle Transport",
      category: "military",
      description: "Secure transport of armored vehicles and military equipment",
      image: "/gallery33.jpg",
      location: "Military Installation",
      weight: "35,000 lbs",
      distance: "460 miles"
    },
    {
      id: 22,
      title: "Bridge Construction",
      category: "infrastructure",
      description: "Transport of bridge construction materials and equipment",
      image: "/gallery22.jpeg",
      location: "Bridge Construction Project",
      weight: "47,000 lbs",
      distance: "510 miles"
    },
    {
      id: 23,
      title: "Heavy Equipment Transport",
category: "logistics",
description: "A semi-truck hauling large industrial construction machinery on a lowboy trailer, likely for demolition or heavy earth-moving work.",     
image: "/gallery36.jpg",
location: "Seattle, WA (near The Home Depot and Port area)",
weight: "82,000 lbs (estimated with equipment)",
distance: "430 miles (regional haul estimate)",
    },
    {
      id: 26,
      title: "Heavy Equipment",
      category: "equipment",
      description: "Transport of various heavy construction equipment",
      image: "/gallery26.jpeg",
      location: "Construction Project",
      weight: "56,000 lbs",
      distance: "470 miles"
    },
    {
      id: 27,
      title: "Industrial Components",
      category: "industrial",
      description: "Transport of industrial components and manufacturing equipment",
      image: "/gallery27.jpeg",
      location: "Industrial Complex",
      weight: "35,000 lbs",
      distance: "330 miles"
    },
    {
      id: 30,
      title: "Infrastructure Project",
      category: "infrastructure",
      description: "Transport of infrastructure construction equipment",
      image: "/gallery30.jpeg",
      location: "Infrastructure Project",
      weight: "45,000 lbs",
      distance: "540 miles"
    },
    {
      id: 34,
      title: "Construction Machinery",
      category: "equipment",
      description: "Transport of construction machinery and equipment",
      image: "/gallery10.jpg",
      location: "Construction Site",
      weight: "45,000 lbs",
      distance: "420 miles"
    },
    {
      id: 35,
      title: "Crane Boom Transport",
      category: "equipment",
      description: "Superload transport of telescopic crane boom assembly",
      image: "/gallery37.jpeg",
      location: "Dallas, TX → Lowville, NY",
      weight: "77,000 lbs",
      distance: "1,600 miles"
    },
    {
      id: 36,
      title: "Port Crane Boom Section",
      category: "equipment",
      description: "Specialized transport of a long crane boom section from port",
      image: "/gallery38.jpeg",
      location: "Long Beach, CA → Savannah, GA",
      weight: "55,000 lbs",
      distance: "2,400 miles"
    },
    {
      id: 37,
      title: "Drilling Rig Transport",
      category: "energy & construction",
      description: "Blue drilling rig on a multi-axle lowboy trailer. The rig is being relocated for use in energy and infrastructure projects.",
      image: "/gallery39.jpeg",
      location: "Alpine, MI to Houston, TX",
      weight: "95,000 lbs",
      distance: "1,250 miles"
    },
    {
      id: 38,
      title: "Oversized Crate Transport",
category: "specialized freight",
description: "Oversized crated load secured with tarps and straps on a lowboy trailer. The load is flagged and marked for over-dimensional transport, requiring specialized routing.",
image: "/gallery40.jpeg",
location: "Long Beach, CA to Michigan",
weight: "87,000 lbs",
distance: "2,250 miles",
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: '🚛' },
    { id: 'aviation', label: 'Aviation', icon: '✈️' },
    { id: 'equipment', label: 'Construction', icon: '🏗️' },
    { id: 'industrial', label: 'Industrial', icon: '🏭' },
    { id: 'oil-gas', label: 'Oil & Gas', icon: '⛽' },
    { id: 'military', label: 'Military', icon: '🎖️' },
    { id: 'infrastructure', label: 'Infrastructure', icon: '🌉' },
    { id: 'mining', label: 'Mining', icon: '⛏️' },
    { id: 'power', label: 'Power Plants', icon: '⚡' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-400 text-lg font-medium">Loading Gallery...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center">
          <Image 
            src="/gallery1.jpg"
            alt="Gallery Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-slate-900/60 to-black/70"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-slate-300 to-white bg-clip-text text-transparent"
          >
            Our Fleet & Projects
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 mb-8 font-light"
          >
            Showcasing Our Fleet & Excellence in Heavy Haul Transportation
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-gray-300"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Nationwide Coverage
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              RGN Superloads
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
              ️24/7 Support
            </span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-b from-slate-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Filter through our diverse portfolio of heavy haul transportation projects
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-2xl shadow-blue-500/25 border border-blue-400/30'
                    : 'bg-slate-700/30 text-gray-300 hover:bg-slate-600/40 backdrop-blur-sm border border-slate-600/50'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-600/30 hover:border-blue-500/50 transition-all duration-500"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-gray-800/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-800/20"></div>
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 border-2 border-blue-500/30 rounded-full"></div>
                      <div className="absolute bottom-8 left-8 w-12 h-12 border border-red-500/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-slate-400/10 rounded-full"></div>
                    </div>

                    {/* Project Number */}
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl flex items-center justify-center text-white font-bold text-base border border-blue-400/30">
                        {project.id}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-blue-400 text-xs font-medium rounded-full border border-blue-500/40">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleViewDetails(project)}
                          className="w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white py-2 px-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30 text-sm"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-slate-700/30 rounded-xl border border-slate-600/50">
                        <div className="text-blue-400 font-bold text-base">{project.weight}</div>
                        <div className="text-gray-400 text-xs">Weight</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-xl border border-slate-600/50">
                        <div className="text-red-400 font-bold text-base">{project.distance}</div>
                        <div className="text-gray-400 text-xs">Distance</div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-slate-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "1000+", label: "Loads Transported", icon: "🚛" },
              { number: "99%", label: "On-Time Delivery", icon: "⏰" },
              { number: "20+", label: "Years Experience", icon: "🏆" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-400/30">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-b from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Let&apos;s discuss your transportation needs and see how we can handle your heavy haul requirements with the same level of expertise and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="border-2 border-red-500 text-red-400 px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Contact Dispatch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-slate-800 rounded-2xl overflow-hidden border border-slate-600/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                title="Close modal"
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200 border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="relative lg:w-2/3 h-64 lg:h-auto">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Project Number */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl flex items-center justify-center text-white font-bold text-lg border border-blue-400/30">
                      {selectedProject.id}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-blue-400 text-sm font-medium rounded-full border border-blue-500/40">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:w-1/3 p-6 bg-slate-800 flex flex-col">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                      <div className="text-blue-400 font-bold text-lg">{selectedProject.weight}</div>
                      <div className="text-gray-400 text-sm">Weight</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                      <div className="text-red-400 font-bold text-lg">{selectedProject.distance}</div>
                      <div className="text-gray-400 text-sm">Distance</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 text-gray-400 mb-6">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{selectedProject.location}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        closeModal();
                        scrollToContact();
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
                    >
                      Get Quote for This Project
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        closeModal();
                        scrollToContact();
                      }}
                      className="w-full border-2 border-red-500 text-red-400 py-3 px-6 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      Contact Dispatch
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-b from-slate-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your heavy haul transportation project? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-6">
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select project type</option>
                  <option value="aviation">Aviation Equipment</option>
                  <option value="equipment">Construction Equipment</option>
                  <option value="industrial">Industrial Machinery</option>
                  <option value="oil-gas">Oil & Gas Equipment</option>
                  <option value="military">Military Equipment</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="mining">Mining Equipment</option>
                  <option value="power">Power Plant Equipment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Describe your project requirements, equipment details, origin/destination, timeline, and any special considerations..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
                >
                  Submit Quote Request
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-slate-600/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-blue-400 font-bold text-lg mb-2">📞 Call Us</div>
                    <div className="text-gray-300">(555) 123-4567</div>
                    <div className="text-gray-400 text-sm">24/7 Dispatch</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-lg mb-2">📧 Email Us</div>
                    <div className="text-gray-300">info@sevenlines.com</div>
                    <div className="text-gray-400 text-sm">Quick Response</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-lg mb-2">📍 Location</div>
                    <div className="text-gray-300">Nationwide Coverage</div>
                    <div className="text-gray-400 text-sm">All 50 States</div>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 