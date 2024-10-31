import React, { useState } from "react";

const Tooltip = ({ children, message, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div
          className={`absolute ${positionClasses[position]} px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg z-10`}
        >
          {message}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
