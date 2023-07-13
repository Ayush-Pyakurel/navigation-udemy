import Accordion from './Components/Accordion';

function App() {
  const items = [
    {
      label: 'What is React?',
      content:
        'React is JavaScript library to create a interactive web application',
    },
    {
      label: 'What is State in react?',
      content:
        'The state is a built-in React object that is used to contain data or information about the component.',
    },
    {
      label: 'What is Props in React?',
      content:
        'Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments.',
    },
  ];

  return (
    <div className='App'>
      <Accordion items={items} />
    </div>
  );
}

export default App;
