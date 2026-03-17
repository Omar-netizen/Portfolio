import React from 'react';
import { GraduationCap, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'Guru Gobind Singh Indraprastha University',
      location: 'ADGIPS, Delhi',
      year: '2022-2026',
      score: 'CGPA: 8.07'
    },
    {
      degree: 'CBSE Class 12th',
      institution: 'Greenway Modern School, Delhi',
      year: '2022',
      score: '76.4%'
    },
    {
      degree: 'CBSE Class 10th',
      institution: 'Greenway Modern School, Delhi',
      year: '2020',
      score: '91.2%'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate Full Stack Developer currently pursuing B.Tech in Information Technology 
                at GGSIPU, Delhi. With hands-on experience in building AI-powered applications and working 
                with modern web technologies, I thrive on solving complex problems and creating innovative solutions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                My journey includes internships at <span className="font-semibold text-gray-900">CRIS (Centre for Railway Information Systems)</span> and <span className="font-semibold text-gray-900">Sysnet Global Technologies</span>, where I developed full-stack applications that streamlined processes and 
                improved user experiences. I'm particularly interested in AI/ML integration, cloud technologies, 
                and building scalable web applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:mdomarkhan314@gmail.com" className="hover:text-primary transition-colors">
                  mdomarkhan314@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+91 7982325440</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <GraduationCap size={20} className="text-primary flex-shrink-0" />
                <span>B.Tech IT Student</span>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={28} className="text-primary" />
              <h3 className="text-2xl font-display font-bold text-gray-900">
                Education
              </h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:border-primary transition-all hover:shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-primary font-medium text-gray-600 text-sm mb-1">{edu.institution}</p>
                  {edu.location && <p className="text-gray-600 text-sm mb-2">{edu.location}</p>}
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-200 mt-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={14} />
                      <span>{edu.year}</span>
                    </div>
                    <span className="text-accent text-gray-600 font-semibold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;