import React, { useState } from 'react';
import PurchaseOrderEntry from './PurchaseOrderEntry';
import SaleEntry from './SaleEntry';
import OffcutEditor from './OffcutEditor';

function StockView({ pipeKey, pipe, savePipe, goBack }) {
  const [editing, setEditing] = useState(false);
  const [localPipe, setLocalPipe] = useState(pipe || { purchases: [], sales: [], offcuts: [] });

  const saveChanges = () => {
    savePipe(localPipe);
    setEditing(false);
  };

  const updateField = (field, value) => {
    setLocalPipe(prev => ({ ...prev, [field]: value }));
  };

  const calcStock = () => {
    const totalIn = localPipe.purchases?.reduce(
      (sum, p) => sum + (p.receivedQty || 0), 0
    );
    const totalOut = localPipe.sales?.reduce(
      (sum, s) => sum + (s.dispatchedQty || 0), 0
    );
    return (totalIn - totalOut).toFixed(3);
  };

  const lastPrice = localPipe.purchases?.length
    ? localPipe.purchases[localPipe.purchases.length - 1].price
    : 0;

  return (
    <div>
      <button onClick={goBack}>🔙 Back</button>
      <h2>{pipeKey}</h2>
      <p>📦 Stock (excluding offcuts): {calcStock()} m</p>
      <p>💷 Last Price Paid: £{lastPrice}/m</p>
      <p>🧮 Stock Value: £{(calcStock() * lastPrice).toFixed(2)}</p>

      <hr />
      <h3>🔴 Purchases</h3>
      <PurchaseOrderEntry
        purchases={localPipe.purchases || []}
        setPurchases={(p) => updateField('purchases', p)}
      />

      <hr />
      <h3>⚫ Sales</h3>
      <SaleEntry
        sales={localPipe.sales || []}
        setSales={(s) => updateField('sales', s)}
      />

      <hr />
      <h3>✂️ Offcuts (manual only)</h3>
      <OffcutEditor
        offcuts={localPipe.offcuts || []}
        setOffcuts={(o) => updateField('offcuts', o)}
      />

      <br />
      <button onClick={saveChanges} style={{ backgroundColor: '#4CAF50', color: 'white' }}>💾 Save All Changes</button>
    </div>
  );
}

export default StockView;
