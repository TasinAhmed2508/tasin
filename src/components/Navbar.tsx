
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToSkills: () => void;
  scrollToContact: () => void;
}

const Navbar = ({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-cyan-600">Portfolio</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={scrollToAbout} className="text-slate-700 hover:text-cyan-600 transition-colors">
            About
          </button>
          <button onClick={scrollToProjects} className="text-slate-700 hover:text-cyan-600 transition-colors">
            Projects
          </button>
          <button onClick={scrollToSkills} className="text-slate-700 hover:text-cyan-600 transition-colors">
            Skills
          </button>
          <Button onClick={scrollToContact} variant="default" className="bg-cyan-600 hover:bg-cyan-700">
            Contact Me
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute w-full`}>
        <div className="flex flex-col p-4 space-y-4">
          <button 
            onClick={() => {
              scrollToAbout();
              toggleMenu();
            }} 
            className="text-slate-700 hover:text-cyan-600 transition-colors py-2 border-b border-slate-100"
          >
            About
          </button>
          <button 
            onClick={() => {
              scrollToProjects();
              toggleMenu();
            }} 
            className="text-slate-700 hover:text-cyan-600 transition-colors py-2 border-b border-slate-100"
          >
            Projects
          </button>
          <button 
            onClick={() => {
              scrollToSkills();
              toggleMenu();
            }} 
            className="text-slate-700 hover:text-cyan-600 transition-colors py-2 border-b border-slate-100"
          >
            Skills
          </button>
          <Button 
            onClick={() => {
              scrollToContact();
              toggleMenu();
            }} 
            variant="default" 
            className="bg-cyan-600 hover:bg-cyan-700 w-full"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
