// components/FeaturedProjectSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaInfoCircle,
  FaGlobe,
  FaInfoCircle as FaInfo,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const FeaturedProjectSection = () => {
  const projectDetails = {
    title: "AI Marketer Platform",
    description:
      "As Lead Developer at AKA Studio, I directed the development of an AI-powered marketing tool for small businesses. During this Work Integrated Learning placement, I led a three-person intern team, overseeing the entire development lifecycle—from feature planning and tech stack selection to system architecture, implementation, testing, and deployment. This experience highlights my technical leadership and ability to deliver production-ready software in a professional setting.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Django",
      "Python",
      "ChatGPT API",
      "Square API",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/heeran-kim/ai-marketer-v2",
    liveUrl: "https://ai-marketer-v2.vercel.app/",
    features: "#features",
    videoId: "K_X_rJNFZRU",
    thumbnailImage: "/project-thumbnail.png",
  };

  const hasVideo = projectDetails.videoId && projectDetails.videoId !== "";

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Featured Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Professional Showcase: My Journey and Growth in Work Integrated
            Learning
          </motion.p>
        </div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[400px] w-full overflow-hidden rounded-t-xl">
            {hasVideo ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${projectDetails.videoId}`}
                title="Professional Showcase Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={projectDetails.thumbnailImage}
                  alt="AI Marketer Platform Showcase"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {projectDetails.title}
                  </h1>
                  <p className="text-white/90 text-sm">
                    Professional Industry Placement Project
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              {projectDetails.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {projectDetails.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Live site link with tooltip */}
              {projectDetails.liveUrl && (
                <div className="relative">
                  <motion.a
                    id="demo-button"
                    href={projectDetails.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg"
                    data-tooltip-id="demo-tooltip"
                    data-tooltip-content="Note: The backend server may take 1-2 minutes to wake up if it's been inactive. Please be patient while loading."
                  >
                    <FaGlobe />
                    <span>View Live Demo</span>
                    <FaInfo className="ml-1 text-xs" />
                  </motion.a>
                  <Tooltip
                    id="demo-tooltip"
                    place="top"
                    className="z-50 max-w-xs bg-gray-800 text-white p-2 rounded-md shadow-lg text-sm"
                  />
                </div>
              )}

              <motion.a
                href={projectDetails.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg"
              >
                <FaGithub />
                <span>View Code</span>
              </motion.a>

              <motion.a
                href={projectDetails.features}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg"
              >
                <FaInfoCircle />
                <span>Explore Features</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
