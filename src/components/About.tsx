import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Tasin Ahmed</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">Get to know me better</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full bg-cyan-600 rounded-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Tasin Ahmed Working" 
                className="rounded-lg shadow-lg w-full object-cover h-auto max-h-96 z-10 relative"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Who am I?</h3>
            <p className="text-slate-600 mb-6">
              I am Tasin Ahmed, a passionate Machine Learning, AI Algorithm, and Data Science enthusiast specializing in Python programming. My work focuses on analyzing real-world datasets, building AI models, and leveraging intelligent systems for data-driven decision-making.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-slate-100 px-4 py-2 rounded-lg">
                <span className="text-slate-800 font-medium">Full Name:</span> Tasin Ahmed
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg">
                <span className="text-slate-800 font-medium">Email:</span> tasinahmed2508@gmail.com
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg">
                <span className="text-slate-800 font-medium">Specialty:</span> AI & Data Science
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/TasinAhmed2508" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tasin-ahmed-ai-data-science/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tasinahmed2508@gmail.com" className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors">
                <Mail size={20} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
