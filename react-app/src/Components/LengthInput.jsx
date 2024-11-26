import React, { useState } from 'react';

const LengthInput = () => {
  const [value, setValue] = useState(1);

  const handleInputChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue <= 16 && newValue >= 1) {
      setValue(newValue);
    }
  };

  const incrementValue = () => {
    if (value < 16) setValue(value + 1);
  };

  const decrementValue = () => {
    if (value > 1) setValue(value - 1);
  };

  return (
    <div className="py-2 px-3 inline-block bg-gray-100 border border-green-400 rounded-lg dark:bg-neutral-900 dark:border-neutral-700" data-hs-input-number="">
      <div className="flex items-center gap-x-1.5">
        <button
          type="button"
          onClick={decrementValue}
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          tabIndex="-1"
          aria-label="Decrease"
          disabled={value <= 1}
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
          </svg>
        </button>
        <input
          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
          style={{ MozAppearance: "textfield" }}
          type="number"
          aria-roledescription="Number field"
          value={value}
          onChange={handleInputChange}
          min="1"
          max="16"
        />
        <button
          type="button"
          onClick={incrementValue}
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          tabIndex="-1"
          aria-label="Increase"
          disabled={value >= 16}
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LengthInput;
