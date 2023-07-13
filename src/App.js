import Dropdown from './Components/Dropdown';

function App() {
  const dropdownOption = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Hotpink', value: 'hotpink' },
  ];

  return (
    <div className='App'>
      <Dropdown options={dropdownOption} />
    </div>
  );
}

export default App;
