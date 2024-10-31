import React, { useState } from "react";
import { DateRange, Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme css file
import { format } from "date-fns";

const DatePicker = ({ isRange = false, onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    onSelect(date);
  };

  const handleSelectRange = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setRange([ranges.selection]);
    onSelect({ startDate, endDate });
  };

  return (
    <div className="relative p-4 bg-white border rounded-lg shadow-md">
      {isRange ? (
        <DateRange
          editableDateInputs={true}
          onChange={handleSelectRange}
          moveRangeOnFirstSelection={false}
          ranges={range}
          className="rounded-md"
        />
      ) : (
        <Calendar
          date={selectedDate}
          onChange={handleSelectDate}
          className="rounded-md"
        />
      )}
      <div className="mt-4 text-center">
        {isRange ? (
          <p>
            Selected Range: {format(range[0].startDate, "MMM d, yyyy")} -{" "}
            {format(range[0].endDate, "MMM d, yyyy")}
          </p>
        ) : (
          <p>Selected Date: {format(selectedDate, "MMM d, yyyy")}</p>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
