import React, {useState} from 'react'

const Accordion = ({title, details}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className='py-2'>
            <h2 className='text-[#123524] text-lg'>{title}</h2>
            <button 
                onClick={() => setAccordionOpen(!accordionOpen)} 
                className='flex justify-between w-full'
            >
                <span></span>
                <svg
                    className="fill-[#123524] shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                      }`}
                    />
                </svg>
                
            </button>
            <div className={`${
                accordionOpen
                ? 'mr-12 rounded-lg bg-gradient-to-r from-[#123524] from-5% via-[#03f869] via-15% to-[#123524] to-75% gradient element-to-rotate p-0.5'
                : 'bg-transparent'

            }`}>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-r from-[#379e6ce7] from-40% to-[#123524e7] rounded-lg text-gray-100 py-2 text-sm ${
                    accordionOpen 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                    }`}>
                    <div className='overflow-hidden'>{details}</div>
                </div>
            </div>

        </div>
    );
};

export default Accordion;