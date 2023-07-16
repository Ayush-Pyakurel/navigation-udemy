import useNavigationContext from '../hooks/navigationContexHook';

const Link = ({ to, children }) => {
  const { navigate } = useNavigationContext();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a onClick={handleClick} href={to}>
        {children}
      </a>
    </div>
  );
};

export default Link;
