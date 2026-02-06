'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const projects = [
    {
      id: 1,
      title: "CASHIFY - Mobile App UI Design",
      description: "A beautiful mobile app interface designed in Figma featuring modern UI/UX principles, clean layouts, and intuitive user experience for mobile devices.",
      image: "/Screenshot 2026-02-05 111442.png",
      category: "design",
      technologies: ["Figma", "UI/UX Design", "Mobile Design", "Prototyping"],
      liveUrl: "/Screenshot 2026-02-05 111442.png",
      githubUrl: "#",
      featured: true,
      isFigmaDesign: true
    },
    {
      id: 2,
      title: "RedBus - Mobile App UI Design",
      description: "A beautiful mobile app interface designed in Figma featuring modern UI/UX principles, clean layouts, and intuitive user experience for mobile devices.",
      image: "/Screenshot 2026-02-05 114428.png",
      category: "design",
      technologies: ["Figma", "UI/UX Design", "Mobile Design", "Prototyping"],
      liveUrl: "/Screenshot 2026-02-05 114428.png",
      githubUrl: "#",
      featured: true,
      isFigmaDesign: true
    },
    {
      id: 3,
      title: "Feminine Portfolio Design",
      description: "A collection of elegant and feminine portfolio designs for creative professionals, featuring soft gradients and beautiful animations.",
      image: "/placeholder-profile.svg",
      category: "design",
      technologies: ["Figma", "Adobe XD", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Wellness Mobile App",
      description: "A React Native mobile application for wellness tracking, meditation, and self-care with beautiful, calming interface design.",
      image: "/placeholder-profile.svg",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Creative Agency Website",
      description: "Modern website for a creative agency with stunning animations, portfolio showcase, and interactive elements.",
      image: "/placeholder-profile.svg",
      category: "web",
      technologies: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Fashion Brand Identity",
      description: "Complete brand identity design for a sustainable fashion brand, including logo, color palette, and marketing materials.",
      image: "/placeholder-profile.svg",
      category: "design",
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: '✨' },
    { id: 'web', label: 'Web Development', icon: '💻' },
    { id: 'ai', label: 'AI & ML', icon: '🤖' },
    { id: 'design', label: 'UI/UX Design', icon: '🎨' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Dark Background Design */}
      <div className="absolute inset-0">
        {/* Geometric Patterns */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Decorative Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:'#10b981', stopOpacity:0.3}} />
            </linearGradient>
          </defs>
          <line x1="0%" y1="20%" x2="100%" y2="80%" stroke="url(#lineGrad)" strokeWidth="2"/>
          <line x1="0%" y1="60%" x2="100%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="20%" y1="0%" x2="80%" y2="100%" stroke="url(#lineGrad)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 text-white font-serif transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            My <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            A showcase of my creative journey through beautiful digital experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-hover flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-800 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-hover border border-slate-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Beautiful Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden cursor-zoom-in" onClick={() => project.isFigmaDesign && handleImageClick(project.image)}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Zoom indicator for Figma designs */}
                {project.isFigmaDesign && (
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 z-30">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                    </svg>
                    <span>Click to zoom</span>
                  </div>
                )}
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20">
                  {project.isFigmaDesign ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(project.image);
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 cursor-zoom-in flex items-center gap-2"
                    >
                      <span>View Design</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                      </svg>
                    </button>
                  ) : (
                    <>
                      <a
                        href={project.liveUrl}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 cursor-hover flex items-center gap-2"
                      >
                        <span>Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-all duration-300 cursor-hover flex items-center gap-2"
                      >
                        <span>Code</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </>
                  )}
                </div>

                {/* Featured Badge - Removed */}
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-green-500/20 hover:text-white transition-all duration-300 cursor-hover"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-400 text-lg mb-6">
            Interested in working together on something beautiful?
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-lg rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-300 cursor-hover transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 shadow-lg flex items-center gap-2 mx-auto w-fit"
          >
            <span>Let's Create Together</span>
            <span>✨</span>
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Project Design"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}