import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  scrollToAbout: () => void;
}

const Hero = ({ scrollToAbout }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 pt-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
            Hi, I'm <span className="text-cyan-600">Tasin Ahmed</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-6">
            AI & Data Science Specialist
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            I'm passionate about Machine Learning, AI Algorithms, and Data Science, specializing in Python programming. I analyze real-world datasets and build intelligent systems for data-driven decision-making.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={scrollToAbout} className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6">
              Learn About Me
            </Button>
            <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-6">
              View Resume
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-cyan-200 rounded-full transform -rotate-6 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-cyan-600 rounded-full transform rotate-6 -z-10"></div>
            <img 
              src="/DP.jpeg" 
              alt="Tasin Ahmed" 
              className="relative z-10 rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-cyan-600" size={32} />
      </button>
    </section>
  );
};

export default Hero;
