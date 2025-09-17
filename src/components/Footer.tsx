import React from 'react';
import { Heart, Github, Linkedin, Mail, Download, Phone, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Bishek_Debbarma_Resume.pdf';
    link.download = 'Bishek_Debbarma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMessageMe = () => {
    const email = 'debbarmabishek@gmail.com';
    const subject = 'Hello from your portfolio!';
    const body = 'Hi Bishek, I found your portfolio and would like to connect with you.';
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bishek Debbarma</h3>
            <p className="text-gray-300 text-sm mb-4">
              Web Design Student & Coding Enthusiast
            </p>
            <button
              onClick={handleDownloadCV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download size={16} />
              Resume
            </button>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone size={16} />
                <span>+91 8117096317</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail size={16} />
                <span>debbarmabishek@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com/bishekdb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/bishek-debbarma-53b6b1214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <button
              onClick={handleMessageMe}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={16} />
              Message Me
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> by Bishek Debbarma
          </p>
          <p className="text-gray-500 text-xs mt-1"> 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
