import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useScrollAnimation';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set isScrolled for styling
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY < 50) {
        // Always show at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Floating Glassmorphism Navigation */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          isScrolled ? 'top-2 md:top-4 scale-90 md:scale-95' : 'top-4 md:top-6 scale-95 md:scale-100'
        } ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full px-4 md:px-8 py-2 md:py-4 shadow-2xl">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="px-2 md:px-4 py-1 md:py-2 text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform"
            >
              BD
            </button>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1 mx-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 ml-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 bg-slate-900/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-3xl font-bold transition-all transform hover:scale-110 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                  : 'text-white hover:text-purple-400'
              }`}
              style={{
                animation: isMobileMenuOpen
                  ? `slideInRight 0.3s ease-out ${index * 0.1}s both`
                  : 'none'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
