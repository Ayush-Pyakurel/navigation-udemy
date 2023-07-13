import React, { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

const Dropdown = ({ options, onSelect, selectedOption }) => {
  const [showOption, setShowOption] = useState(false);

  const option = options.map((item, index) => {
    return (
      <li key={item.value} onClick={() => handleLabelSelect(index)}>
        {item.label}
      </li>
    );
  });

  // event handler
  const handleClick = () => {
    setShowOption((prev) => !prev);
  };

  // event handler
  const handleLabelSelect = (index) => {
    setShowOption(false);
    // prop from app
    onSelect(index);
  };

  return (
    <div>
      <h1 onClick={handleClick} className='flex items-center pointer'>
        {selectedOption?.label || 'Select...'} <GoChevronDown />
      </h1>

      {showOption && <ul>{option}</ul>}
    </div>
  );
};

export default Dropdown;
