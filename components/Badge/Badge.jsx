import React from "react";
import clsx from "clsx";

const Badge = ({ text, color = "blue", size = "md" }) => {
  const colorClasses = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-500 text-white",
    gray: "bg-gray-500 text-white",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center font-semibold rounded-full",
        colorClasses[color],
        sizeClasses[size]
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
