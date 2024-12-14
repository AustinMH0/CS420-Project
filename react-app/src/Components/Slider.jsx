import React from 'react';

const Slider = ({ length, setLength }) => {
    const updateLength = (value) => {
        document.getElementById('minLength').textContent = `${value}`;
    };

    return (
        <div id='slider' className='pb-4'>
            <div className='mb-2'>
                <input
                    type='range'
                    id='length-range'
                    className='w-full accent-green-300'
                    min='0'
                    max='16'
                    value={length}
                    onInput={(e) => {
                        setLength(Number(e.target.value)); // Update length in parent state
                        updateLength(e.target.value);
                    }}
                />
            </div>
            <div className='flex justify-between text-gray-700'>
                <span id='minLength'>{length}</span>
                <span id='maxLength'>16</span>
            </div>
        </div>
    );
};

export default Slider;
