import React from "react";

const Card = ({ title, children, className }) => (
  <div className={`border rounded-lg p-4 shadow-md ${className}`}>
    {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
    {children}
  </div>
);

export default Card;
