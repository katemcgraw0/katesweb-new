import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-950 text-white pt-28 pb-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row md:items-center">
        {/* Email Section */}
        <div className="text-xl  tracking-wide text-center md:text-left relative group">
          <a
            href="mailto:katemcgraw0@gmail.com"
            className="block relative text-white hover:text-white"
          >
            KATEMCGRAW0@GMAIL.COM
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/katherine-mcgraw/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={50} />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/katemcgraw0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={50} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
