import React from 'react'
import Accordion from './Accordion';

const FaqItemDescription = ({title, details}) => {
  return (
    <div className='p-4 bg-transparent rounded-lg'>
      <Accordion 
        title= {title}
        details={details}
      />
    </div>
  )
}

export default FaqItemDescription