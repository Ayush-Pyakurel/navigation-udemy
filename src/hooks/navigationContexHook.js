import { useContext } from 'react';
import { navigationContext } from '../context/navigation';

const useNavigationContext = () => {
  return useContext(navigationContext);
};

export default useNavigationContext;
