import React, { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

const Dropdown = ({ options, onChange, value }) => {
  const [showOption, setShowOption] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!divRef.current) {
        return;
      }

      if (!divRef.current.contains(e.target)) {
        setShowOption(false);
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  const option = options.map((item, index) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1 '
        key={item.value}
        onClick={() => handleLabelSelect(index)}
      >
        {item.label}
      </div>
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
    onChange(index);
  };

  return (
    <div className='w-48 relative' ref={divRef}>
      <Panel
        onClick={handleClick}
        className='flex justify-between items-center cursor-pointer'
      >
        {value?.label || 'Select...'} <GoChevronDown />
      </Panel>

      {showOption && <Panel className='absolute top-full'>{option}</Panel>}
    </div>
  );
};

export default Dropdown;
