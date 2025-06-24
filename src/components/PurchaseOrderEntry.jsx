import React, { useState } from 'react';

function PurchaseOrderEntry({ onAdd }) {
  const [form, setForm] = useState({
    date: '2025-06-24',
    supplier: '',
    orderNo: '',
    qty: '',
    price: '',
    due: '2025-06-24'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const { date, supplier, orderNo, qty, price, due } = form;
    if (!date || !supplier || !orderNo || !qty || !price || !due) {
      alert("Fill all fields");
      return;
    }
    onAdd({
      ...form,
      qty: parseFloat(qty),
      price: parseFloat(price),
    });
    setForm({
      date: '',
      supplier: '',
      orderNo: '',
      qty: '',
      price: '',
      due: '2025-06-24'
    });
  };

  return (
    <div>
      <input type="date" name="date" placeholder="Order Date" value={form.date} onChange={handleChange} />
      <input name="supplier" placeholder="Supplier" value={form.supplier} onChange={handleChange} />
      <input name="orderNo" placeholder="Our Order No." value={form.orderNo} onChange={handleChange} />
      <input name="qty" placeholder="Qty (m)" value={form.qty} onChange={handleChange} />
      <input name="price" placeholder="£/m" value={form.price} onChange={handleChange} />
      <input type="date" name="due" placeholder="Due Date" value={form.due} onChange={handleChange} />
      <button onClick={submit}>Add Purchase Order</button>
    </div>
  );
}

export default PurchaseOrderEntry;
