'use client';

import { useState, useRef } from 'react';
import ContactForm from './components/ContactForm';

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



  return (
    <div className="h-screen overflow-hidden bg-white">
      <main className="h-full overflow-y-auto scroll-smooth snap-y snap-mandatory">
                {/* Hero Section - Full Screen */}
        <section 
          ref={heroRef}
          className="h-screen relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden pt-0 snap-start"
        >
          {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/gallery15.jpg)' }}></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/80"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              7 Lines
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
      <section 
        ref={servicesRef}
        className="h-screen bg-white flex items-center justify-center snap-start"
      >
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
      <section 
        ref={galleryRef}
        className="bg-gray-50 py-5 snap-start"
      >
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
      <ContactForm />

        </main>
      </div>
    );
}
