import Link from './Components/Link';
import Route from './Components/Route';
import useNavigationContext from './hooks/navigationContexHook';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage.jsx';

function App() {
  const { navigate } = useNavigationContext();

  return (
    <div className='App'>
      <Link to={'/accordion'}>Go to accordion</Link>
      <Link to={'/dropdown'}>Go to dropdown</Link>
      <div>
        <Route path={'/accordion'}>
          <AccordionPage />
        </Route>
        <Route path={'/dropdown'}>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
