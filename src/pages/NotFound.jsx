import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      This page is not found. Go to{' '}
      <Link to="/" style={{ color: 'blue' }}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
