'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const services = [
    "RGN Superload Transport",
    "Heavy Equipment Hauling",
    "Industrial Machinery",
    "Wind Turbine Transport",
    "Oil & Gas Equipment",
    "Military & Government",
    "Other"
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Full Screen */}
      <section className="h-screen relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Contact Us
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12">
              Ready to Move Your Load?
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Get in touch with us for a free quote and consultation on your transportation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information - Full Screen */}
      <section className="h-screen bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(404) 555-0123"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Showroom</h3>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-700 font-medium">Interactive Map</p>
                    <p className="text-gray-600 text-sm">2128 Division Ave, Dayton, OH</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Emergency Dispatch</h3>
                <p className="text-gray-300 mb-4">
                  Need immediate transportation? We offer 24/7 emergency dispatch services for urgent loads.
                </p>
                <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
                  Emergency Dispatch
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/samlines.inc/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg hover:opacity-80 transition-opacity">
                    <span className="text-2xl">📷</span>
                  </a>
                  <a href="tel:+19372063308" className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors">
                    <span className="text-2xl">📞</span>
                  </a>
                  <a href="mailto:7linesinc@gmail.com" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
                    <span className="text-2xl">✉️</span>
                  </a>
                </div>
                <p className="text-gray-600 text-sm mt-4">Connect with us on social media for updates and project highlights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Screen */}
      <section className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long does transportation take?</h3>
              <p className="text-gray-600">
                Transportation time varies by distance and load complexity. Local hauls take 1-3 days, while cross-country shipments may take 1-2 weeks.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer insurance coverage?</h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive cargo insurance on all our shipments. Coverage varies by load type and value.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What areas do you serve?</h3>
              <p className="text-gray-600">
                We serve the entire United States with nationwide coverage. Based in Dayton, Ohio, we transport loads coast to coast.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you provide free quotes?</h3>
              <p className="text-gray-600">
                Absolutely! We offer free, no-obligation quotes for all transportation projects. Contact our dispatch for immediate pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 