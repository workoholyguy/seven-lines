'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  details: {
    location: string;
    equipment: string;
    weight: string;
    timeline: string;
    challenges: string;
  };
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

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
      title: "Wind Turbine Transport",
      description: "Transportation of wind turbine components including blades, towers, and nacelles.",
      icon: "🌪️",
      features: ["Blade transport", "Tower sections", "Nacelle transport", "Site coordination"]
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

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["2128 Division Ave", "Dayton, OH", "United States"]
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["(937) 206-3308", "+1 (937) 367-0843", "24/7 Dispatch Available"]
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["7linesinc@gmail.com", "Dispatch Available", "Quote Requests Welcome"]
    }
  ];

  const serviceOptions = [
    "RGN Superload Transport",
    "Heavy Equipment Hauling",
    "Industrial Machinery",
    "Wind Turbine Transport",
    "Oil & Gas Equipment",
    "Military & Government",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="h-screen relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/gallery15.jpg)' }}></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/80"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Seven Lines
              <span className="block text-red-400 text-4xl md:text-6xl mt-4">Trucking</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12">
              Specialized RGN Superload Transportation Across America
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Based in Dayton, Ohio • Nationwide Coverage • Heavy Haul Specialists
            </p>
                          <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-200" onClick={() => {
                  document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Get Quote
                </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200">
                View Fleet
              </button>
            </div>
          </div>
        </div>
        {/* Truck silhouette overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Services Section - Full Screen */}
      <section className="h-screen bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive transportation solutions for heavy and oversized loads
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Recent Projects
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in heavy haul transportation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {galleryProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Expandable Details */}
                  {expandedProject === project.id && (
                    <div className="border-t border-gray-200 pt-4 mt-4 animate-in slide-in-from-top-2 duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Location:</span>
                              <p className="text-gray-600">{project.details.location}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Equipment:</span>
                              <p className="text-gray-600">{project.details.equipment}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Weight:</span>
                              <p className="text-gray-600">{project.details.weight}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Timeline:</span>
                              <p className="text-gray-600">{project.details.timeline}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Challenges</h4>
                          <p className="text-sm text-gray-600">{project.details.challenges}</p>
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200" onClick={() => {
                        document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
                      }}> 
                        Get Quote for Similar Project
                      </button>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => {
                      setExpandedProject(expandedProject === project.id ? null : project.id);
                    }}
                    className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-200"
                  >
                    {expandedProject === project.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Full Screen */}
      <section className="h-screen bg-gray-900 text-white flex items-center justify-center pt-20" id='get-in-touch'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Ready to move your load? Contact us for a free quote and consultation.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="(937) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tell us about your transportation needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Seven Lines Trucking</h3>
              <p className="text-gray-300 mb-6">
                Leading heavy haul transportation specialists since 2003. We provide reliable, safe, and efficient transportation solutions for oversized and overweight loads across America.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+19372063308" className="bg-yellow-500 text-gray-900 p-3 rounded-lg hover:bg-yellow-400 transition-colors">
                  <span className="text-2xl">📞</span>
                </a>
                <a href="mailto:7linesinc@gmail.com" className="bg-yellow-500 text-gray-900 p-3 rounded-lg hover:bg-yellow-400 transition-colors">
                  <span className="text-2xl">✉️</span>
                </a>
                <a href="https://www.instagram.com/samlines.inc/" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-gray-900 p-3 rounded-lg hover:bg-yellow-400 transition-colors">
                  <span className="text-2xl">📷</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">RGN Superloads</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Heavy Equipment</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Industrial Machinery</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Wind Turbines</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Seven Lines Trucking. All rights reserved. | 2128 Division Ave, Dayton, OH | Nationwide Coverage
            </p>
          </div>
        </div>
      </section>


    </div>
  );
}
