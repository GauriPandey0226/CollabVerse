import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 bg-primary-600">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-white font-inter sm:text-4xl">
          <span className="block">Ready to turn your ideas into reality?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-100">
          Join thousands of creators and contributors who are building the future together on CollabVerse.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link href="/auth">
              <Button variant="secondary" size="lg" className="text-primary-600 bg-white hover:bg-gray-50">
                Get Started Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <Link href="#features">
              <Button variant="outline" size="lg" className="text-white bg-primary-700 hover:bg-primary-800 border-primary-700 hover:border-primary-800">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
