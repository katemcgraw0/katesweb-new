import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

// Define the structure of each link in the project
interface LinkItem {
  href: string;
  text: string;
}

// Define the props for the ProjectCard component
interface ProjectCardProps {
  imageSrc?: string; // Optional image source
  title: string; // Project title
  description: string; // Project description
  technologies: { icon: ReactNode; label: string; link: string }[]; // Updated to include label and link
  links?: LinkItem[]; // Optional array of links
  customComponent?: ReactNode; // Optional custom React component
}

const ProjectCard: FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  technologies,
  links = [], // Default to empty array if not provided
  customComponent = null, // Default to null if not provided
}) => {
  return (
    <div className="flex flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full">
      <div className="bg-emerald-950 rounded-lg p-8 flex flex-grow flex-col border border-transparent transform transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
        <div className="flex flex-col items-center">
          {/* Image Container */}
          {imageSrc && (
            <div className="relative w-full max-w-md shadow-lg rounded-md overflow-hidden">
              {/* Image */}
              <img
                src={imageSrc}
                alt={`${title} Image`}
                className="w-full h-auto"
              />
              {/* Hover Overlay */}
              {links.length > 0 && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      passHref
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity h-full ${
                          index === 0
                            ? "rounded-l-md"
                            : links.length === 2 && "rounded-r-md"
                        }`}
                      >
                        {link.text.toLowerCase() === "github" ? (
                          <FaGithub className="text-white text-3xl hover:text-orange-500 transition" />
                        ) : (
                          <LuSquareArrowOutUpRight className="text-white text-3xl hover:text-orange-500 transition"/>
                        )}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {customComponent}

          <h2 className="font-custom sm:text-2xl text-2xl text-center mb-4 text-white rounded-t-xl">
            {title}
          </h2>
          <div className="flex flex-wrap space-x-4 text-orange-500">
            {technologies.map(({ icon, label, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                aria-label={label}
              >
                <span className="text-3xl">{icon}</span>
                {/* Tooltip */}
                <span className="absolute left-1/2 transform -translate-x-1/2 bg-green-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                  {label}
                </span>
              </a>
            ))}
          </div>
          <p className="sm:text-sm text-lg mt-2 text-center text-white font-gayathri">
            {description}
          </p>


        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
