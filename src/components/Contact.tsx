import { useState } from "react";
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I'll get back to you soon.",
        action: (
          <div className="h-8 w-8 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
        ),
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">Let's work together on your next project</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-cyan-100 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Location</h4>
                    <p className="text-slate-600">Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-cyan-100 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Email</h4>
                    <a href="mailto:tasinahmed2508@gmail.com" className="text-slate-600 hover:text-cyan-600 transition-colors">
                      tasinahmed2508@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-cyan-100 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Phone</h4>
                    <a href="tel:+8801521732407" className="text-slate-600 hover:text-cyan-600 transition-colors">
                      +8801521732407
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-slate-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/TasinAhmed2508" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tasin-ahmed-ai-data-science/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tasin Ahmed"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tasinahmed2508@gmail.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project..."
                    required
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-cyan-600 hover:bg-cyan-700 w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
