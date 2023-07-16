import { createContext, useEffect, useState } from 'react';
import Link from '../Components/Link';

const navigationContext = createContext({});
const NavigationContextProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, ' ', to);
    setCurrentPath(to);
  };

  return (
    <navigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </navigationContext.Provider>
  );
};

export default NavigationContextProvider;
export { navigationContext };
