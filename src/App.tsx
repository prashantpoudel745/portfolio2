import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Download, ExternalLink, Award, Code, Send, Building, Lightbulb, Users } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Project data with real project photos
  const projects = [
    {
      title: "Sustainable Bamboo Residential Complex",
      category: "Bamboo",
      description: "Innovative eco-friendly residential development utilizing advanced bamboo construction techniques combined with modern structural engineering principles for enhanced durability and sustainability.",
      location: "Kathmandu Valley, Nepal",
      year: "2023",
      image: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg"
    },
    {
      title: "Rammed Earth Community Center",
      category: "Rammed Earth",
      description: "Comprehensive structural design for a multi-purpose community center using traditional rammed earth construction methods enhanced with contemporary engineering solutions.",
      location: "Bhaktapur, Nepal",
      year: "2022",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
    },
    {
      title: "Industrial Steel Framework Complex",
      category: "Steel",
      description: "Complete structural analysis and design of large-scale industrial warehouse facility featuring advanced steel framework systems and modern construction methodologies.",
      location: "Birgunj, Nepal",
      year: "2023",
      image: "https://images.pexels.com/photos/162568/architecture-building-construction-site-162568.jpeg"
    },
    {
      title: "High-Rise RC Commercial Tower",
      category: "RC",
      description: "Structural design and engineering supervision for 15-story mixed-use commercial and residential complex in central Kathmandu, incorporating seismic-resistant design principles.",
      location: "Kathmandu, Nepal",
      year: "2022",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
    },
    {
      title: "Heritage Building Restoration Project",
      category: "RC",
      description: "Specialized structural assessment and restoration engineering for historic heritage building preservation, balancing modern safety standards with traditional architectural integrity.",
      location: "Patan, Nepal",
      year: "2021",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
    },
    {
      title: "Green Bamboo Villa Development",
      category: "Bamboo",
      description: "Luxury residential villa project showcasing innovative bamboo construction techniques integrated with contemporary design elements and sustainable building practices.",
      location: "Pokhara, Nepal",
      year: "2023",
      image: "https://images.pexels.com/photos/7578917/pexels-photo-7578917.jpeg"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Skills data
  const skills = [
    { name: "AutoCAD", level: 95 },
    { name: "ETABS", level: 90 },
    { name: "STAAD.Pro", level: 88 },
    { name: "SAP2000", level: 85 },
    { name: "Tekla Structures", level: 82 },
    { name: "Revit", level: 78 },
    { name: "SketchUp", level: 85 },
    { name: "MS Project", level: 80 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-700">Kishor Poudel</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Kishor Poudel
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 font-medium mt-2">
                  Civil Engineer & MS Candidate
                </p>
                <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                  Experienced structural engineer with 5+ years of expertise in sustainable construction, 
                  specializing in innovative building solutions including bamboo structures, rammed earth 
                  construction, and modern reinforced concrete design.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={18} />
                  <span className="text-gray-700">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" size={18} />
                  <span className="text-gray-700">kishorpoudelkp123@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600" size={18} />
                  <span className="text-gray-700">+977-9863457214</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-blue-600" size={18} />
                  <span className="text-gray-700">Kishor Poudel</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  View Projects
                </button>
                <a 
                  href="/cv-kishor-poudel.pdf" 
                  download
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center space-x-2"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg" 
                  alt="Kishor Poudel - Civil Engineer"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate about creating sustainable and innovative structural solutions that shape the future of construction
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                As a dedicated Civil Engineer with over 5 years of professional experience at Pro Eth Pvt. Ltd., 
                I specialize in structural design and sustainable construction methodologies. My expertise spans 
                traditional reinforced concrete design, modern steel structures, and innovative sustainable materials 
                including bamboo and rammed earth construction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently pursuing my Master's degree while maintaining active involvement in cutting-edge projects, 
                I am committed to advancing the field of structural engineering through research and practical application 
                of sustainable building technologies. My work focuses on creating structures that meet contemporary needs 
                while contributing to environmental sustainability.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Building className="text-blue-600 mb-3 mx-auto" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">50+</h3>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg text-center">
                  <Lightbulb className="text-teal-600 mb-3 mx-auto" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">Sustainable Solutions</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center">
                  <Users className="text-orange-600 mb-3 mx-auto" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Leadership</h3>
                  <p className="text-gray-600 text-sm">Team Management</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Bachelor of Civil Engineering</h4>
                    <p className="text-blue-600 font-medium">Merit Scholarship Recipient</p>
                    <p className="text-gray-600 text-sm">Strong foundation in structural engineering and construction materials</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">Structural Engineer</h4>
                    <p className="text-blue-600 font-medium">Pro Eth Pvt. Ltd. (2019 - Present)</p>
                    <p className="text-gray-600 text-sm">Leading structural design projects and sustainable construction initiatives</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 p-6 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-3">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Structural Analysis', 'Sustainable Design', 'Bamboo Construction', 
                    'Rammed Earth', 'RC Design', 'Steel Structures', 'Project Management', 'Quality Control'
                  ].map((spec, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 mb-8">
              Showcasing innovative structural engineering solutions across various construction methodologies
            </p>

            {/* Project Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'Bamboo', 'Rammed Earth', 'Steel', 'RC'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'Bamboo' ? 'bg-green-100 text-green-800' :
                      project.category === 'Rammed Earth' ? 'bg-yellow-100 text-yellow-800' :
                      project.category === 'Steel' ? 'bg-gray-100 text-gray-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 font-medium text-sm">{project.year}</span>
                    <span className="text-gray-500 text-sm">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <p className="text-lg text-gray-600">
              Proficient in industry-standard software and modern engineering tools
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Software Proficiency</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-900 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Structural Analysis',
                    'Sustainable Design',
                    'Project Management',
                    'Building Codes',
                    '3D Modeling',
                    'Cost Optimization',
                    'Quality Control',
                    'Team Leadership'
                  ].map((expertise, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Code className="text-blue-600" size={18} />
                      <span className="text-gray-700">{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Certifications & Standards</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Award className="text-blue-600" size={16} />
                    <span>Nepal National Building Code (NBC)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="text-blue-600" size={16} />
                    <span>International Building Code (IBC)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="text-blue-600" size={16} />
                    <span>AutoCAD Certified Professional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="text-blue-600" size={16} />
                    <span>Project Management Professional (PMP)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Let's discuss your next structural engineering project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">kishorpoudelkp123@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+977-9863457214</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Linkedin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <p className="text-gray-600">Kishor Poudel</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Professional Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Structural Design & Analysis</li>
                  <li>• Sustainable Construction Consulting</li>
                  <li>• Project Management & Supervision</li>
                  <li>• Building Code Compliance</li>
                  <li>• Construction Quality Control</li>
                  <li>• Feasibility Studies</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <option>Select Project Type</option>
                    <option>Residential Building</option>
                    <option>Commercial Complex</option>
                    <option>Industrial Structure</option>
                    <option>Sustainable Construction</option>
                    <option>Structural Assessment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Kishor Poudel</div>
            <p className="text-gray-400 mb-6">Civil Engineer & MS Candidate</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="/cv-kishor-poudel.pdf" 
                download
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
              <a 
                href="mailto:kishorpoudelkp123@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a 
                href="tel:+977-9863457214"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Kishor Poudel. All rights reserved. | Structural Engineering Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;