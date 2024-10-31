import React from "react";
import clsx from "clsx";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={clsx(
            "px-3 py-1 rounded-md transition-colors duration-200",
            {
              "bg-blue-500 text-white": i === currentPage,
              "bg-gray-200 text-gray-700 hover:bg-blue-100": i !== currentPage,
            }
          )}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handlePrevious}
        className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <div className="flex space-x-1">{renderPageNumbers()}</div>

      <button
        onClick={handleNext}
        className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
