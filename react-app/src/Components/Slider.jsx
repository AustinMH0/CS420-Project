import React, { useState } from 'react';

const Slider = () => {
  const [length, setLength] = useState(0);

  const updateLength = (value) => {
    document.getElementById('minLength').textContent = `${value}`;
  };

  return (
    <div id='slider' className='pb-4'>
      {/* <div className='rounded-lg p-6 w-full max-w-md'> */}
        {/* <h2 className='text-2xl font-bold mb-4'>Range Slider</h2> */}
        <div className='mb-2'>
          <label htmlFor='length-range' className='block text-gray-700 font-bold mb-8'>
            {/* Palindrome Length */}
          </label>
          <input
            type='range'
            id='length-range'
            className='w-full accent-green-300'
            min='0'
            max='16'
            value={length}
            onInput={(e) => {
              setLength(e.target.value);
              updateLength(e.target.value);
            }}
          />
        </div>
        <div className='flex justify-between text-gray-700'>
          <span id='minLength'>{length}</span>
          <span id='maxLength'>16</span>
        </div>
      </div>
    // </div>
  );
};

export default Slider;
