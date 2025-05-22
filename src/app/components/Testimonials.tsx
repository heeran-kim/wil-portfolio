// components/Testimonials.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: "charles",
      name: "Charles Lee",
      role: "Director at AKA Studio",
      image: "/testimonials/charles.jpg",
      quote:
        "We are really appreciated for all your excellent work you have put into our project so far, especially to see you grow during the internship both on your technical and leadership skill very well. The local setup guide and your plan to fix the deployment issue show how proactive you are. Also, I am happy to give you feedback to help with your reflection on our placement assessment.",
    },
    {
      id: "lavinia",
      name: "Lavinia Adams",
      role: "Director at AKA Studio",
      image: "/testimonials/lavinia.jpg",
      quote: "Placement holder for testimonial",
    },
    {
      id: "drishti",
      name: "Drishti Madaan",
      role: "Intern",
      image: "/testimonials/drishti.jpg",
      quote: "Placement holder for testimonial",
    },
    {
      id: "daniel",
      name: "Daniel Spresian",
      role: "Intern",
      image: "/testimonials/daniel.jpg",
      quote: "Placement holder for testimonial",
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
      <div className="p-1 md:p-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <div className="p-8">
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-700 p-6 rounded-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  zIndex: activeIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-blue-500 flex-shrink-0">
                    <div className="w-full h-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-2xl font-bold text-blue-700 dark:text-blue-300">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>

                  <div className="flex-1">
                    <FaQuoteLeft className="text-blue-500 opacity-20 text-4xl mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                      {`"${testimonial.quote}"`}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-blue-600 dark:bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
