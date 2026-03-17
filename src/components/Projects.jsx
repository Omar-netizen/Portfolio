import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Voice Assistant',
      description: 'Offline-first AI voice assistant built with Next.js, Whisper WASM, and Gemini LLM with real-time speech-to-text processing.',
      tech: ['Next.js', 'TypeScript', 'Whisper WASM', 'Gemini LLM', 'Web Workers', 'PWA'],
      highlights: [
        'Implemented real-time STT using Whisper WASM in Web Worker with audio resampling',
        'Integrated Gemini LLM for intelligent replies with latency monitoring',
        'Built PWA with Service Workers for offline functionality and model caching'
      ],
      github: 'https://github.com/Omar-netizen/ai-voice-assistant',
      demo: null,
      date: 'August 2024'
    },
    {
      title: 'GeoGuardian',
      description: 'AI-powered environmental monitoring platform using Sentinel-2 satellite imagery for change detection.',
      tech: ['Satellite Imagery', 'AI/ML', 'Python', 'Automated Alerts'],
      highlights: [
        'Built change detection system processing 10m resolution satellite data',
        'Identifies deforestation, wildfires, and floods with automated email alerts',
        'Saves NGOs $60,000/year in monitoring costs'
      ],
      github: 'https://github.com/Omar-netizen/geoguardian',
      demo: null,
      date: 'November 2024'
    },
    {
      title: 'AI PDF Chatbot',
      description: 'Intelligent chatbot that processes PDF documents and enables natural language Q&A using vector search.',
      tech: ['React', 'Node.js', 'Express', 'Pinecone Vector DB', 'Gemini AI', 'RAG'],
      highlights: [
        'Advanced document processing with smart chunking and semantic embeddings',
        'Vector similarity search for context-aware responses',
        'Real-time PDF management with query expansion and semantic reranking'
      ],
      github: 'https://github.com/Omar-netizen/pdf-chat-app',
      demo: null,
      date: 'September 2024'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Innovative solutions combining AI/ML with full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden border border-gray-200 hover:border-primary transition-all hover:shadow-xl group">
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-gray-900 flex-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500 ml-2">
                    <Calendar size={12} />
                    <span className="whitespace-nowrap">{project.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">→</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;