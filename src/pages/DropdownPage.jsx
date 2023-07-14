import React, { useState } from 'react';
import Dropdown from '../Components/Dropdown';

const DropdownPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (index) => {
    setSelectedOption(dropdownOption[index]);
  };

  const dropdownOption = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Hotpink', value: 'hotpink' },
  ];

  return (
    <div>
      {' '}
      <Dropdown
        options={dropdownOption}
        value={selectedOption}
        onChange={handleSelection}
      />
    </div>
  );
};

export default DropdownPage;
