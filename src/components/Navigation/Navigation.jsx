import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
