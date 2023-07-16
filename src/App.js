import Link from './Components/Link';
import useNavigationContext from './hooks/navigationContexHook';

function App() {
  const { navigate } = useNavigationContext();

  return (
    <div className='App'>
      <div>
        <Link to={'/accordion'}>Go to accordion</Link>
        <br />
        <button onClick={() => navigate('/dropdown')}>Go to dropdown</button>
      </div>
    </div>
  );
}

export default App;
