export default function Footer() {
  return (
    <section className="bg-gray-800 text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">7 Lines Trucking</h3>
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
                              <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Airport & Aircraft</a></li>
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
  );
} 