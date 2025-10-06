import { useRef } from 'react';
import { Briefcase, GraduationCap, Sparkles, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioConfig } from '../config/portfolio';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mb-4">
            <span className="text-sm text-purple-300">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card - Profile & Bio */}
          <div
            className={`md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-white/10 p-8 transform transition-all duration-1000 hover:scale-[1.02] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 h-full">
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <img
                  src={portfolioConfig.about.image}
                  alt="Profile"
                  className="relative rounded-2xl w-full h-full object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bio Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Hi, I'm {portfolioConfig.name.split(' ')[0]} 👋
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {portfolioConfig.about.bio}
                </p>
                
                {/* Technical Skills */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {portfolioConfig.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl text-sm text-white font-semibold hover:from-purple-500/30 hover:to-pink-500/30 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                    Developer
                  </span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-sm text-pink-300">
                    Designer
                  </span>
                  <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300">
                    Creator
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Cards */}
          {portfolioConfig.about.timeline.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-white/10 p-6 transform transition-all duration-1000 hover:scale-105 hover:border-purple-500/30 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  {index === 0 ? (
                    <TrendingUp className="w-6 h-6 text-white" />
                  ) : index === 3 ? (
                    <GraduationCap className="w-6 h-6 text-white" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-purple-400 text-sm font-semibold mb-1">{item.year}</div>
                  <h4 className="text-white font-bold text-base mb-1 leading-tight">{item.title}</h4>
                  <p className="text-emerald-400 text-sm font-medium mb-2">{item.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
