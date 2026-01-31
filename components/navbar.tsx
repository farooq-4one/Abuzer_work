'use client'

import React, { useState } from 'react'

interface ServiceCard {
  title: string
  href: string
}

const services: ServiceCard[] = [
  { title: 'Paystub', href: '/services/paystubb.jpg' },
  { title: 'Credit Report', href: '/services/credit-reportt.jpg' },
  { title: 'Tax Return', href: '/services/w2-formm.jpg' },
  { title: 'Bank Statement', href: '/services/1099-formm.jpg' },
]

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="bg-gray-50 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">
              WorkForm Solutions
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-900 font-medium border-b-2 border-blue-900 pb-1"
            >
              Home
            </a>

            {/* Desktop Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
              >
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <ul className="py-2">
                    {services.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.href}
                          target="_blank"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Desktop Order Button */}
          <div className="hidden md:block">
            <a
              href="https://api.whatsapp.com/send?phone=923244628026&text=Hello!"
              target="_blank"
            >
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors">
                Order Now
              </button>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <div className="px-4 py-4 space-y-3">
            <a
              href="/"
              className="block text-gray-900 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>

            <div>
              <div className="text-gray-700 font-medium mb-1">Services</div>
              <div className="ml-4 space-y-2">
                {services.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    className="block text-gray-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="block text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=923244628026&text=Hello!"
              target="_blank"
              onClick={() => setMobileOpen(false)}
            >
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium w-full mt-2">
                Order Now
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
