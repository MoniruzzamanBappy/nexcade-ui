import React from "react";
import clsx from "clsx";

const Checkbox = ({ label, checked, onChange, error, success }) => {
  return (
    <div className="flex items-start mb-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={clsx(
          "w-5 h-5 text-blue-600 border-gray-300 rounded cursor-pointer focus:ring-2 focus:ring-offset-1",
          {
            "border-red-500 focus:ring-red-500": error,
            "border-green-500 focus:ring-green-500": success,
          }
        )}
      />
      <div className="ml-2">
        {label && (
          <label className="text-gray-700 cursor-pointer">{label}</label>
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
      </div>
    </div>
  );
};

export default Checkbox;
