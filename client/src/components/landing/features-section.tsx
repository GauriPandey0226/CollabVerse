import { FolderPlus, Search, MessageSquare, ClipboardList, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: <FolderPlus className="h-6 w-6" />,
      title: "Create Projects",
      description: "Easily create and manage your project ideas with comprehensive project profiles that attract the right contributors.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Find Projects",
      description: "Discover exciting projects that match your skills and interests through our advanced search and recommendation system.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Team Chat",
      description: "Communicate seamlessly with your team through real-time messaging, file sharing, and threaded conversations.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Kanban Task Board",
      description: "Organize and track project tasks with our visual Kanban board, featuring drag-and-drop functionality and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Scheduling",
      description: "Plan and coordinate team events, meetings, and milestones with our intelligent calendar that adapts to everyone's time zones.",
      image: "https://images.unsplash.com/photo-1606327054269-71235361f592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proof of Work Badges",
      description: "Earn recognition for your contributions and showcase your accomplishments with verifiable badges and achievements.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base font-semibold text-primary-600 tracking-wide uppercase">Key Features</p>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white font-inter sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            CollabVerse provides all the tools you need to bring your projects from concept to completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 % 0.3 }}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-md flex items-center justify-center bg-primary-100 dark:bg-primary-900">
                    <div className="text-primary-600 dark:text-primary-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900 dark:text-white font-inter">{feature.title}</h3>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6">
                  <img 
                    src={feature.image} 
                    alt={`${feature.title} interface`} 
                    className="h-60 w-full object-cover rounded-md" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
