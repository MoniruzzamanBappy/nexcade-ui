import React, { useState } from "react";

const Slider = ({
  min = 0,
  max = 100,
  value,
  onChange,
  step = 1,
  range = false,
}) => {
  const [currentValue, setCurrentValue] = useState(value || min);

  const handleChange = (event) => {
    const newValue = range
      ? [Number(event.target.value[0]), Number(event.target.value[1])]
      : Number(event.target.value);
    setCurrentValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-between mb-2 text-gray-700">
        <span>{min}</span>
        <span>
          {range ? `${currentValue[0]} - ${currentValue[1]}` : currentValue}
        </span>
        <span>{max}</span>
      </div>
      {range ? (
        <div className="flex space-x-2">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue[0]}
            onChange={(e) => handleChange([e.target.value, currentValue[1]])}
            className="w-full appearance-none bg-gray-300 h-2 rounded-full"
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue[1]}
            onChange={(e) => handleChange([currentValue[0], e.target.value])}
            className="w-full appearance-none bg-gray-300 h-2 rounded-full"
          />
        </div>
      ) : (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          className="w-full appearance-none bg-gray-300 h-2 rounded-full"
        />
      )}
    </div>
  );
};

export default Slider;
