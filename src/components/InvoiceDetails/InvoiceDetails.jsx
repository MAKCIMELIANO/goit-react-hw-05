import { useParams } from 'react-router-dom';
import css from './InvoiceDetails.module.css';
import { useState, useEffect } from 'react';
import { getInvoiceById } from '../../assets/db/FakeApi';
const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);

  if (!invoice) {
    return null;
  }

  const { id, recipient, account, total, date } = invoice;

  return (
    <div className={css.container}>
      <h2>Recipient: {recipient}</h2>
      <p>Invoice #{id}</p>
      <p>Account: {account}</p>
      <p>Total: {total}</p>
      <p>Date: {new Date(date.created).toLocaleDateString()}</p>
      <p>Due: {new Date(date.due).toLocaleDateString()}</p>
    </div>
  );
};

export default InvoiceDetails;
