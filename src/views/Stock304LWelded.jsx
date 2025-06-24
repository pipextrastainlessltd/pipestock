import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Stock304LWelded() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const fetchStock = async () => {
      const col = collection(db, 'stock_304l_welded');
      const snapshot = await getDocs(col);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStock(data);
    };
    fetchStock();
  }, []);

  return (
    <div>
      <h2>304L Welded Pipe Stock</h2>
      <ul>
        {stock.map((item, index) => (
          <li key={index} style={{
            backgroundColor: index % 2 === 0 ? '#f0f8ff' : '#ffffff',
            padding: '6px 12px'
          }}>
            {item.size} - {item.thickness} - {item.length || item.qty} {item.unit || 'm'}
          </li>
        ))}
