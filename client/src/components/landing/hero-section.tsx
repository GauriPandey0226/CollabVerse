import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50/20 to-emerald-50/20 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-8 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-inter leading-tight mb-6">
              Turn Ideas into Reality
              <span className="text-primary-600 block mt-2">Build Projects, Build Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              CollabVerse brings together creators and contributors to collaborate on innovative projects in real-time. 
              Find your team, build your future.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/auth">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800&auto=format&fit=crop" 
              alt="Team collaborating on a project" 
              className="rounded-lg shadow-xl w-full object-cover h-96 md:h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800 bg-gray-300 flex items-center justify-center overflow-hidden">
                    <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800 bg-gray-300 flex items-center justify-center overflow-hidden">
                    <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800 bg-gray-300 flex items-center justify-center overflow-hidden">
                    <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">+28 joined this week</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
