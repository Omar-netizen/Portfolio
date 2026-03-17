import React from 'react';
import { Trophy, Award, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: 'Top 50 in Octopus Hackathon',
      description: 'Achieved Top 50 ranking in Octopus Hackathon: Season 1 among 900+ competing projects',
      color: 'blue'
    },
    {
      icon: <Award size={32} />,
      title: 'IBM Liberty Developer Certified',
      description: 'Completed IBM Liberty Developer Essentials Training and earned certificate (2024)',
      color: 'indigo'
    },
    {
      icon: <Zap size={32} />,
      title: 'ATL Tinkering Competition Winner',
      description: 'Won ATL Tinkering Inter-School Competition with Arduino-based innovative project',
      color: 'amber'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl text-center border border-gray-200 hover:border-primary transition-all hover:shadow-lg group">
              <div className={`text-${achievement.color}-600 flex justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {achievement.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;