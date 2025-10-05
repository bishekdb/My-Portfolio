import { Heart, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {portfolioConfig.name}
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {portfolioConfig.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block transform duration-300"
                  >
                    → {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-purple-400 transition-colors">{portfolioConfig.contact.email}</li>
              <li className="hover:text-purple-400 transition-colors">{portfolioConfig.contact.phone}</li>
              <li className="hover:text-purple-400 transition-colors">{portfolioConfig.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-current animate-pulse" /> by{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              {portfolioConfig.name}
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
