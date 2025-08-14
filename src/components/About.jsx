import React from 'react';
import { Code, Database, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'MySQL',
    'HTML5', 'CSS3', 'Tailwind', 'Express', 'Git','C#','Java','FastAPI' 
    
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Building scalable server-side applications and robust APIs.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and aesthetically pleasing user experiences.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-retro text-gradient retro-glow mb-4">
            ABOUT_ME
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-cyber text-cyan-400 tracking-wider">
              WHO_I_AM
            </h3>
            
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate full-stack developer who loves turning ideas into digital reality. With expertise in both frontend and backend technologies, I create seamless web applications that combine beautiful user interfaces with robust server-side functionality.
             I thrive on solving complex problems, writing clean code, and staying updated with the latest industry trends.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in continuous learning and am always excited to take on new challenges that push my skills to the next level.
            </p>
            
            </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-cyber text-cyan-400 tracking-wider">
              SKILLS_&_TECH
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="cyber-border bg-gray-900 px-4 py-3 text-center hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm font-cyber tracking-wider">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-border bg-gray-900 p-6 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-cyan-400 flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-cyber text-white mb-3 tracking-wider">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;