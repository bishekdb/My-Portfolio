import React, { useState, useEffect } from 'react';
import { Download, Mail, Code, Palette, Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ['Web Developer', 'UI/UX Designer', 'Coding Enthusiast', 'Creative Thinker'];
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentRole.length) {
          setDisplayedText(currentRole.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(currentRole.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, roleIndex, roles]);
  const handleDownloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/Bishek_Debbarma_Resume.pdf';
    link.download = 'Bishek_Debbarma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 animate-fade-in">
                <Code className="text-blue-600" size={24} />
                <span className="text-blue-600 font-medium">Student Portfolio</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
                Hi, I'm <span className="text-blue-800 relative">
                  Bishek
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </span>
                <br />
                <span className="text-emerald-600">Debbarma</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-6 font-light animate-slide-up delay-200">
                <span className="inline-block min-w-[280px] text-left">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-400">
                I'm a student eager to develop my skills in web design and coding. 
                I love creating beautiful, functional websites and exploring new technologies 
                to bring creative ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up delay-600">
                <button
                  onClick={handleHireMe}
                  className="group bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <Mail size={20} className="relative z-10" />
                  <span className="relative z-10">Hire Me</span>
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Download size={20} />
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 animate-slide-up delay-800">
                <span className="text-gray-600 text-sm">Follow me:</span>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/bishekdb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Github size={20} className="text-gray-700 hover:text-blue-600" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bishek-debbarma-53b6b1214" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Linkedin size={20} className="text-gray-700 hover:text-blue-600" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 hover:bg-emerald-100 rounded-full transition-colors duration-200 hover:scale-110 transform">
                    <Twitter size={20} className="text-gray-700 hover:text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-up delay-1000">
              <div className="relative group">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-72 h-72 bg-gradient-to-br from-blue-800 to-emerald-600 rounded-full flex items-center justify-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-center relative z-10">
                      <Palette size={48} className="mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                      <div className="text-xl font-bold">Bishek</div>
                      <div className="text-sm opacity-90">Web Designer</div>
                    </div>
                  </div>
                </div>
                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce delay-75 shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full animate-bounce delay-150 shadow-lg"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute bottom-1/4 -right-8 w-5 h-5 bg-purple-500 rounded-full animate-bounce delay-300 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;