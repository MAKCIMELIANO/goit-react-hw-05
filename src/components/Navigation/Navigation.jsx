import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
