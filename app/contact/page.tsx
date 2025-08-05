'use client';

import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team of heavy haul transportation experts. We&apos;re here to help with your specialized transport needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Component */}
      <ContactForm />
    </div>
  );
} 