import useNavigationContext from '../hooks/navigationContexHook';

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationContext();

  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
