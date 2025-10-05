import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Code2, Palette, ArrowDown } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Creative', 'Innovative', 'Modern', 'Unique'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Floating Orbs with Animation */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center min-h-screen py-20">
          {/* Left Side - Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-purple-400" />
              <span className="text-xs md:text-sm text-purple-300">Student</span>
            </div>

            {/* Main Heading with Animated Word */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  {portfolioConfig.name.split(' ')[0]}
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-emerald-400 bg-clip-text text-transparent">
                  {portfolioConfig.name.split(' ')[1]}
                </span>
              </h1>
              
              {/* Animated Rotating Text */}
              <p className="text-3xl md:text-4xl font-light text-gray-300 leading-tight">
                <span>Building </span>
                <span className="relative inline-block align-middle w-36 md:w-44 h-10 md:h-12 mx-1">
                  {words.map((word, idx) => (
                    <span
                      key={idx}
                      className={`absolute left-0 top-0 w-full whitespace-nowrap bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold transition-all duration-500 ${
                        idx === currentWord
                          ? 'opacity-100 translate-y-0'
                          : idx < currentWord
                          ? 'opacity-0 -translate-y-4'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
                <span> Solutions</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              {portfolioConfig.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/Bishek-Debbarma-Resume.pdf"
                download="Bishek-Debbarma-Resume.pdf"
                className="px-8 py-4 border-2 border-purple-500/30 text-white rounded-xl font-medium hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              >
                <ArrowDown className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700/50">
              {/* <div>
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-gray-400">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Floating Cards */}
            <div className="relative w-full h-[400px] md:h-[500px] xl:h-[600px] max-w-[500px] mx-auto">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 xl:w-80 h-64 md:h-80 xl:h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500 p-4 md:p-6 xl:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-3 md:mb-4">
                    <Code2 className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">Clean Code</h3>
                  <p className="text-sm md:text-base text-gray-300">Writing maintainable and scalable solutions</p>
                </div>
                <div className="text-4xl md:text-6xl font-bold text-white/5">01</div>
              </div>

              {/* Floating Card 1 - Top Right */}
              <div className="absolute top-0 right-0 md:-top-4 md:-right-4 xl:top-0 xl:right-0 w-32 md:w-40 xl:w-48 h-32 md:h-40 xl:h-48 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl transform hover:scale-110 transition-all duration-500 p-3 md:p-4 xl:p-6 hover:rotate-3">
                <div className="w-8 md:w-10 xl:w-12 h-8 md:h-10 xl:h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center mb-1 md:mb-2 xl:mb-3">
                  <Palette className="w-4 md:w-5 xl:w-6 h-4 md:h-5 xl:h-6 text-white" />
                </div>
                <h4 className="text-sm md:text-base xl:text-lg font-bold text-white mb-0.5 md:mb-1">Design</h4>
                <p className="text-xs text-gray-300">Creative & Modern</p>
              </div>

              {/* Floating Card 2 - Bottom Left */}
              <div className="absolute bottom-0 left-0 md:-bottom-4 md:-left-4 xl:bottom-0 xl:left-0 w-40 md:w-48 xl:w-56 h-28 md:h-32 xl:h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl transform hover:scale-110 transition-all duration-500 p-3 md:p-4 xl:p-6 hover:-rotate-2">
                <h4 className="text-base md:text-lg xl:text-xl font-bold text-white mb-1 md:mb-1 xl:mb-2">Fast & Optimized</h4>
                <p className="text-xs text-gray-300">Performance-focused development</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-8 xl:left-0 w-16 xl:w-20 h-16 xl:h-20 border-4 border-purple-500/30 rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 -right-8 xl:right-0 w-12 xl:w-16 h-12 xl:h-16 border-4 border-pink-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-gray-400">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 text-gray-400" />
      </div>
    </section>
  );
};
