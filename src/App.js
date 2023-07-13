import Button from './Components/Button';
import { GoBell } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log('first');
  };

  return (
    <div className='App'>
      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoBell />
          Payment Successful
        </Button>
      </div>
      <div>
        <Button danger outline>
          Cancel the order
        </Button>
      </div>
      <div>
        <Button warning>See Deals</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary outline rounded>
          Hello
        </Button>
      </div>
    </div>
  );
}

export default App;
