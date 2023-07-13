import { useState } from 'react';
import Dropdown from './Components/Dropdown';

function App() {
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
    <div className='App'>
      <Dropdown
        options={dropdownOption}
        selectedOption={selectedOption}
        onSelect={handleSelection}
      />
    </div>
  );
}

export default App;
