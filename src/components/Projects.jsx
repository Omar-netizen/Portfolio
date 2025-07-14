import React from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered NPC Dialogue System',
      description: 'Built a 3D NPC interaction system where clicking or typing triggers real-time AI responses using LLMs.',
      tech: ['Unity (C#)', 'FastAPI (Python)', 'OpenRouter API (Mistral-7B)', 'TextMeshPro'],
      image: '/images/project1.png',
      github: 'https://github.com/Omar-netizen/AI-Powered-NPC-Unity',
      featured: true
    },
    {
      id: 2,
      title: 'BRAINDUMP',
      description: 'A productivity-focused MERN stack web app that lets users create, manage, and generate flashcards from their personal notes.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: '/images/project2.png',
      github: 'https://github.com/Omar-netizen/Braindump',
      featured: false
    },
    {
      id: 3,
      title: 'WorkoutBuddy',
      description: 'This is a full-stack Workout Tracker App built using the MERN stack. The app also features a built-in AI-powered chatbot.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: '/images/project3.png',
      github: 'https://github.com/Omar-netizen/WorkoutBuddy',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-retro text-gradient retro-glow mb-4">
            MY_PROJECTS
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of my recent work and creative projects
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(project => project.featured).map((project) => (
          <div key={project.id} className="mb-16">
            <div className="cyber-border bg-gray-900 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                
                {/* Project Image */}
                <div className="relative group">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="text-cyan-400" size={48} />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-cyan-400 font-cyber text-sm tracking-wider">FEATURED PROJECT</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-cyber text-white mb-4 tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="cyber-border bg-black text-cyan-400 px-3 py-1 text-sm font-cyber tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github size={20} />
                      <span className="font-cyber tracking-wider">CODE</span>
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <ExternalLink size={20} />
                        <span className="font-cyber tracking-wider">DEMO</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(project => !project.featured).map((project) => (
            <div key={project.id} className="cyber-border bg-gray-900 overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              
              {/* Project Image */}
              <div className="relative group">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <img src={project.image} alt={project.title} 
                   className="object-contain max-h-60 w-auto"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="text-cyan-400" size={32} />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-cyber text-white mb-3 tracking-wider">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-black text-cyan-400 px-2 py-1 text-xs font-cyber tracking-wider border border-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors">
                    <Github size={16} />
                    <span className="font-cyber text-xs tracking-wider">CODE</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={16} />
                      <span className="font-cyber text-xs tracking-wider">DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="cyber-border bg-transparent text-cyan-400 px-8 py-3 font-cyber tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300">
            VIEW_MORE_PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
