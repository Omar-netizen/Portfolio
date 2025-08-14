import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'mdomarkhan314@gmail.com', 
      href: 'mailto:mdomarkhan314@gmail.com'
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: '7982325440',
      href: 'tel:7982325440'
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Delhi,India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Omar-netizen', label: 'GITHUB' }, 
    { icon: Linkedin, href: '#', label: 'LINKEDIN' },
   
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-retro text-gradient retro-glow mb-4">
            CONTACT_ME
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-cyber text-white mb-8 tracking-wider">
              GET_IN_TOUCH
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 cyber-border bg-gray-900 p-4 hover:bg-gray-800 transition-all duration-300">
                  <div className="cyber-border bg-black p-3">
                    <item.icon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-cyan-400 font-cyber text-sm tracking-wider">
                      {item.label}
                    </p>
                    <a 
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-cyber text-white mb-6 tracking-wider">
                SOCIAL_LINKS
              </h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="cyber-border bg-gray-900 p-4 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .font-cyber {
          font-family: 'Orbitron', monospace;
        }
        
        .font-retro {
          font-family: 'Orbitron', monospace;
        }
        
        .text-gradient {
          background: linear-gradient(45deg, #00ffff, #0080ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .retro-glow {
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }
        
        .cyber-border {
          border: 1px solid #333;
          position: relative;
        }
        
        .cyber-border:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent);
          z-index: -1;
        }
        
        .cyber-border:hover:before {
          background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.2), transparent);
        }
        
        input:focus, textarea:focus {
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Contact;