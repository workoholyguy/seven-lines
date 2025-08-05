"use client";
import ContactForm from "../components/ContactForm";

export default function About() {
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
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - With Background Image */}
      <section className="h-screen snap-end relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery2.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative h-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
              About Seven Lines
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
              Leading Heavy Haul Transportation Since 2003
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Based in Dayton, Ohio • Nationwide Coverage • RGN Superload Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="h-screen snap-end bg-white">
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                  Our Story
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                  Founded in 2003, Seven Lines Trucking began with a simple mission: to provide exceptional heavy haul transportation services across America. What started as a small family operation has grown into one of the nation&apos;s most trusted trucking companies.
                </p>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                  Our commitment to safety, reliability, and outstanding customer service has earned us the trust of hundreds of satisfied clients. We believe that every load deserves the highest level of care and attention.
                </p>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Today, we continue to push the boundaries of what&apos;s possible in heavy haul transportation, always staying true to our core values of safety, integrity, and customer satisfaction.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-8 sm:p-10 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl sm:text-8xl mb-4">🚛</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">20+ Years of Excellence</h3>
                  <p className="text-gray-700 text-lg">
                    Serving America with pride and dedication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="h-screen snap-end bg-gray-900 text-white">
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-yellow-400">{stat.number}</div>
                  <div className="text-blue-100 text-lg sm:text-xl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="h-screen snap-end bg-white">
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Our Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These core values guide everything we do and ensure we deliver the best possible experience for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {values.map((value, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl sm:text-7xl mb-4">{value.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - With Background Image */}
      <section className="h-screen snap-end relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery26.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight">
              Ready to Work With Us?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed">
              Let&apos;s discuss your transportation needs and see how we can help move your cargo safely and efficiently across America.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
              <button className="bg-yellow-500 text-gray-900 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl" onClick={() => {
                    document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                Get Quote
              </button>
              <button className="border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:scale-105" onClick={() => {
                    document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                Contact Dispatch
              </button>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
} 