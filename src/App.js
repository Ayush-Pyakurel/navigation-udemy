import useNavigationContext from './hooks/navigationContexHook';

function App() {
  const { name } = useNavigationContext();

  return (
    <div className='App'>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
