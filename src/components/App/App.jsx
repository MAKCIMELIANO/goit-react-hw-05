import css from './App.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Sales from '../../pages/Sales/Sales';
import Invoices from '../Invoices/Invoices';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';
import Customers from '../../pages/Customers/Customers';
import CustomersDetails from '../../pages/CustomersDetails/CustomersDetails';

const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Overview hello</div>} />
            <Route path="analitics" element={<div>Analitics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices list</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomersDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
