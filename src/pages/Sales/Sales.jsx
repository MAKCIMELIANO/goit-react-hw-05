import css from './Sales.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { href: 'analitics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const Sales = () => {
  return (
    <main className={css.main}>
      <header className={css.header}>
        <ul className={css.navList}>
          {navItems.map(({ href, text }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                isActive ? `${css.navItem} ${css.active}` : css.navItem
              }
            >
              {text}
            </NavLink>
          ))}
        </ul>
      </header>
      <Outlet />
    </main>
  );
};

export default Sales;
