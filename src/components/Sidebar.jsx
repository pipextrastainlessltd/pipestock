import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{ width: '220px', background: '#eee', padding: '20px' }}>
      <h3>PipeStock</h3>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/dashboard/304l-welded">304L Welded</Link></li>
          <li><Link to="/dashboard/valuation">Stock Valuation</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}
