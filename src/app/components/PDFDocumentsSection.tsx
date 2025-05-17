import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileInvoice,
  FaTimes,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaBook,
  FaProjectDiagram,
  FaFileCode,
  FaFilePdf,
  FaDownload,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";

interface Document {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  category: string;
  pdfPath: string;
}

const PDFDocumentsSection = () => {
  const [showDocsModal, setShowDocsModal] = useState<boolean>(false);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Document catalog with PDF paths based on the uploaded PDFs
  const documents: Document[] = [
    {
      id: "authentication-system",
      title: "Authentication System Documentation",
      icon: <FaFileCode className="text-blue-500" />,
      description:
        "Technical overview of the authentication system architecture, including backend structure, key files, and workflows.",
      category: "Technical",
      pdfPath: "/docs/Technical/Authentication System.pdf",
    },
    {
      id: "middleware-implementation",
      title: "Frontend Authentication Middleware Implementation",
      icon: <FaFileCode className="text-blue-500" />,
      description:
        "Technical documentation on the implementation of Next.js middleware for authentication, explaining benefits over previous approaches.",
      category: "Technical",
      pdfPath: "/docs/Technical/Frontend Authentication Middleware.pdf",
    },
    {
      id: "promotion-suggestion-generation",
      title: "Promotion Suggestion Generation",
      icon: <FaFileCode className="text-indigo-500" />,
      description:
        "Technical documentation on AI-driven promotion suggestion system implementation, including performance analysis algorithms and AI integration.",
      category: "Technical",
      pdfPath: "/docs/Technical/Promotion Suggestion Generation.pdf",
    },
    {
      id: "promotion-tracking",
      title: "Promotion Tracking Implementation",
      icon: <FaChartLine className="text-teal-500" />,
      description:
        "Technical documentation on the implementation of promotion tracking functionality, which measures effectiveness by comparing sales data before and during promotions.",
      category: "Technical",
      pdfPath: "/docs/Technical/Promotion Tracking Implementation.pdf",
    },

    // Planning Documents
    {
      id: "authentication-guide",
      title: "Authentication Implementation Plan",
      icon: <FaProjectDiagram className="text-blue-500" />,
      description:
        "Implementation plan for authentication strategy using JWT tokens with HTTP-only cookies, solving UI flickering issues.",
      category: "Planning",
      pdfPath: "/docs/Planning/Authentication Implementation Plan.pdf",
    },
    {
      id: "post-editing-plan",
      title: "Post Editing Feature Implementation Plan",
      icon: <FaProjectDiagram className="text-purple-500" />,
      description:
        "Detailed plan for implementing post editing functionality by extending the existing post creation flow, maximizing code reuse and maintaining UI consistency.",
      category: "Planning",
      pdfPath: "/docs/Planning/Post Editing Feature Plan.pdf",
    },
    {
      id: "image-analysis-plan",
      title: "Image Analysis Plan",
      icon: <FaProjectDiagram className="text-orange-500" />,
      description:
        "Evaluation of image analysis approaches for AI-powered post creation, comparing implementation options and recommending commercial vision APIs.",
      category: "Planning",
      pdfPath: "/docs/Planning/Image Analysis Plan.pdf",
    },
    {
      id: "promotion-suggestions-plan",
      title: "Data-Driven Promotion Suggestions Plan",
      icon: <FaProjectDiagram className="text-red-500" />,
      description:
        "Implementation plan for the AI-driven promotion suggestions feature, covering sales data collection, processing, analysis, and implementation timeline.",
      category: "Planning",
      pdfPath: "/docs/Planning/Data-Driven Promotion Suggestions Plan.pdf",
    },

    // Product Documents
    {
      id: "promotion-suggestion-lifecycle",
      title: "Promotion Suggestion Lifecycle",
      icon: <FaFileAlt className="text-yellow-500" />,
      description:
        "Documentation of the promotion suggestion feature lifecycle, including triggering, user interaction, archiving, and feedback processing.",
      category: "Product",
      pdfPath: "/docs/Product/Promotion Suggestion Lifecycle.pdf",
    },
    {
      id: "features-v1",
      title: "AI Marketer Features v1",
      icon: <FaFileAlt className="text-gray-500" />,
      description:
        "Initial feature list for the AI Marketer platform with implementation status and cost estimations.",
      category: "Product",
      pdfPath: "/docs/Product/Features v1 (12.Mar).pdf",
    },
    {
      id: "features-v2",
      title: "AI Marketer Features v2",
      icon: <FaFileAlt className="text-gray-500" />,
      description:
        "Updated feature list with developer assignments, priority ordering, and backend API requirements.",
      category: "Product",
      pdfPath: "/docs/Product/Features v2 (16.Mar).pdf",
    },
    {
      id: "features-v3",
      title: "AI Marketer Features v3",
      icon: <FaFileAlt className="text-gray-500" />,
      description:
        "Final feature list with progress tracking, completed dates, and feature status updates.",
      category: "Product",
      pdfPath: "/docs/Product/Features v3 (18.May).pdf",
    },

    // Guides
    {
      id: "local-setup-guide",
      title: "Local Setup Guide",
      icon: <FaBook className="text-green-500" />,
      description:
        "Comprehensive guide for setting up the platform locally, including frontend and backend configuration with Docker.",
      category: "Guide",
      pdfPath: "/docs/Guides/Local Setup Guide.pdf",
    },
    {
      id: "api-debugging-guide",
      title: "API Debugging Guide",
      icon: <FaFileCode className="text-gray-500" />,
      description:
        "Step-by-step guide for debugging API connections between Next.js frontend and Django backend, with Docker troubleshooting instructions.",
      category: "Guide",
      pdfPath: "/docs/Guides/API Debugging Guide.pdf",
    },
    {
      id: "deployment-guide",
      title: "Deployment Guide",
      icon: <FaFileCode className="text-cyan-500" />,
      description:
        "Comprehensive guide for deploying AI Marketer V2, configuring frontend-backend connections, and setting up development environments.",
      category: "Guide",
      pdfPath: "/docs/Guides/Deployment Guide.pdf",
    },

    // Reports
    {
      id: "performance-analysis",
      title: "Performance & Cost Analysis Report",
      icon: <FaChartLine className="text-green-500" />,
      description:
        "Analysis of AI caption generation performance across different input methods, with cost comparisons and recommendations.",
      category: "Report",
      pdfPath: "/docs/Reports/Performance and Cost Analysis Report.pdf",
    },

    // Development Journal
    {
      id: "development-journal",
      title: "Development Journal",
      icon: <FaBook className="text-purple-500" />,
      description:
        "Week-by-week journal documenting the development process, leadership activities, and technical challenges throughout the project.",
      category: "Journal",
      pdfPath: "/docs/Journal/Development Journal.pdf",
    },
  ];

  // Filter documents by category
  const filteredDocuments =
    activeCategory === "All"
      ? documents
      : documents.filter((doc) => doc.category === activeCategory);

  // Handle document selection
  const handleViewDocument = (doc: Document) => {
    setSelectedDoc(doc);
  };

  // Handle back button in document view
  const handleBackToList = () => {
    setSelectedDoc(null);
  };

  // Close modal and reset states
  const handleCloseModal = () => {
    setShowDocsModal(false);
    setSelectedDoc(null);
  };

  const openDocsModal = () => {
    setShowDocsModal(true);
  };

  return (
    <>
      {/* Button to open documents modal */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={openDocsModal}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <FaFileInvoice />
          <span>View Documentation</span>
        </button>
      </div>

      {/* Documentation Modal */}
      {showDocsModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="p-6">
              <AnimatePresence mode="wait">
                {!selectedDoc ? (
                  // Document List View
                  <motion.div
                    key="document-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Professional Skills Documentation
                      </h3>
                      <button
                        onClick={handleCloseModal}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>

                    {/* Document Categories */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <button
                        onClick={() => setActiveCategory("All")}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          activeCategory === "All"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                      >
                        All Categories
                      </button>
                      {[...new Set(documents.map((doc) => doc.category))].map(
                        (category) => (
                          <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                              activeCategory === category
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            }`}
                          >
                            {category}
                          </button>
                        )
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Document Preview Cards */}
                      {filteredDocuments.map((doc) => (
                        <div
                          key={doc.id}
                          className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden cursor-pointer hover:border-red-300 dark:hover:border-red-500 transition-colors"
                          onClick={() => handleViewDocument(doc)}
                        >
                          <div className="bg-gray-100 dark:bg-gray-700 p-3">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                {doc.title}{" "}
                                <FaFilePdf className="text-red-500 text-sm" />
                              </h4>
                              {doc.icon}
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex space-x-2 mb-3">
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-600 dark:text-gray-300">
                                {doc.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                              {doc.description}
                            </p>
                            <div className="text-blue-600 dark:text-blue-400 text-sm flex items-center gap-1 hover:underline">
                              View Document <FaExternalLinkAlt size={12} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  // PDF Document Viewer
                  <motion.div
                    key="document-viewer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleBackToList}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <FaArrowLeft size={18} />
                        </button>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          {selectedDoc.title}
                          <FaFilePdf className="text-red-500 text-sm" />
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={selectedDoc.pdfPath}
                          download
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaDownload size={16} />
                          <span>Download</span>
                        </a>
                        <button
                          onClick={handleCloseModal}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <FaTimes size={24} />
                        </button>
                      </div>
                    </div>

                    {/* PDF Viewer */}
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-[70vh] flex items-center justify-center">
                      <iframe
                        src={`${selectedDoc.pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full border-0 rounded"
                        title={selectedDoc.title}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PDFDocumentsSection;
