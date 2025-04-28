import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function PricingSection() {
  const freePlanFeatures = [
    "Create up to 5 projects",
    "Join unlimited projects",
    "Basic task management",
    "Team chat",
    "Basic AI features"
  ];
  
  const proPlanFeatures = [
    "Create up to 10 projects",
    "Join unlimited projects",
    "Advanced AI matchmaking",
    "Smart calendar sync",
    "Priority support",
    "Enhanced analytics"
  ];
  
  return (
    <section id="pricing" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base font-semibold text-primary-600 tracking-wide uppercase">Pricing Plans</p>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white font-inter sm:text-4xl">
            Choose the Perfect Plan for Your Needs
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            We offer flexible options to support both individual contributors and growing teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter">Free</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">Perfect for individuals and small projects</p>
              <p className="mt-8 text-5xl font-extrabold text-gray-900 dark:text-white font-inter">
                ₹0
                <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
              </p>
              
              <ul className="mt-8 space-y-4">
                {freePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/auth">
                  <Button variant="outline" size="lg" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl relative border-2 border-primary-500 hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-bold">
              POPULAR
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter">Pro</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">For serious teams and growing projects</p>
              <p className="mt-8 text-5xl font-extrabold text-gray-900 dark:text-white font-inter">
                ₹199
                <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
              </p>
              
              <ul className="mt-8 space-y-4">
                {proPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/auth">
                  <Button size="lg" className="w-full">Start Pro Plan</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
