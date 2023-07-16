import useNavigationContext from '../hooks/navigationContexHook';
import classNames from 'classnames';

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigationContext();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a className={classes} onClick={handleClick} href={to}>
        {children}
      </a>
    </div>
  );
};

export default Link;
