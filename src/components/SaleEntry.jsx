import React, { useState } from 'react';

function SaleEntry({ sales, setSales }) {
  const addLine = () => {
    setSales([
      ...sales,
      {
        date: '2025-06-24',
        customer: '',
        orderNo: '',
        jobRef: '',
        qty: 1,
        lengthEach: 0,
        price: 0,
        dueDate: '2025-06-24',
        dispatchedQty: 0,
        invoiceNo: '',
        dispatchDate: '2025-06-24',
        method: '',
        castNo: '',
        completed: false
      }
    ]);
  };

  const updateField = (index, field, value) => {
    const updated = [...sales];
    updated[index][field] = field === 'qty' || field === 'lengthEach' || field === 'price'
      ? parseFloat(value) || 0
      : value;


    setSales(updated);
  };

  const toggleCompletion = (index) => {
    const updated = [...sales];
    updated[index].completed = !updated[index].completed;
    setSales(updated);
  };

  const removeLine = (index) => {
    const updated = [...sales];
    updated.splice(index, 1);
    setSales(updated);
  };

  return (
    <div>
      <button onClick={addLine}>➕ Add Sale Line</button>
      {sales.map((s, i) => (
        <div key={i} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h4>📝 Sale Entry</h4>
          <label>Date: <input type="date" value={s.date} onChange={(e) => updateField(i, 'date', e.target.value)} /></label>
          <label> Customer: <input value={s.customer} onChange={(e) => updateField(i, 'customer', e.target.value)} /></label>
          <label> Order No: <input value={s.orderNo} onChange={(e) => updateField(i, 'orderNo', e.target.value)} /></label>
          <label> Job Ref: <input value={s.jobRef} onChange={(e) => updateField(i, 'jobRef', e.target.value)} /></label>
          <label> Qty: <input type="number" value={s.qty} onChange={(e) => updateField(i, 'qty', e.target.value)} /></label>
          <label> Length Each (mm): <input type="number" value={s.lengthEach} onChange={(e) => updateField(i, 'lengthEach', e.target.value)} /></label>
          <label> Price £/m: <input type="number" value={s.price} onChange={(e) => updateField(i, 'price', e.target.value)} /></label>
          <label> Due Date: <input type="date" value={s.dueDate} onChange={(e) => updateField(i, 'dueDate', e.target.value)} /></label>
          <br />
          <button onClick={() => toggleCompletion(i)}>
            {s.completed ? '✏️ Edit Incomplete' : '✔️ Mark Job Complete'}
          </button>

          {s.completed && (
            <>
            <>
              <button onClick={() => updateField(i, 'save', true)}>💾 Save Completion</button>
            </>
            <div style={{ marginTop: '10px', paddingLeft: '10px', borderLeft: '2px solid green' }}>
              <h4>🚚 Dispatch Details</h4>
              <label> Dispatch Qty (m): <strong>{(s.dispatchedQty || 0).toFixed(3)}</strong></label>
              <label> Invoice No: <input value={s.invoiceNo} onChange={(e) => updateField(i, 'invoiceNo', e.target.value)} /></label>
              <label> Dispatch Date: <input type="date" value={s.dispatchDate} onChange={(e) => updateField(i, 'dispatchDate', e.target.value)} /></label>
              <label> Method: <input value={s.method} onChange={(e) => updateField(i, 'method', e.target.value)} /></label>
              <label> Cast No: <input value={s.castNo} onChange={(e) => updateField(i, 'castNo', e.target.value)} /></label>
              </div>
            </>
          )}

          <button onClick={() => removeLine(i)} style={{ color: 'red', marginTop: '10px' }}>❌ Remove</button>
        </div>
      ))}
    </div>
  );
}

export default SaleEntry;