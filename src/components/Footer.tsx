import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToSkills: () => void;
  scrollToContact: () => void;
}

const Footer = ({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact }: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Tasin Ahmed</h3>
            <p className="text-slate-400 mb-4">
              A passionate Machine Learning, AI Algorithm, and Data Science enthusiast specializing in Python programming. I focus on analyzing datasets and building intelligent systems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/TasinAhmed2508" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tasin-ahmed-ai-data-science/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToAbout}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToProjects}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToSkills}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToContact}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-slate-400">
                  Dhaka, Bangladesh
                </p>
              </li>
              <li>
                <a 
                  href="mailto:tasinahmed2508@gmail.com" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  tasinahmed2508@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+8801521732407" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +8801521732407
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tasin Ahmed. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
