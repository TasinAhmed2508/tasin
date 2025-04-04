import { useState } from "react";
import { Github, ExternalLink, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  videoDemo?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Iris Dataset Analysis",
    description: "Classification of iris flower species using machine learning models. Used Support Vector Machine (SVM) and Random Forest Classifier to achieve high accuracy.",
    image: "https://images.unsplash.com/photo-1490822180406-880c226c150b",
    category: "ai",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    githubLink: "https://github.com/TasinAhmed2508/iris-classification",
    liveLink: "https://example.com/iris-demo",
    videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Titanic Survival Prediction",
    description: "Predicting passenger survival using ML techniques. Logistic Regression, Decision Tree, and Gradient Boosting models were applied for accurate prediction.",
    image: "https://images.unsplash.com/photo-1568473648251-3a0c3aa56192",
    category: "ai",
    technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    githubLink: "https://github.com/TasinAhmed2508/titanic-survival",
    liveLink: "https://example.com/titanic-demo",
    videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Haberman Cancer Cell Survival Analysis",
    description: "Predicting patient survival post-cancer surgery using advanced machine learning techniques and statistical analysis.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
    category: "datascience",
    technologies: ["Python", "Pandas", "Matplotlib", "KNN", "Naïve Bayes"],
    githubLink: "https://github.com/TasinAhmed2508/haberman-survival",
    liveLink: "https://example.com/haberman-demo",
    videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "AI-Driven Feature Selection",
    description: "An automated system for optimal feature selection in machine learning models using various algorithms and techniques.",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc",
    category: "ai",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Feature Selection Algorithms"],
    githubLink: "https://github.com/TasinAhmed2508/feature-selection",
    liveLink: "https://example.com/feature-demo"
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets, providing insights through charts, graphs, and statistical summaries.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "datascience",
    technologies: ["Python", "Matplotlib", "Seaborn", "Plotly", "Dash"],
    githubLink: "https://github.com/TasinAhmed2508/data-viz-dashboard",
    liveLink: "https://example.com/dashboard-demo"
  },
  {
    id: 6,
    title: "AI Model Optimization Tool",
    description: "A tool for automatically tuning machine learning models for optimal accuracy using Bayesian Optimization and Grid Search approaches.",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d",
    category: "ai",
    technologies: ["Python", "Scikit-learn", "Bayesian Optimization", "Hyperopt"],
    githubLink: "https://github.com/TasinAhmed2508/model-optimization",
    liveLink: "https://example.com/optimization-demo",
    videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter(project => 
    filter === "all" ? true : project.category === filter
  );

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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">Showcasing my latest work and creations</p>
        </motion.div>
        
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="flex justify-center mb-8 bg-transparent">
            <TabsTrigger value="all" onClick={() => setFilter("all")} className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setFilter("ai")} className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              AI & ML
            </TabsTrigger>
            <TabsTrigger value="datascience" onClick={() => setFilter("datascience")} className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              Data Science
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="datascience" className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            <div className="flex space-x-2">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            
            {project.videoDemo && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700">
                    <Play size={16} className="mr-1" /> Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="aspect-video">
                    <iframe
                      src={project.videoDemo}
                      className="w-full h-full"
                      allowFullScreen
                      title={`${project.title} video demo`}
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
              {tech}
            </Badge>
          ))}
        </div>
        
        <Badge variant="outline" className="bg-cyan-50 text-cyan-600 border-cyan-200">
          {project.category === "frontend" ? "Frontend" : 
           project.category === "backend" ? "Backend" : "Full Stack"}
        </Badge>
      </div>
    </div>
  );
};

export default Projects;
