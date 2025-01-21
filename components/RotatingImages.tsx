import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const images = [
  "/tht0.png",
  "/tht2.png",
  "/tht1.png",
  "/tht3.png",
  "/tht4.png",
];

// Define the structure of a link
interface LinkItem {
  href: string;
  text: string;
}

const RotatingImages = ({ links = [] }: { links: LinkItem[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (index: number) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full max-w-md shadow-lg rounded-md overflow-hidden">
      {/* Image */}
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-full h-auto"
      />

      {/* Hover Overlay */}
      {links.length > 0 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
          <div className="flex space-x-4">
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
        </div>
      )}

      {/* Image Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`h-2 w-2 mx-2 rounded-full ${
              currentImage === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingImages;
