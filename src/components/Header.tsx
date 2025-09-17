import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Active section detection
      const sections = ['home', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold text-blue-800 group cursor-pointer">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
              <Code2 className="text-blue-600" size={20} />
            </div>
            <span className="group-hover:text-blue-900 transition-colors duration-200">
              Bishek Debbarma
            </span>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/50 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-200/50">
            {['home', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                  activeSection === item 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} 
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {['home', 'projects', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-800 transition-colors duration-200 capitalize font-medium text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;