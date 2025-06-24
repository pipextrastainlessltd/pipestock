import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Stock304LWelded from './Stock304LWelded';
import Valuation from './Valuation';
import Settings from './Settings';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="304l-welded" element={<Stock304LWelded />} />
          <Route path="valuation" element={<Valuation />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
