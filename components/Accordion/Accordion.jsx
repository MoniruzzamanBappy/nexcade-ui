import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
    >
      <span className="font-semibold text-gray-800">{title}</span>
      {isOpen ? (
        <FiChevronUp className="w-5 h-5 text-gray-500" />
      ) : (
        <FiChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
    {isOpen && (
      <div className="px-6 py-4 bg-gray-50 text-gray-700">{content}</div>
    )}
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
