import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedContentIndex, setExpandedContentIndex] = useState();

  // function to update the 'expandedContentIndex' state
  const handleAccordionLabelClick = (index) => {
    setExpandedContentIndex(index);
    if (expandedContentIndex === index) {
      setExpandedContentIndex();
    }
  };

  const accordionContent = items?.map((item, index) => {
    const isExpanded = index === expandedContentIndex;

    const accordionIcon = (
      <span className='text-2xl'>
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={index}>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => handleAccordionLabelClick(index)}
          className='flex justify-between p-3 bg-gray-50 border-b items-center'
        >
          {item.label}
          {accordionIcon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });

  return <div className='border-x border-t rounded'>{accordionContent}</div>;
};

export default Accordion;
