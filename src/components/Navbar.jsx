'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="light-navbar fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="w-full px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
        {/* Logo - Left Side */}
        <Link 
          href="/"
          className="logo-light cursor-hover text-gray-900 font-bold text-lg md:text-xl"
        >
          Sajiya Shaikh
        </Link>
        
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-hover p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`nav-link-light cursor-hover text-base text-gray-700 hover:text-cyan-600 transition-colors duration-300 ${
              pathname === '/' ? 'text-cyan-600 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`nav-link-light cursor-hover text-base text-gray-700 hover:text-cyan-600 transition-colors duration-300 ${
              pathname === '/about' ? 'text-cyan-600 font-semibold' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`nav-link-light cursor-hover text-base text-gray-700 hover:text-cyan-600 transition-colors duration-300 ${
              pathname === '/contact' ? 'text-cyan-600 font-semibold' : ''
            }`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48' : 'max-h-0'}`}>
        <div className="px-4 py-4 space-y-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-300 ${
              pathname === '/' ? 'text-cyan-600 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-300 ${
              pathname === '/about' ? 'text-cyan-600 font-semibold' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-300 ${
              pathname === '/contact' ? 'text-cyan-600 font-semibold' : ''
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}