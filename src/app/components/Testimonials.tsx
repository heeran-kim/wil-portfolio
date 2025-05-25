// components/Testimonials.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaChevronDown } from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState(new Set());

  const testimonials = [
    {
      id: "daniel",
      name: "Daniel Spresian",
      role: "Intern",
      image: "/testimonials/daniel.jpg",
      quote: `It has been an absolute pleasure to work with Heeran. She has been very easy going and has constantly given me help and advice from her free will. Heeran has a great mindset/mentality and also has the knowledge and skill to back it up. Heeran never missed a deadline and always offered to help me and Drishti regardless of her schedule. From late weeknights to midday on a Sunday, Heeran would always respond to my messages to either help me or work together with me to solve any problems we had run into. Heeran has been a perfect leader as well, and is someone I look up to and strive to be like one day. She has also been a great friend throughout this internship as daunting as it was for me coming in as an undergraduate. So thankyou Heeran. 
      As for feedback, I honestly cannot think of anything Heeran needs improvement on. All I can suggest is that she keeps doing what she's doing and I believe she will become the perfect developer that any company will want to hire. It's been an honour Heeran.`,
    },
    {
      id: "drishti",
      name: "Drishti Madaan",
      role: "Intern",
      image: "/testimonials/drishti.jpg",
      quote: `Heeran brought strong technical skills and a collaborative spirit to the team. She consistently delivered high-quality work and was quick to offer help when anyone needed support. Her confidence in front-end development and seamless API integration really helped shape the structure and flow of our application. She also played a key role in maintaining consistency across our codebase, which made team collaboration smoother. 
      One example of her initiative was creating a working prototype in the first week, which gave us a clear direction early on. This was impressive and showed leadership. While it set a solid foundation, I personally found it a bit challenging to keep up at times, especially as I was still resolving development environment issues. Starting from scratch together may have given those of us still learning a better grasp of the setup and flow of full stack development. That said, I truly appreciate Heeran's effort to provide guidance and detailed instructions during that time. 
      Overall, Heeran was a key contributor to our success, and I've learned a lot from working alongside her. With her continued growth in mentoring and team onboarding, she'll be a strong asset in any future development team.`,
    },
    {
      id: "charles",
      name: "Charles Lee",
      role: "Director at AKA Studio",
      image: "/testimonials/charles.jpg",
      quote: "Placement holder for testimonial",
    },
    {
      id: "lavinia",
      name: "Lavinia Adams",
      role: "Director at AKA Studio",
      image: "/testimonials/lavinia.jpg",
      quote: "Placement holder for testimonial",
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleExpanded = (testimonialId: string) => {
    const newExpanded = new Set(expandedTestimonials);
    if (newExpanded.has(testimonialId)) {
      newExpanded.delete(testimonialId);
    } else {
      newExpanded.add(testimonialId);
    }
    setExpandedTestimonials(newExpanded);
  };

  const truncateText = (text: string, maxLength = 300) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const isLongTestimonial = (text: string) => text.length > 300;

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
      <div className="p-1 md:p-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <div className="p-8">
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute top-0 left-0 w-full bg-white dark:bg-gray-700 p-6 rounded-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  zIndex: activeIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  position: activeIndex === index ? "relative" : "absolute",
                }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-blue-500 flex-shrink-0">
                    <div className="w-full h-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-2xl font-bold text-blue-700 dark:text-blue-300">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>

                  <div className="flex-1">
                    <FaQuoteLeft className="text-blue-500 opacity-20 text-4xl mb-4" />

                    <div className="text-gray-700 dark:text-gray-300 mb-4 italic">
                      {isLongTestimonial(testimonial.quote) ? (
                        <div>
                          <p className="whitespace-pre-line">
                            &quot;
                            {expandedTestimonials.has(testimonial.id)
                              ? testimonial.quote
                              : truncateText(testimonial.quote)}
                            &quot;
                          </p>
                          <button
                            onClick={() => toggleExpanded(testimonial.id)}
                            className="mt-3 flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                          >
                            {expandedTestimonials.has(testimonial.id)
                              ? "Show less"
                              : "Read more"}
                            <FaChevronDown
                              className={`transition-transform duration-200 ${
                                expandedTestimonials.has(testimonial.id)
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>
                      ) : (
                        <p className="whitespace-pre-line">
                          &quot;{testimonial.quote}&quot;
                        </p>
                      )}
                    </div>

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
