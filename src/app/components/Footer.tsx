// components/Footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Heeran Kim. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Built with Next.js, TailwindCSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
