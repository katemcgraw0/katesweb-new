// IconWithText.tsx
import React, { FC, useState } from "react";
import {ReactTyped} from "react-typed";

interface IconWithTextProps {
  src: string; // The path to the image
  alt: string; // Alt text for the image
  text: string; // The text to display
}

const IconWithText: FC<IconWithTextProps> = ({ src, alt, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="icon-wrapper flex items-center py-4"

    >
      <img
        onMouseEnter={() => setIsHovered(true)}
        src={src}
        alt={alt}
        className="icon rounded-full w-16"
      />
      {isHovered && (
        <ReactTyped
          className="typing-text ml-2 custom-typed"
          strings={[text]}
          typeSpeed={50}
          showCursor
          cursorChar="|"
        />
      )}
    </div>
  );
};

export default IconWithText;
