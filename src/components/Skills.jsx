'use client';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    { 
      name: "React", 
      level: 40, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
        </svg>
      ),
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-50"
    },
    { 
      name: "JavaScript", 
      level: 43, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    { 
      name: "Next.js", 
      level: 45, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#FFFFFF" d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0803-.0516c-.0516-.0336-.0939-.0822-.1213-.1201-.0146-.0212-.0094-1.3157.0188-4.2857l.0375-4.2488.0563-.0687c.0235-.0299.0797-.0895.1213-.1201.0635-.0445.1056-.0522.4739-.0522.4568 0 .5429.0156.6479.1077.0188.0156 1.5056 2.2544 3.3002 4.9758l6.2802 9.5198 1.9107-1.2643c2.651-1.7506 4.3985-4.4226 4.9749-7.6045.0962-.659.108-.8537.108-1.7474s-.012-1.0884-.108-1.7476C21.2982 5.2961 18.6522 1.8213 15.0109.2467 13.4718-.2487 11.7584-.3398 11.5725 0z"/>
        </svg>
      ),
      color: "from-gray-400 to-white",
      bgColor: "bg-gray-50"
    },
    { 
      name: "HTML", 
      level: 95, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50"
    },
    { 
      name: "CSS", 
      level: 90, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.15 4.41l.216 2.622 10.125.07-.6 6.803L12 15.228l-2.69-.823L9.12 12.48H6.47l.198 2.27L12 16.554l5.332-1.804 2.21-24.72z"/>
        </svg>
      ),
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    { 
      name: "Figma", 
      level: 85, 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#F24E1E" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z"/>
          <path fill="#FF7262" d="M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117v6.038z"/>
          <path fill="#A259FF" d="M8.148 0h4.588v8.981H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0z"/>
          <path fill="#1ABCFE" d="M8.148 8.981h4.588v8.98H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49z"/>
          <path fill="#0ACF83" d="M15.852 8.981c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49 4.49-2.014 4.49-4.49-2.014-4.49-4.49-4.49z"/>
        </svg>
      ),
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            My <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid - Dark Theme */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-slate-700 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className="text-center text-sm font-bold text-gray-200 mb-3">
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${500 + index * 100}ms`
                  }}
                ></div>
              </div>
              
              {/* Percentage */}
              <div className="text-center mt-2">
                <span className={`text-xs font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.level}%
                </span>
              </div>
              
              {/* Hover Effect */}
              {hoveredSkill === index && (
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-5 pointer-events-none`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}