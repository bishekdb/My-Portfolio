import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Globe, BookOpen, Coffee, Heart, Award, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  const skills = [
    'HTML/CSS',
    'Java',
    'UI/UX Design',
    'Figma',
    'Responsive Design',
    'Web Development'
  ];

  const stats = [
    { number: 15, label: 'Projects Completed', icon: <Award className="text-blue-600" size={24} /> },
    { number: 2, label: 'Years Learning', icon: <TrendingUp className="text-emerald-600" size={24} /> },
    { number: 50, label: 'Skills Acquired', icon: <Target className="text-purple-600" size={24} /> },
    { number: 100, label: 'Hours Coding', icon: <Code className="text-orange-600" size={24} /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const interests = [
    { icon: <Code size={24} />, title: 'Web Development', description: 'Building interactive web applications' },
    { icon: <Palette size={24} />, title: 'UI/UX Design', description: 'Creating beautiful user experiences' },
    { icon: <Globe size={24} />, title: 'Modern Web Tech', description: 'Exploring new frameworks and tools' },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={aboutRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a student who loves turning creative ideas into beautiful, 
              functional digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Personal Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  As a passionate web design student, I'm constantly exploring the intersection of 
                  creativity and technology. My passion for coding began with curiosity about how 
                  websites work, and it has evolved into a deep appreciation for clean code and 
                  thoughtful design.
                </p>
                <p>
                  I believe that great web experiences are born from understanding user needs and 
                  translating them into intuitive, accessible interfaces. Whether I'm coding a 
                  responsive layout or designing a user journey, I approach each project with 
                  enthusiasm and attention to detail.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring design trends, learning new 
                  technologies, or working on personal projects that challenge me to grow as 
                  a developer and designer.
                </p>
              </div>

              {/* Fun Facts */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="text-red-500" size={20} />
                  Fun Facts
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Coffee size={16} className="text-brown-500" />
                    Coffee connoisseur
                  </div>
                  <div className="flex items-center gap-2">
                    <Code size={16} className="text-blue-500" />
                    Late-night coder
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette size={16} className="text-purple-500" />
                    Design lover
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-green-500" />
                    Continuous learner
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Interests */}
            <div>
              {/* Enhanced Skills */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200 transform hover:scale-105"
                      style={{ 
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="mb-12 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="bg-white p-4 rounded-xl border border-gray-200 text-center transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {isVisible ? stat.number : 0}+
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What I Love
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="text-blue-600 mb-2">
                        {interest.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {interest.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {interest.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;