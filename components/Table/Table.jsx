import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Table = ({ columns, data, rowsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedRows, setSelectedRows] = useState(new Set());

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const toggleRowSelection = (row) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(row)) newSelectedRows.delete(row);
    else newSelectedRows.add(row);
    setSelectedRows(newSelectedRows);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.length / rowsPerPage))
    );
  };

  return (
    <div className="w-full">
      <table className="w-full text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">
              <input
                type="checkbox"
                onChange={(e) => {
                  const allSelected = e.target.checked;
                  const newSelectedRows = allSelected
                    ? new Set(data)
                    : new Set();
                  setSelectedRows(newSelectedRows);
                }}
                checked={selectedRows.size === data.length}
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                className="p-2 cursor-pointer select-none"
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center">
                  {column.label}
                  {sortConfig.key === column.key ? (
                    sortConfig.direction === "asc" ? (
                      <FiChevronUp className="ml-1" />
                    ) : (
                      <FiChevronDown className="ml-1" />
                    )
                  ) : null}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-50 ${
                selectedRows.has(row) ? "bg-blue-100" : ""
              }`}
            >
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.has(row)}
                  onChange={() => toggleRowSelection(row)}
                />
              </td>
              {columns.map((column) => (
                <td key={column.key} className="p-2">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(data.length / rowsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
