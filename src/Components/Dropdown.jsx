import React, { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

const Dropdown = ({ options }) => {
  const [showOption, setShowOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const option = options.map((item, index) => {
    return (
      <li key={index} onClick={() => handleLabelSelect(index)}>
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
    setSelectedOption(options[index]);
  };

  const selectedValue = selectedOption ? (
    selectedOption.label
  ) : (
    <span>Select</span>
  );

  return (
    <div>
      <h1 onClick={handleClick} className='flex items-center pointer'>
        {selectedValue} <GoChevronDown />
      </h1>

      {showOption && <ul>{option}</ul>}
    </div>
  );
};

export default Dropdown;
