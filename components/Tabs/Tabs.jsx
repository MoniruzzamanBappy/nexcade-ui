import React, { useState } from "react";
import clsx from "clsx";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex border-b border-gray-300 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              "py-2 px-4 focus:outline-none transition-colors duration-200",
              {
                "text-blue-600 border-b-2 border-blue-600":
                  activeTab === tab.id,
                "text-gray-600 hover:text-blue-600": activeTab !== tab.id,
              }
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded-lg bg-gray-50">
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
