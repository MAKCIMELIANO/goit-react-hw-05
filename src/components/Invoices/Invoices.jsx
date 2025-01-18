import { useState, useEffect } from 'react';
import css from './Invoices.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../../assets/db/FakeApi';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <div className={css.container}>
      <aside className={css.aside}>
        {invoices.map(({ id }) => (
          <NavLink
            key={id}
            to={`${id}`}
            className={({ isActive }) =>
              isActive ? `${css.navItem} ${css.active}` : css.navItem
            }
          >
            {id}
          </NavLink>
        ))}
      </aside>
      <Outlet />
    </div>
  );
};

export default Invoices;
