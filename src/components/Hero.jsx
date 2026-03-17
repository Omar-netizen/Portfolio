import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block">
              <span className="text-primary font-medium text-gray-600 text-sm bg-blue-100 px-4 py-2 rounded-full">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
              Md. Omar Khan
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">
              Full Stack Developer
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              B.Tech IT student passionate about building intelligent web applications. 
              Experienced in AI/ML integration, full-stack development, and creating impactful solutions 
              that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-all"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/Omar-netizen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2 hover:bg-blue-50 rounded-lg"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/md-omar-khan-9a1355268" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2 hover:bg-blue-50 rounded-lg"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:mdomarkhan314@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors p-2 hover:bg-blue-50 rounded-lg"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden shadow-2xl">
                
                
                  
                
                {/* When you add your image, use this: */}
                { <img src="images/profile.jpeg" alt="Omar Khan" className="w-full h-full object-cover" /> }
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;