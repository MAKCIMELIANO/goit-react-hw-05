import { NavLink } from 'react-router-dom';
import {
  BsStack,
  BsWalletFill,
  BsBriefcaseFill,
  BsChatLeftTextFill,
  BsPersonLinesFill,
} from 'react-icons/bs';

import css from './AppBar.module.css';

const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  { href: 'sales', text: 'Sales', icon: BsWalletFill },
  { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];
const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            <Icon /> {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default AppBar;
