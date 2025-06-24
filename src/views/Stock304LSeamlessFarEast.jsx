import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Stock304LSeamlessFarEast() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const fetchStock = async () => {
      const snapshot = await getDocs(collection(db, 'stock304lseamlessfareast'));
      setStock(snapshot.docs.map(doc => doc.data()));
    };
    fetchStock();
  }, []);

  return (
    <div>
      <h2>304LSeamlessFarEast</h2>
      <ul>
        {stock.map((item, index) => (
          <li key={index} style={{
            backgroundColor: index % 2 === 0 ? '#f0f8ff' : '#ffffff',
            padding: '6px 12px'
          }}>
            {item.size} - {item.thickness} - {item.length || item.qty} {item.unit || 'm'}
          </li>
        ))}
