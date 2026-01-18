// components/Navbar.tsx
'use client'
import React, {useState} from 'react';

interface ServiceCard2 {
  title: string;
  href: string;
}

  const services: ServiceCard2[] = [
    {
      title: 'Paystub',
      href: '/services/paystubb.jpg'
    },
    {
      title: 'Credit Report',
      href: '/services/credit-reportt.jpg'
    },
    {
      title: 'Tax Return',
      href: '/services/w2-formm.jpg'
    },
    {
      title: 'Bank Statement',
      href: '/services/1099-formm.jpg'
    }
  ];


const Navbar: React.FC = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">
            WorkForm Solutions
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-900 font-medium border-b-2 border-blue-900 pb-1"
            >
              Home
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center" onClick={() => setOpen(!open)}>
                Services
                <svg
                  className="w-8 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open && (
        <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
          <ul className="py-2">
            {services.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href} target='_blank'
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

          {/* Order Now Button */}
          <div className="hidden md:block">
            <a href="https://api.whatsapp.com/send?phone=923244628026&text=Hello!" target="_blank">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors">
              Order Now
            </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;