import { NavLink, Outlet } from 'react-router-dom';
import { buildLinkClass } from '../../assets/utils/BuildLinkClass';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink to="/" className={isActive => buildLinkClass(isActive, css)}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={isActive => buildLinkClass(isActive, css)}
          >
            About
          </NavLink>
          <NavLink
            to="/posts"
            className={isActive => buildLinkClass(isActive, css)}
          >
            Blog
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2025 © All rights reserved</footer>
    </>
  );
};

export default Layout;
