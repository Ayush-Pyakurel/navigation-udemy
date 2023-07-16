import { createContext } from 'react';

const navigationContext = createContext({});
const NavigationContextProvider = ({ children }) => {
  return (
    <navigationContext.Provider value={{ name: 'ayush' }}>
      {children}
    </navigationContext.Provider>
  );
};

export default NavigationContextProvider;
export { navigationContext };
