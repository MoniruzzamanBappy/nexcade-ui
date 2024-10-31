import React from "react";
import clsx from "clsx";

const Spinner = ({ size = "md", color = "text-blue-500" }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={clsx(
        "inline-block rounded-full border-t-transparent animate-spin",
        sizeClasses[size],
        color
      )}
      role="status"
      aria-label="Loading"
    />
  );
};

export default Spinner;
