import React from 'react';
import { ChevronDown } from 'lucide-react';


const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
         
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-cyan-400 font-cyber tracking-widest">
              HELLO, I'M
            </p>
            
      
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-retro text-gradient retro-glow animate-float">
              Md. Omar Khan 
            </h1>
            
           
            <p className="text-xl md:text-2xl text-gray-300 font-cyber tracking-wider">
              FULL STACK DEVELOPER 
            </p>
          </div>

         
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and innovative solutions. 
            Passionate about creating seamless user interfaces and robust backend systems.
           
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="cyber-border bg-transparent text-cyan-400 px-8 py-3 rounded-none font-cyber tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              VIEW_PROJECTS
            </button>
            </div>
         
          <div className="pt-12">
            <div className="w-48 h-48 mx-auto cyber-border rounded-full bg-gray-900 flex items-center justify-center animate-glow">
              <img 
              src="/images/profile.png" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full"
            />


              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;