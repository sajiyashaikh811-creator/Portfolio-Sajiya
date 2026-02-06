'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  
  const texts = [
    'Web Developer',
    'UI/UX Designer', 
    'Digital Innovator'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToContact = () => {
    router.push('/contact');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-br from-blue-100/20 to-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-20 w-48 h-48 bg-gradient-to-br from-green-100/15 to-blue-100/15 rounded-full blur-3xl"></div>
        
        {/* Clean grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-20 gap-px h-full">
            {Array.from({length: 400}).map((_, i) => (
              <div key={i} className="bg-gray-500"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 backdrop-blur-sm border border-green-200 rounded-full px-6 py-3 mb-8">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-700 text-sm font-medium font-mono">Available for Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 font-inter leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                  Sajiya
                </span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="flex items-center gap-2 text-3xl md:text-4xl font-semibold text-gray-700">
                <span className="text-blue-600 font-mono">{'>'}</span>
                <span>A passionate </span>
                <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent min-w-[300px]">
                  {currentText}
                  <span className="text-green-600 animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-inter">
              I craft exceptional digital experiences through clean code, innovative design, and cutting-edge technology. 
              Currently pursuing AIML while building the future of web development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 cursor-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <span>View My Work</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </button>
              
              <button 
                onClick={navigateToContact}
                className="group px-8 py-4 bg-transparent border-2 border-gray-400 text-gray-700 font-semibold rounded-xl hover:border-green-500 hover:text-green-600 hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 cursor-hover"
              >
                <span className="flex items-center gap-2">
                  <span>Let's Connect</span>
                  <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8">
              <span className="text-gray-600 text-sm font-mono">Find me on:</span>
              {[
                { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-white backdrop-blur-sm border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-green-400 hover:bg-green-50 transition-all duration-300 cursor-hover group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Empty */}
          <div className="hidden lg:block">
            {/* Empty space for balance */}
          </div>
        </div>
      </div>
    </section>
  );
}