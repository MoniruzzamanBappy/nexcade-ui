import React from "react";
import clsx from "clsx";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  success,
  placeholder,
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          "w-full px-3 py-2 border rounded-md outline-none transition-colors duration-200",
          "focus:ring-2 focus:ring-blue-500",
          {
            "border-gray-300": !error && !success,
            "border-red-500 focus:ring-red-500": error,
            "border-green-500 focus:ring-green-500": success,
          }
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
    </div>
  );
};

export default Input;
