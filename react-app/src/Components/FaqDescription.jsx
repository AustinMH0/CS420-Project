import React from 'react'
import FaqItemDescription from './FaqItemDescription';

const FAQWhyDetails = [
    'The purpose of Palindromizer is to give users the ability to randomly generate proper noun palindromes to use as a base for characters in fantasy / fictional worlds, books, scripts and many other types of entertainment fields. As described by Brandon Sanderson in “The Way of Kings”, characters’ names that hold a special role in fantasy worlds are generally palindromic or semi-palindromic in nature.'
  ];
  
  const FAQWhoDetails = [
    'Palindromizer is for writers and idea makers who are struggling creatively to create unique names for people and places who exist within the world they are creating'
  ];
  
  const FAQHowDetails = [
    'Generate names based on user decided length',
    'Maintain organization by creating lists',
    'Share your lists with others by exporting',
    'Sort your names'
  ];

function Details(items) {
    const listItems = items.map(item =>
        <li>{item}</li>
    );
    return <li>{listItems}</li>;
}

const data = [
    {
        title: 'Why did we create Palindromizer?',
        details: Details(FAQWhyDetails)
    },
    {
        title: 'Who is Palindromizer for?',
        details: Details(FAQWhoDetails)
    },
    {
        title: 'What are the tools offered by Palindromizer?',
        details: Details(FAQHowDetails)
    },
]

const FaqDescription = () => {
  return (
    <div id='faqdescription' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 rounded-xl'>
        <h1 className='text-4xl font-bold text-center text-[#123524]'>Frequently Asked Questions</h1>
        {data.map((item, idx) => (
            <FaqItemDescription
            key={idx}  
            title={item.title} 
            details={<ul className='list-disc pl-8'><li>{item.details}</li></ul>}/>
        ))}
    </div>  
  )
}

export default FaqDescription