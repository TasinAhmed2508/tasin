import { 
  BrainCircuit, 
  Code, 
  Database, 
  LineChart, 
  PenTool, 
  Terminal 
} from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Language",
    icon: <Code className="w-8 h-8 text-cyan-600" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "R", level: 70 },
      { name: "JavaScript", level: 65 },
      { name: "Java", level: 60 },
    ]
  },
  {
    title: "Machine Learning",
    icon: <BrainCircuit className="w-8 h-8 text-cyan-600" />,
    skills: [
      { name: "Supervised Learning", level: 90 },
      { name: "Unsupervised Learning", level: 85 },
      { name: "Model Training", level: 90 },
      { name: "Model Evaluation", level: 85 },
      { name: "Hyperparameter Tuning", level: 80 },
    ]
  },
  {
    title: "AI Algorithms",
    icon: <Terminal className="w-8 h-8 text-cyan-600" />,
    skills: [
      { name: "Neural Networks", level: 85 },
      { name: "Decision Trees", level: 90 },
      { name: "Regression Models", level: 90 },
      { name: "Random Forests", level: 85 },
      { name: "SVM", level: 80 },
    ]
  },
  {
    title: "Data Science",
    icon: <LineChart className="w-8 h-8 text-cyan-600" />,
    skills: [
      { name: "Data Preprocessing", level: 95 },
      { name: "Feature Engineering", level: 90 },
      { name: "EDA", level: 95 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Data Visualization", level: 90 },
    ]
  },
  {
    title: "Libraries & Frameworks",
    icon: <Database className="w-8 h-8 text-cyan-600" />,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib", level: 85 },
    ]
  },
  {
    title: "AI Agent Integration",
    icon: <PenTool className="w-8 h-8 text-cyan-600" />,
    skills: [
      { name: "Auto-tuning ML Models", level: 85 },
      { name: "Hyperparameter Optimization", level: 80 },
      { name: "AI-driven Code Refactoring", level: 75 },
      { name: "Feature Selection", level: 85 },
      { name: "Model Debugging", level: 80 },
    ]
  }
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">Technologies and skills I've worked with</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cyan-100 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
