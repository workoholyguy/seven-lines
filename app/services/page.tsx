import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "RGN Superload Transport",
      description: "Specialized transportation for oversized and overweight loads requiring removable gooseneck trailers. Perfect for construction equipment, industrial machinery, and large components.",
      features: ["Up to 200,000 lbs capacity", "Nationwide coverage", "24/7 dispatch", "Permit coordination"],
      image: "/rgn-transport.jpg"
    },
    {
      title: "Heavy Equipment Hauling",
      description: "Transport of construction equipment, excavators, bulldozers, cranes, and other heavy machinery across the United States.",
      features: ["Equipment expertise", "Secure loading", "Insurance coverage", "Real-time tracking"],
      image: "/heavy-equipment.jpg"
    },
    {
      title: "Industrial Machinery Transport",
      description: "Specialized handling and transportation of industrial machinery, manufacturing equipment, and factory components.",
      features: ["Precision loading", "Climate control", "Damage protection", "Expert rigging"],
      image: "/industrial-machinery.jpg"
    },
    {
      title: "Wind Turbine Transport",
      description: "Transportation of wind turbine components including blades, towers, and nacelles to wind farm locations.",
      features: ["Blade transport", "Tower sections", "Nacelle transport", "Site coordination"],
      image: "/wind-turbine.jpg"
    },
    {
      title: "Oil & Gas Equipment",
      description: "Transportation of drilling rigs, pipeline equipment, and oil field machinery to remote locations.",
      features: ["Remote access", "Rough terrain", "Emergency response", "Safety protocols"],
      image: "/oil-gas-equipment.jpg"
    },
    {
      title: "Military & Government",
      description: "Secure transportation services for military equipment, government vehicles, and sensitive cargo requiring special handling.",
      features: ["Security clearance", "Escort services", "Documentation", "Compliance"],
      image: "/military-government.jpg"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Full Screen */}
      <section className="h-screen relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our Services
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12">
              Specialized Transportation Solutions for Heavy & Oversized Loads
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              RGN Superloads • Heavy Equipment • Industrial Machinery • Nationwide Coverage
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Full Screen */}
      <section className="h-screen bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <div className="text-6xl text-yellow-600 opacity-20">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Screen */}
      <section className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Move Your Load?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Get a free quote for your transportation needs. Our team of experts is ready to handle your heavy haul requirements with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-200">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200">
              Contact Dispatch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 