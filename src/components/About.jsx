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
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-400/10 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute bottom-32 right-40 w-40 h-40 bg-cyan-500/5 rounded-full animate-float-slow opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-400/10 rounded-full animate-bounce-slow opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge - Shows at top on mobile, with text on desktop */}
        <div className={`lg:hidden flex justify-center mb-8 transform transition-all duration-1200 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-medium">B.Voc AI & ML Student || Web Developer & UI/UX Designer</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Profile Image - Shows after badge on mobile, second on desktop */}
          <div className={`flex justify-center order-1 lg:order-2 transform transition-all duration-1200 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative group cursor-hover">
              {/* Animated Border */}
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              
              {/* Outer Ring */}
              <div className="absolute -inset-4 border-2 border-cyan-500/30 rounded-full"></div>
              
              {/* Image Container */}
              <div className="relative bg-slate-800 rounded-full p-3 sm:p-4 shadow-2xl border border-slate-700">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements around Image */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-full animate-bounce opacity-70 flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-400/20 border border-cyan-400/30 rounded-full animate-ping opacity-60"></div>
              <div className="absolute top-1/2 -right-10 w-8 h-8 bg-cyan-400/20 border border-cyan-500/30 rounded-full animate-pulse opacity-50"></div>
            </div>
          </div>

          {/* Text Content - Shows second on mobile, first on desktop */}
          <div className={`order-2 lg:order-1 transform transition-all duration-1200 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            {/* Badge - Only shows on desktop */}
            <div className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 mb-12 mt-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">B.Voc AI & ML Student || Web Developer & UI/UX Designer</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white font-inter leading-tight">
              Hello, I'm <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">Sajiya Shaikh</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-inter max-w-2xl">
              I am a B.Voc student in Artificial Intelligence and Machine Learning, currently building a strong foundation in web development and UI/UX design. I focus on creating clean, responsive, and user-friendly web interfaces, and I enjoy turning ideas into practical digital experiences.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 cursor-hover transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 shadow-lg"
            >
              <span>Contact Me</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
