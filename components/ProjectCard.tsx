import React, { FC, ReactNode } from "react";
import Link from "next/link";

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
  technologies: ReactNode[]; // Array of ReactNode icons for technologies
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
      <div className="bg-emerald-950 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
        <div className="flex flex-col items-center">

          {imageSrc && (
            <img
              src={imageSrc}
              alt={`${title} Image`}
              className="lg:w-auto lg:h-72 rounded-md md:h-52 md:w-auto"
            />
          )}

          {customComponent}

          <h2 className="font-custom sm:text-2xl text-2xl mb-0 mt-0 p-4 text-white rounded-t-xl">
            {title}
          </h2>


          <div className="flex flex-wrap  space-x-4 text-orange-500 ">
            {technologies.map((icon, index) => (
              <span key={index} className="text-3xl">
                {icon}
              </span>
            ))}
          </div>

          </div>

          <p className="sm:text-sm text-lg mt-4 text-white font-gayathri">
            {description}
          </p>
          <div className="flex flex-col items-start">

          {/* Render technology icons */}
         

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
