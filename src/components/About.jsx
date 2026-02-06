'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="min-h-screen py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-500/10 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-400/10 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute bottom-32 right-40 w-40 h-40 bg-green-500/5 rounded-full animate-float-slow opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-400/10 rounded-full animate-bounce-slow opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content - Story */}
          <div className={`transform transition-all duration-1200 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-12 mt-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">B.Voc AI & ML Student || Web Developer & UI/UX Designer</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white font-inter leading-tight whitespace-nowrap">
              Hello, I'm <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Sajiya Shaikh</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-inter max-w-2xl">
              I am a B.Voc student in Artificial Intelligence and Machine Learning, currently building a strong foundation in web development and UI/UX design. I focus on creating clean, responsive, and user-friendly web interfaces, and I enjoy turning ideas into practical digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 transition-all duration-300 cursor-hover shadow-md hover:shadow-lg hover:shadow-green-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 transition-all duration-300 cursor-hover shadow-md hover:shadow-lg hover:shadow-green-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 transition-all duration-300 cursor-hover shadow-md hover:shadow-lg hover:shadow-green-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-hover transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 shadow-lg"
            >
              <span>Contact Me</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          {/* Right Content - Profile Image with Advanced Animations */}
          <div className={`flex justify-center transform transition-all duration-1200 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative group cursor-hover">
              {/* Animated Border */}
              <div className="absolute -inset-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              
              {/* Outer Ring */}
              <div className="absolute -inset-4 border-2 border-green-500/30 rounded-full"></div>
              
              {/* Image Container */}
              <div className="relative bg-slate-800 rounded-full p-4 shadow-2xl border border-slate-700">
                <div className="w-96 h-96 rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                  <Image
                    src="/placeholder-profile.svg"
                    alt="Sajiya Shaikh - Profile Photo"
                    width={384}
                    height={384}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    } group-hover:scale-105 filter brightness-110`}
                    onLoad={() => setImageLoaded(true)}
                    priority
                  />
                  
                  {/* Overlay Animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements around Image */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full animate-bounce opacity-70 flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400/20 border border-green-400/30 rounded-full animate-ping opacity-60"></div>
              <div className="absolute top-1/2 -right-10 w-8 h-8 bg-green-400/20 border border-green-500/30 rounded-full animate-pulse opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}