import React from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Server size={24} />,
      skills: ['React', 'Node.js', 'Express', 'Next.js', 'Tailwind CSS', 'FastAPI'],
      color: 'indigo'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', 'Pinecone Vector DB'],
      color: 'purple'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'WordPress'],
      color: 'amber'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-gray-600 bg-${category.color}-50 p-3 rounded-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-gradient-to-br from-slate-50 to-blue-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-primary hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;