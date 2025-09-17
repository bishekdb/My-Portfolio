import React from 'react';
import { ExternalLink, Github, Palette, Users, Briefcase, Code, Eye } from 'lucide-react';

const Projects: React.FC = () => {

  const projects = [
    {
      id: 1,
      title: "Happy Tails",
      description: "A comprehensive pet care platform connecting pet owners with veterinarians, pet sitters, and local pet services. Features appointment booking, health tracking, and a community forum for pet lovers.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      icon: <Users className="text-emerald-600" size={32} />,
      color: "from-emerald-100 to-emerald-50",
      border: "border-emerald-200",
      technologies: ["HTML/CSS", "Java", "Database"],
      status: "In Development",
      statusColor: "bg-orange-100 text-orange-800",
      completionPercent: 75
    },
    {
      id: 2,
      title: "Career Guidance",
      description: "An interactive career counseling platform that helps students and professionals discover their ideal career paths through skill assessments, industry insights, and personalized recommendations.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      icon: <Briefcase className="text-blue-600" size={32} />,
      color: "from-blue-100 to-blue-50",
      border: "border-blue-200",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
      completionPercent: 100
    },
    {
      id: 3,
      title: "Figma Design Portfolio",
      description: "A showcase of my UI/UX design work including mobile app mockups, website prototypes, and design systems. Features interactive prototypes and detailed case studies of my design process.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      icon: <Palette className="text-purple-600" size={32} />,
      color: "from-purple-100 to-purple-50",
      border: "border-purple-200",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      status: "Featured",
      statusColor: "bg-purple-100 text-purple-800",
      completionPercent: 100
    }
  ];

  const handleViewProject = (projectTitle: string) => {
    alert(`${projectTitle} would open in a new window with detailed project information and live demo.`);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="text-blue-600" size={24} />
            <span className="text-blue-600 font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills in web development, 
            design, and problem-solving. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group ${project.border} border-2`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                
                {/* Project Icon */}
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
                  {project.icon}
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Completion Progress */}
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3">
                  <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                    <span>Progress</span>
                    <span>{project.completionPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${project.color.replace('100', '500').replace('50', '400')} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${project.completionPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewProject(project.title)}
                    className="flex-1 bg-blue-800 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-900 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={18} />
                    View Project
                  </button>
                  <button
                    onClick={() => alert('GitHub repository would open in a new window')}
                    className="border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Github size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            <Eye size={20} />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
