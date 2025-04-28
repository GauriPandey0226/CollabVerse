import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Student, Stanford University",
      rating: 5,
      review: "CollabVerse helped me find the perfect team for my senior project. The real-time collaboration tools made remote work feel like we were in the same room, and we ended up winning our university's innovation award!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "David Chen",
      role: "Freelance Developer",
      rating: 4,
      review: "As a freelancer, finding meaningful projects used to be a challenge. CollabVerse's intelligent matching system has connected me with projects that perfectly match my skills and interests. The Kanban board helps me stay organized and deliver on time.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Startup Founder",
      rating: 5,
      review: "CollabVerse has been instrumental in launching my startup. I found incredible talent that I wouldn't have connected with otherwise. The platform made it easy to manage our distributed team and keep everyone aligned on our mission.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];
  
  return (
    <section id="reviews" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base font-semibold text-primary-600 tracking-wide uppercase">Customer Reviews</p>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white font-inter sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Hear from the people who have transformed their ideas into reality with CollabVerse.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.name}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  {review.avatar ? (
                    <img src={review.avatar} alt={review.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-lg font-medium text-gray-500">
                      {review.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{review.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
