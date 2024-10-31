import React from "react";
import { FiX } from "react-icons/fi";
import clsx from "clsx";

const Alert = ({ type = "info", message, onClose }) => {
  const typeClasses = {
    success: "bg-green-100 text-green-800 border border-green-300",
    error: "bg-red-100 text-red-800 border border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    info: "bg-blue-100 text-blue-800 border border-blue-300",
  };

  return (
    <div className={clsx("flex items-start p-4 rounded-md", typeClasses[type])}>
      <div className="flex-grow">{message}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-lg text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <FiX />
        </button>
      )}
    </div>
  );
};

export default Alert;
