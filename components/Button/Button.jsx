import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "primary", onClick, className }) => (
  <button
    onClick={onClick}
    className={clsx(
      "px-4 py-2 rounded-md font-bold transition duration-300",
      {
        "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
        "bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
      },
      className
    )}
  >
    {children}
  </button>
);

export default Button;
