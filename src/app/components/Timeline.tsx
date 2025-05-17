// components/Timeline.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGraduationCap,
  FaChartLine,
  FaMobileAlt,
  FaHome,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiGithub,
} from "react-icons/si";

const Timeline = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const timelineItems = [
    {
      id: "university",
      icon: <FaGraduationCap className="text-2xl text-blue-500" />,
      title: "University Learning",
      date: "2023",
      description:
        "Theoretical foundations and IT systems development at Griffith University",
      details: [
        "Python programming fundamentals",
        "IT Service Management principles",
        "System development methodologies",
        "UML and software design diagrams",
        "Database design fundamentals",
        "Project management frameworks",
      ],
      repoUrl: null,
    },
    {
      id: "easystay",
      icon: <FaHome className="text-2xl text-yellow-500" />,
      title: "EasyStay - Rental Review Platform",
      date: "Early 2024",
      description:
        "Lightweight rental review platform built with Laravel, featuring basic CRUD functionality with raw SQL queries",
      details: [
        "Implemented using raw SQL queries without Eloquent ORM",
        "Built without controllers or models (routes in web.php)",
        "Custom input validation without Laravel validation",
        "Blade templating for front-end rendering",
        "Sorting & filtering functionality for listings",
        "Session-based user memory and fake review detection",
      ],
      techStack: ["Laravel", "SQLite", "Bootstrap 5", "Blade Templates"],
      repoUrl: "https://github.com/heeran-kim/easystay-web",
    },
    {
      id: "classmate",
      icon: <FaUsers className="text-2xl text-green-500" />,
      tech: <SiLaravel className="ml-2 text-xl" />,
      title: "ClassMate - Peer Review Platform",
      date: "Mid 2024",
      description:
        "Peer review platform for students and teachers with role-based authentication and structured evaluations",
      details: [
        "Role-based access control for students and teachers",
        "Bulk enrollment system with temporary passwords",
        "Course & assessment management for teachers",
        "Structured peer reviews with rating system",
        "Teacher grading based on peer evaluations",
        "Leaderboard for ranking highly-rated reviews",
      ],
      techStack: ["Laravel (MVC)", "MySQL", "Bootstrap", "Blade Templates"],
      repoUrl: "https://github.com/heeran-kim/classmate-web",
    },
    {
      id: "drugspeak",
      icon: <FaMobileAlt className="text-2xl text-purple-500" />,
      tech: <SiReact className="ml-2 text-xl" />,
      title: "Drug Speak - Medication Pronunciation App",
      date: "Early 2025",
      description:
        "React Native mobile app helping pharmacy students learn drug name pronunciations through interactive audio features",
      details: [
        "Browse medications by therapeutic categories",
        "Listen to correct pronunciations with adjustable speeds",
        "Record and evaluate pronunciation accuracy",
        "Track learning progress with personalised lists",
        "User profiles and community rankings",
        "Redux Toolkit for state management",
      ],
      techStack: ["React Native", "Redux Toolkit", "React Navigation", "Axios"],
      repoUrl: "https://github.com/heeran-kim/drug-speak-app",
    },
    {
      id: "aimarketer",
      icon: <FaRobot className="text-2xl text-red-500" />,
      tech: (
        <>
          <SiNextdotjs className="ml-2 text-xl" />
          <SiDjango className="ml-1 text-xl" />
        </>
      ),
      title: "AI Marketer - Marketing Support Platform",
      date: "March-May 2025",
      description:
        "Full-stack industry placement project as Lead Developer at AKA Studio",
      details: [
        "User authentication with JWT tokens and HTTP-only cookies",
        "Business settings management with Square API integration",
        "AI-powered caption generation using ChatGPT API",
        "Post creation and scheduling for multiple platforms",
        "Sales data analysis for promotion insights",
        "Team-based collaborative development with code reviews",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Django",
        "PostgreSQL",
        "ChatGPT API",
        "Square API",
      ],
    repoUrl: "https://github.com/heeran-kim/ai-marketer-v2",
    },
    {
      id: "future",
      icon: <FaChartLine className="text-2xl text-blue-600" />,
      title: "Future Growth",
      date: "Post-Graduation",
      description:
        "Applying academic learning and industry experience to advance career as a Software Architect",
      details: [
        "System architecture design and implementation",
        "Building scalable production applications",
        "Advanced AI integration in business solutions",
        "Technical leadership and team management",
        "Continuous learning of emerging technologies",
        "Contributing to open-source projects",
      ],
      repoUrl: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="relative pl-8 md:pl-0">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900" />

        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className={`relative md:flex mb-12 md:mb-16 items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute md:static left-[-33px] md:left-auto md:mx-8 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center z-10">
                {item.icon}
              </div>
            </div>

            {/* Timeline content */}
            <div
              className={`md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-transform cursor-pointer ${
                expandedItem === item.id ? "scale-105" : "hover:scale-[1.02]"
              }`}
              onClick={() =>
                setExpandedItem(expandedItem === item.id ? null : item.id)
              }
            >
              <div
                className={`${index % 2 === 0 ? "md:text-right" : "text-left"}`}
              >
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                  {item.date}
                </span>
                <div className="flex items-center mb-2 gap-1 text-gray-900 dark:text-white">
                  <h3
                    className={`text-xl font-bold ${
                      index % 2 === 0 ? "md:ml-auto order-1" : "order-1"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.tech && (
                    <div
                      className={`flex ${
                        index % 2 === 0 ? "md:mr-auto order-0" : "order-2"
                      }`}
                    >
                      {item.tech}
                    </div>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {item.description}
                </p>

                {/* Expanded details */}
                {expandedItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <h4
                      className={`font-semibold mb-2 text-gray-900 dark:text-white ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      Key Features:
                    </h4>
                    <ul
                      className={`space-y-1 text-gray-700 dark:text-gray-300 ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      {item.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className={`flex items-start ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          {index % 2 === 0 ? (
                            // Right-aligned items (even index) - text comes first, then dot
                            <>
                              <span className="md:text-right">{detail}</span>
                              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 ml-2 shrink-0"></span>
                            </>
                          ) : (
                            // Left-aligned items (odd index) - dot comes first, then text
                            <>
                              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 shrink-0"></span>
                              <span>{detail}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>

                    {item.techStack && (
                      <div
                        className={`mt-4 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          Tech Stack:
                        </h4>
                        <div
                          className={`flex flex-wrap gap-2 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          {item.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.repoUrl && (
                      <div
                        className={`mt-4 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        <a
                          href={item.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex items-center gap-1 text-blue-600 text-sm dark:text-blue-400 hover:underline w-fit ${
                            index % 2 === 0 ? "md:ml-auto" : ""
                          }`}
                        >
                          <SiGithub />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}

                <button
                  className={`text-blue-600 dark:text-blue-400 text-sm font-medium mt-3 flex items-center gap-1 ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedItem(expandedItem === item.id ? null : item.id);
                  }}
                >
                  {index % 2 === 0 ? (
                    // Right-aligned button
                    <div className="flex items-center md:ml-auto">
                      {expandedItem === item.id ? "Show less" : "Learn more"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          expandedItem === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  ) : (
                    // Left-aligned button
                    <>
                      {expandedItem === item.id ? "Show less" : "Learn more"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          expandedItem === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
