import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        <div className="flex justify-between items-center py-4">
        
          <div className="text-left text-2xl font-cyber font-bold text-gradient retro-glow py-3">
  &lt;Portfolio/&gt; 
</div>

          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-cyber tracking-wider"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-cyber tracking-wider"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-cyber tracking-wider"
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-cyber tracking-wider"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="py-2 text-gray-300 hover:text-cyan-400 transition-colors font-cyber tracking-wider text-left"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="py-2 text-gray-300 hover:text-cyan-400 transition-colors font-cyber tracking-wider text-left"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="py-2 text-gray-300 hover:text-cyan-400 transition-colors font-cyber tracking-wider text-left"
              >
                PROJECTS
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="py-2 text-gray-300 hover:text-cyan-400 transition-colors font-cyber tracking-wider text-left"
              >
                CONTACT
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;