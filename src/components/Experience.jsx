import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Centre for Railway Information Systems (CRIS)',
      location: 'Offline',
      period: 'Sep 2024 – Oct 2024',
      description: [
        'Developed Train Track Lost and Found Website for UTS Group, streamlining lost item reporting and retrieval for railway passengers.',
        'Implemented full-stack solution with user authentication, search functionality, and admin dashboard under guidance of Principal Project Engineer.'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Sysnet Global Technologies',
      location: 'Offline',
      period: 'Aug 2024 – Sep 2024',
      description: [
        'Built an AI-powered PDF Chat Assistant, reducing manual document search time by 70% with RAG pipeline and vector embeddings.'
      ]
    },
    {
      title: 'Liberty Developer Essentials',
      company: 'IBM (via Credly)',
      location: 'Offline',
      period: 'July 2024 - Aug 2024',
      description: [
        'Developed full-stack web applications and AI-powered chatbots with cloud deployment techniques.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase size={24} className="text-primary mt-1 flex-shrink-0" />
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-primary text-gray-600 text-lg font-medium mb-1 ml-9">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-600 text-sm ml-9">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-blue-50 px-4 py-2 rounded-lg md:ml-4">
                  <Calendar size={16} className="text-primary" />
                  <span className="font-medium text-sm whitespace-nowrap">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 ml-9 mt-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-2">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;