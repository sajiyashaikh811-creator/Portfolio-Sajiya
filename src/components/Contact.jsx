'use client';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const typingTexts = [
    "Let's create something amazing together! ✨",
    "Ready to bring your ideas to life! 🚀",
    "Your next project awaits! 💫",
    "Let's build the future! 🌟"
  ];

  // Typing animation effect
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (!isDeleting && currentIndex < currentText.length) {
        setTypingText(currentText.slice(0, currentIndex + 1));
        currentIndex++;
      } else if (!isDeleting && currentIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        setTypingText(currentText.slice(0, currentIndex - 1));
        currentIndex--;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Email',
      value: 'sajiyashaikh811@gmail.com',
      link: 'mailto:sajiyashaikh811@gmail.com',
      color: 'from-blue-500 via-purple-500 to-cyan-500',
      description: 'Drop me a line anytime!'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      title: 'Phone',
      value: '+91 9930653385',
      link: 'tel:+919930653385',
      color: 'from-green-500 via-emerald-500 to-teal-500',
      description: 'Let\'s have a chat!'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: 'Location',
      value: 'Mumbai, India',
      link: '#',
      color: 'from-pink-500 via-rose-500 to-red-500',
      description: 'Where the magic happens!'
    }
  ];
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-blue-600 hover:bg-blue-500/20 hover:scale-125'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-gray-700 hover:bg-gray-500/20 hover:scale-125'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-pink-500 hover:bg-pink-500/20 hover:scale-125'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-blue-400 hover:bg-blue-400/20 hover:scale-125'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Beautiful Background Design */}
      <div className="absolute inset-0">
        {/* Elegant Shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-green-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-green-100/15 to-blue-100/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-50/30 to-green-50/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-32 right-40 w-16 h-16 border-2 border-blue-200 rounded-full animate-spin opacity-30" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-40 left-32 w-12 h-12 bg-gradient-to-br from-green-200 to-blue-200 rounded-lg rotate-45 animate-bounce opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-7xl md:text-8xl font-bold mb-8 text-gray-900 font-inter leading-tight">
              Let's{' '}
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                Connect
              </span>
            </h1>
            
            {/* Typing Animation */}
            <div className="h-16 flex items-center justify-center mb-8">
              <p className="text-2xl md:text-3xl text-gray-700 font-light">
                {typingText}
                <span className="text-green-600 animate-pulse">|</span>
              </p>
            </div>
            
            {/* Animated Subtitle */}
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to turn your wildest ideas into reality? I'm here to make it happen! 
              Whether it's a groundbreaking project or just a friendly chat, let's create something extraordinary together.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="block p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-hover group transform hover:scale-105 border border-gray-200 hover:border-green-400 relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10 flex items-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center text-white mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                  {info.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-2xl mb-1 group-hover:text-green-600 transition-colors duration-300">
                    {info.title}
                  </div>
                  <div className="text-gray-700 text-lg mb-2 group-hover:text-gray-900 transition-colors duration-300 break-all">
                    {info.value}
                  </div>
                  <div className="text-gray-500 text-sm group-hover:text-green-600 transition-colors duration-300">
                    {info.description}
                  </div>
                </div>
              </div>

              {/* Hover Effect Particles */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200">
            <h4 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Follow My Journey 🌟
            </h4>
            <p className="text-gray-600 mb-8">
              Stay connected and follow my latest projects, insights, and creative adventures across social platforms.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-16 h-16 bg-white backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center text-gray-600 transition-all duration-300 cursor-hover hover:shadow-xl transform border border-gray-200 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200">
            <h4 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Current Status 💫
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Available for new projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Open to collaborations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Exploring new opportunities</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
              <p className="text-sm text-gray-600">
                <strong>Response Time:</strong> Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}