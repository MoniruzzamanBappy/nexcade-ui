import React from "react";
import clsx from "clsx";

const Radio = ({ options, name, selectedValue, onChange, error, success }) => {
  return (
    <div className="mb-4">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center mb-2 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className={clsx(
              "w-5 h-5 text-blue-600 border-gray-300 cursor-pointer focus:ring-2 focus:ring-offset-1",
              {
                "border-red-500 focus:ring-red-500": error,
                "border-green-500 focus:ring-green-500": success,
              }
            )}
          />
          <span className="ml-2 text-gray-700">{option.label}</span>
        </label>
      ))}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
    </div>
  );
};

export default Radio;
