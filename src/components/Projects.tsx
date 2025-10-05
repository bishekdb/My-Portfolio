import { useRef, useState } from 'react';
import { X, ExternalLink, Github, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioConfig } from '../config/portfolio';

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);
  const [selectedProject, setSelectedProject] = useState<typeof portfolioConfig.projects[0] | null>(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">My Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
        </div>

        {/* Projects Grid - Two Column Alternating Layout */}
        <div className="max-w-6xl mx-auto space-y-24">
          {portfolioConfig.projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } transform transition-all duration-1000`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Image Side */}
              <div
                className={`group cursor-pointer ${index % 2 === 1 ? 'md:order-2' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/30 group-hover:scale-105">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 select-none"
                      style={{ outline: 'none', border: 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 mx-auto mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <ExternalLink className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-white font-semibold">View Project</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-purple-300 font-medium">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-slate-800/50 border border-purple-500/20 text-purple-300 text-sm rounded-xl font-medium hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-br from-slate-800/90 to-purple-900/40 backdrop-blur-2xl rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 animate-scaleIn"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-4 py-2 bg-purple-500/90 backdrop-blur-sm text-white font-medium rounded-full border border-purple-400/30">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  {selectedProject.title}
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.link}
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  className="flex items-center gap-2 px-8 py-4 border-2 border-purple-500/30 text-white rounded-xl font-medium hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
