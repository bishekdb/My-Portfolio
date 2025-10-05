import { useRef, useState } from 'react';
import { Code, Palette, Database, Server, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioConfig } from '../config/portfolio';

const categoryIcons: Record<string, any> = {
  Frontend: Code,
  Backend: Server,
  Design: Palette,
  Database: Database,
  DevOps: Server
};

const categoryColors: Record<string, { from: string; to: string; glow: string }> = {
  Frontend: { from: '#8b5cf6', to: '#ec4899', glow: 'rgba(139, 92, 246, 0.5)' },
  Backend: { from: '#06b6d4', to: '#3b82f6', glow: 'rgba(6, 182, 212, 0.5)' },
  Design: { from: '#f59e0b', to: '#ef4444', glow: 'rgba(245, 158, 11, 0.5)' },
  Database: { from: '#10b981', to: '#14b8a6', glow: 'rgba(16, 185, 129, 0.5)' },
  DevOps: { from: '#6366f1', to: '#8b5cf6', glow: 'rgba(99, 102, 241, 0.5)' }
};

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = Array.from(new Set(portfolioConfig.skills.map(s => s.category)));

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">What I do</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
        </div>

        {/* Skills Grid - Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {portfolioConfig.skills.map((skill, index) => {
            const colors = categoryColors[skill.category] || { from: '#8b5cf6', to: '#ec4899', glow: 'rgba(139, 92, 246, 0.5)' };
            const Icon = categoryIcons[skill.category] || Code;

            return (
              <div
                key={skill.name}
                className={`group bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 transform transition-all duration-1000 hover:scale-105 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  background: hoveredSkill === skill.name 
                    ? `linear-gradient(135deg, ${colors.from}15, ${colors.to}15)` 
                    : undefined
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                    boxShadow: hoveredSkill === skill.name ? `0 0 30px ${colors.glow}` : '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-400 text-center uppercase tracking-wider">{skill.category}</p>
              </div>
            );
          })}
        </div>

        {/* Category Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category] || Code;
            const colors = categoryColors[category] || { from: '#8b5cf6', to: '#ec4899' };
            const categorySkills = portfolioConfig.skills.filter(s => s.category === category);

            return (
              <div
                key={category}
                className={`bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 transform transition-all duration-1000 hover:scale-105 hover:border-purple-500/30 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
                <p className="text-gray-400 text-sm">{categorySkills.length} skills</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
