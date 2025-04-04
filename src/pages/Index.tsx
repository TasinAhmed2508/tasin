
import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar 
        scrollToAbout={() => scrollToSection(aboutRef)} 
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <Hero scrollToAbout={() => scrollToSection(aboutRef)} />
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      <Footer 
        scrollToAbout={() => scrollToSection(aboutRef)} 
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <ScrollToTop />
    </div>
  );
};

export default Index;
