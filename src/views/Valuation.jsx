import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const stockCollections = [
  'stock304lwelded',
  'stock304la358welded',
  'stock316lwelded',
  'stock316la358welded',
  'stock304lseamlesseu',
  'stock304lseamlessfareast',
  'stock316lseamlesseu',
  'stock316lseamlessfareast',
  'stockendcaps'
];

export default function Valuation() {
  const [totals, setTotals] = useState({});
  const [overall, setOverall] = useState(0);

  useEffect(() => {
    const fetchAll = async () => {
      let totalValue = 0;
      const result = {};
      for (let name of stockCollections) {
        const snap = await getDocs(collection(db, name));
        const value = snap.docs.reduce((sum, doc) => {
          const d = doc.data();
          const qty = d.length || d.qty || 0;
          const price = d.price || 0;
          return sum + qty * price;
        }, 0);
        result[name] = value;
        totalValue += value;
      }
      setTotals(result);
      setOverall(totalValue);
    };
    fetchAll();
  }, []);

  return (
    <div>
      <h2>📊 Stock Valuation</h2>
      <ul>
        {Object.entries(totals).map(([name, val]) => (
          <li key={name}><strong>{name}</strong>: £{val.toFixed(2)}</li>
        ))}
      </ul>
      <h3>Total Stock Value: £{overall.toFixed(2)}</h3>
    </div>
  );
}
