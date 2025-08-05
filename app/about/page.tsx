

export default function About() {
  const teamMembers = [
    {
      name: "Mike Johnson",
      position: "Founder & CEO",
      description: "With over 20 years in heavy haul transportation, Mike leads our company with unmatched expertise in RGN superloads.",
      image: "/team/mike.jpg"
    },
    {
      name: "Sarah Williams",
      position: "Operations Director",
      description: "Sarah manages our fleet operations and ensures every load is transported safely and efficiently.",
      image: "/team/sarah.jpg"
    },
    {
      name: "David Martinez",
      position: "Lead Driver",
      description: "David is our most experienced driver, specializing in oversized loads and complex routing.",
      image: "/team/david.jpg"
    },
    {
      name: "Lisa Rodriguez",
      position: "Dispatch Manager",
      description: "Lisa coordinates all shipments and ensures seamless communication between drivers and clients.",
      image: "/team/lisa.jpg"
    }
  ];

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
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Full Screen */}
      <section className="h-screen relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About Seven Lines
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12">
              Leading Heavy Haul Transportation Since 2003
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Based in Dayton, Ohio • Nationwide Coverage • RGN Superload Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2003, Seven Lines Trucking began with a simple mission: to provide exceptional heavy haul transportation services across America. What started as a small family operation has grown into one of the nation&apos;s most trusted trucking companies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to safety, reliability, and outstanding customer service has earned us the trust of hundreds of satisfied clients. We believe that every load deserves the highest level of care and attention.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push the boundaries of what&apos;s possible in heavy haul transportation, always staying true to our core values of safety, integrity, and customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-8">
              <div className="text-center">
                <div className="text-8xl mb-4">🚛</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">20+ Years of Excellence</h3>
                <p className="text-gray-700">
                  Serving America with pride and dedication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Full Screen */}
      <section className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Full Screen */}
      <section className="h-screen bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver the best possible experience for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Full Screen */}
      <section className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to bringing your vision to life with skill and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-4xl">👤</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let&apos;s discuss your transportation needs and see how we can help move your cargo safely and efficiently across America.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-200">
              Get Quote
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