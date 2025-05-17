// components/FeatureShowcase.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserShield,
  FaStore,
  FaCalendarAlt,
  FaBullhorn,
} from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "auth",
      title: "User Authentication",
      description:
        "Secure authentication system using JWT tokens and HTTP-only cookies, preventing common web vulnerabilities.",
      icon: <FaUserShield className="text-4xl text-blue-500" />,
      youtubeId: "GusA877a2lg",
      technologies: ["Next.js", "Django", "JWT", "Secure Cookies"],
      details: [
        "Traditional email & password authentication",
        "JWT token management with automatic refresh",
        "HTTP-only cookies for enhanced security",
        "Cross-Site Request Forgery (CSRF) protection",
      ],
      period: "March 17-23, 2024",
    },
    {
      id: "business",
      title: "Business Settings Management",
      description:
        "Comprehensive business profile management system with integration to Square for sales data analysis.",
      icon: <FaStore className="text-4xl text-green-500" />,
      youtubeId: "SKTrhDGoo8E",
      technologies: ["React", "TypeScript", "Square API", "RESTful API"],
      details: [
        "Business profile information management",
        "Social media platform integration",
        "Square account connection for sales data",
        "Menu items management for AI content generation",
        "Business dashboard with platform status overview",
      ],
      period: "March 17-30, 2024",
    },
    {
      id: "post",
      title: "Post Management",
      description:
        "Intuitive interface for creating, scheduling, and managing social media posts across multiple platforms.",
      icon: <FaCalendarAlt className="text-4xl text-purple-500" />,
      youtubeId: "klPDrns2EWE",
      technologies: ["React", "Next.js", "Social Media APIs"],
      details: [
        "Scheduled posts management with flexible editing",
        "Cross-platform post scheduling",
        "Post status monitoring",
        "Comment interaction tracking and engagement",
      ],
      period: "March 24 - April 6, 2024",
    },
    {
      id: "ai-caption",
      title: "AI Caption Generation",
      description:
        "Smart caption generation using ChatGPT API, tailored for business context and marketing goals.",
      icon: <RiAiGenerate className="text-4xl text-orange-500" />,
      youtubeId: "feature4-youtube-id",
      technologies: ["ChatGPT API", "React", "Prompt Engineering"],
      details: [
        "Context-aware caption generation using business information",
        "Custom prompt creation for specific marketing goals",
        "Tailored content based on menu items and business category",
        "Multiple caption generation with variations",
      ],
      period: "April 7-13, 2024",
    },
    {
      id: "data-analysis",
      title: "Sales Data & Promotion Management",
      description:
        "Comprehensive system for sales data analysis and AI-driven promotion management to optimise marketing strategies.",
      icon: <FaBullhorn className="text-4xl text-red-500" />,
      youtubeId: "ZLu7aGj3Kxw",
      technologies: [
        "Square API",
        "Data Visualization",
        "Django",
        "Python",
        "React",
        "AI Recommendations",
      ],
      details: [
        "Square sales data retrieval and processing",
        "Product performance analysis with trend visualization",
        "AI-based suggestions for best/low-selling products",
        "Marketing campaign recommendations given sales data",
        "Promotion tracking with sales impact measurement",
        "Seamless promotion to post creation workflow",
      ],
      period: "March 24 - May 11, 2024",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Feature Navigation */}
      <div className="lg:w-1/3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Key Features
          </h3>
          <nav>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeFeature === index
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <div
                      className={`transition-colors ${
                        activeFeature === index
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {feature.period}
                      </p>
                    </div>
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Feature Details */}
      <div className="lg:w-2/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full"
          >
            {/* Feature Video - Direct YouTube Embed */}
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${features[activeFeature].youtubeId}?modestbranding=1&rel=0`}
                title={`${features[activeFeature].title} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Feature Content */}
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {features[activeFeature].description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {features[activeFeature].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Implementation Details
                </h3>
                <ul className="space-y-2">
                  {features[activeFeature].details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeatureShowcase;
