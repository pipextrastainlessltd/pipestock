import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import Sidebar from './components/Sidebar';
import Stock304LWelded from './views/Stock304LWelded';
import Valuation from './views/Valuation';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/stock-304l-welded" replace />} />
            {routes.map(({ path, component: Component }, idx) => (
              <Route key={idx} path={path} element={<Component />} />
            ))}
            <Route path="/valuation" element={<Valuation />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
