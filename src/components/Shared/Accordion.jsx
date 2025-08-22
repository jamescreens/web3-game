'use client';
import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='border-t border-[#382B3E] py-2 px-2'>
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <p>{title}</p>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </div>
      {isExpanded && (
        <div className="mt-2 text-start">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
