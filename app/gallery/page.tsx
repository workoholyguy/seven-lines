'use client';

import { useState } from 'react';


export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Wind Turbine Transport",
      category: "wind",
      description: "Transportation of wind turbine blades and components to wind farm in Texas",
      image: "/gallery/wind-turbine-1.jpg",
      location: "Texas Wind Farm"
    },
    {
      id: 2,
      title: "Construction Equipment Haul",
      category: "equipment",
      description: "Heavy construction equipment transport including excavators and bulldozers",
      image: "/gallery/construction-1.jpg",
      location: "Colorado Construction Site"
    },
    {
      id: 3,
      title: "Industrial Machinery",
      category: "industrial",
      description: "Large industrial machinery transport for manufacturing facility",
      image: "/gallery/industrial-1.jpg",
      location: "Michigan Factory"
    },
    {
      id: 4,
      title: "Oil Rig Components",
      category: "oil-gas",
      description: "Transportation of oil rig components to drilling site",
      image: "/gallery/oil-rig-1.jpg",
      location: "North Dakota Oil Field"
    },
    {
      id: 5,
      title: "Military Equipment",
      category: "military",
      description: "Secure transport of military vehicles and equipment",
      image: "/gallery/military-1.jpg",
      location: "Military Base"
    },
    {
      id: 6,
      title: "Bridge Components",
      category: "infrastructure",
      description: "Large bridge components transport for infrastructure project",
      image: "/gallery/bridge-1.jpg",
      location: "Ohio Infrastructure Project"
    },
    {
      id: 7,
      title: "Mining Equipment",
      category: "mining",
      description: "Heavy mining equipment transport to remote mining site",
      image: "/gallery/mining-1.jpg",
      location: "Wyoming Mining Site"
    },
    {
      id: 8,
      title: "Power Plant Equipment",
      category: "power",
      description: "Large power plant components transport",
      image: "/gallery/power-plant-1.jpg",
      location: "Power Plant Construction"
    },
    {
      id: 9,
      title: "Aircraft Components",
      category: "aviation",
      description: "Transport of aircraft components and parts",
      image: "/gallery/aircraft-1.jpg",
      location: "Aircraft Manufacturing"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'wind', label: 'Wind Energy' },
    { id: 'equipment', label: 'Construction Equipment' },
    { id: 'industrial', label: 'Industrial Machinery' },
    { id: 'oil-gas', label: 'Oil & Gas' },
    { id: 'military', label: 'Military' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'mining', label: 'Mining' },
    { id: 'power', label: 'Power Plants' },
    { id: 'aviation', label: 'Aviation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Full Screen */}
      <section className="h-screen relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our Gallery
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12">
              Showcasing Our Heavy Haul Transportation Projects
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              From Wind Turbines to Industrial Machinery • Nationwide Coverage • RGN Superloads
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section - Full Screen */}
      <section className="h-screen bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Filter Projects
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-yellow-500 text-gray-900 shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Full Screen */}
      <section className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-yellow-600 opacity-20">
                      {project.id}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{project.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Full Screen */}
      <section className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-gray-300">Loads Transported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-gray-300">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Screen */}
      <section className="h-screen bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Inspired by Our Work?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Let&apos;s discuss your transportation needs and see how we can handle your heavy haul requirements with the same level of expertise and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-200">
              Get Free Quote
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200">
              Contact Dispatch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 