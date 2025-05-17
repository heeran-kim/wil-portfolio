// app/page.js - Main Homepage
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Navbar from "@/components/Navbar";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import Timeline from "@/components/Timeline";
import SkillsSection from "@/components/SkillsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Change active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "projects",
        "skills",
        "features",
        "timeline",
        "testimonials",
        "contact",
      ];
      const currentPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30" />
          <div className="absolute inset-0 grid-bg grid-bg-animate" />
        </div>

        <div className="container mx-auto px-4 z-10  max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Heeran Kim
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 font-medium dark:text-gray-200">
              Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
              Building innovative applications with modern technologies and
              AI-powered solutions
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                View My Work <MdArrowOutward />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-sm">
            <span className="mb-2">Scroll Down</span>
            <span className="animate-bounce">↓</span>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
                <Image
                  src="/profile_heeran.jpg"
                  alt="Heeran Kim"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                About Me
              </h2>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {`I am currently pursuing a Master of Information Technology at Griffith University, specialising in software development.
                Before this, I worked for five years in Korea as a software engineer, developing embedded software.`}
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {`I am passionate about using technology to build practical tools that genuinely help people.
                That’s why I chose to join AKA Studio for my placement, where I worked as the lead developer on their AI Marketer platform.
                The tool helps small business owners create and manage social media content with AI suggestions, making their daily tasks easier and more efficient.`}
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Career Goals
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Lead Software Architect
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Full-Stack Development Focus
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  AI & Data-Driven Solutions
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Section */}
      <FeaturedProjectSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Skills & Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {`Technical and professional skills developed throughout my placement`}
            </motion.p>
          </div>

          <SkillsSection />
        </div>
      </section>

      {/* Features Showcase */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Features Implemented
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Key features I developed for the AI Marketer platform during my
              placement
            </motion.p>
          </div>

          <FeatureShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Testimonials
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Feedback from colleagues and mentors at AKA Studio
            </motion.p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Learning Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              The transformation from university learning to practical
              application
            </motion.p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {`I'm excited to apply my skills in future roles and would welcome
              the opportunity to discuss how my experience could benefit your
              organisation.`}
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <motion.a
              href="https://github.com/heeran-kim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg w-64"
            >
              <FaGithub className="text-4xl text-blue-400" />
              <span className="text-lg font-medium">GitHub</span>
              <span className="text-gray-400 text-sm">@heerankim</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/heerankim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg w-64"
            >
              <FaLinkedin className="text-4xl text-blue-400" />
              <span className="text-lg font-medium">LinkedIn</span>
              <span className="text-gray-400 text-sm">Heeran Kim</span>
            </motion.a>

            <motion.a
              href="mailto:heeran.kim@griffithuni.edu.au"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg w-64"
            >
              <FaEnvelope className="text-4xl text-blue-400" />
              <span className="text-lg font-medium">Email</span>
              <span className="text-gray-400 text-sm">
                heeran.kim@griffithuni.edu.au
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
