// components/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools, FaUsers } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiDjango,
  SiPython,
  SiGithub,
  SiTailwindcss,
  SiSquare,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiVercel,
  SiRender,
} from "react-icons/si";
import PDFDocumentsSection from "@/components/PDFDocumentsSection";

const SkillsSection = () => {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <FaCode className="text-4xl text-blue-500" />,
      skills: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
      ],
      description:
        "Implemented responsive, interactive user interfaces for the AI Marketer platform with modern JavaScript frameworks.",
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <FaServer className="text-4xl text-green-500" />,
      skills: [
        { name: "Django", icon: <SiDjango /> },
        { name: "Python", icon: <SiPython /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "REST APIs", icon: null },
        { name: "JWT Authentication", icon: null },
        { name: "HTTP-only Cookies", icon: null },
      ],
      description:
        "Developed secure backend systems for user authentication and data processing with Django REST framework.",
    },
    {
      id: "integrations",
      title: "API Integrations & Tools",
      icon: <FaTools className="text-4xl text-purple-500" />,
      skills: [
        { name: "Git/GitHub", icon: <SiGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
        { name: "ChatGPT API", icon: <SiOpenai /> },
        { name: "Square API", icon: <SiSquare /> },
      ],
      description:
        "Successfully integrated various APIs for AI caption generation and sales data analysis, with effective deployment workflows.",
    },
    {
      id: "professional",
      title: "Professional Skills",
      icon: <FaUsers className="text-4xl text-red-500" />,
      skills: [
        { name: "Technical Leadership", icon: null },
        { name: "Project Management", icon: null },
        { name: "Problem Solving", icon: null },
        { name: "Technical Documentation", icon: null },
        { name: "Team Collaboration", icon: null },
      ],
      description:
        "Led the development team for the AI Marketer platform, managing tasks, mentoring team members, and ensuring project success.",
    },
  ];

  // Animation variants
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
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden"
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    {skill.icon && (
                      <span className="text-gray-700 dark:text-gray-300 text-lg">
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Add Documentation Button for Professional Skills Only */}
              {category.id === "professional" && <PDFDocumentsSection />}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SkillsSection;
