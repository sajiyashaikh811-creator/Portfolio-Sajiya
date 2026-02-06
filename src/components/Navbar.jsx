'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="light-navbar fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="w-full px-0 py-6 flex items-center justify-center h-full">
        <div className="flex justify-between items-center w-full">
          {/* Logo - Left Side - Aligned with Hero */}
          <Link 
            href="/"
            className="logo-light cursor-hover ml-[130px] text-gray-900 font-bold text-xl"
          >
            Sajiya Shaikh
          </Link>
          
          {/* Navigation - Right Side - Full Width */}
          <div className="flex space-x-8 justify-end flex-1 pr-6">
            <Link
              href="/"
              className={`nav-link-light cursor-hover text-gray-700 hover:text-green-600 transition-colors duration-300 ${
                pathname === '/' ? 'text-green-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-link-light cursor-hover text-gray-700 hover:text-green-600 transition-colors duration-300 ${
                pathname === '/about' ? 'text-green-600 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`nav-link-light cursor-hover text-gray-700 hover:text-green-600 transition-colors duration-300 ${
                pathname === '/contact' ? 'text-green-600 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}