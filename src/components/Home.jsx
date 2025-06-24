import React, { useState } from 'react';
import StockView from './StockView';

const sampleData = {
  "304L Welded": {
    purchases: [],
    sales: [],
    offcuts: []
  },
  // Add other stock sections as needed
};

export default function Home() {
  const [selectedKey, setSelectedKey] = useState("304L Welded");

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "200px", borderRight: "1px solid #ccc" }}>
        <h3>Stock Sections</h3>
        {Object.keys(sampleData).map(key => (
          <div key={key} style={{ padding: "8px", cursor: "pointer", background: key === selectedKey ? "#eee" : "transparent" }}
               onClick={() => setSelectedKey(key)}>
            {key}
          </div>
        ))}
      </div>
      <div style={{ flexGrow: 1, padding: "16px" }}>
        <StockView
          pipeKey={selectedKey}
          pipe={sampleData[selectedKey]}
          savePipe={(data) => console.log("Save not implemented", data)}
          goBack={() => {}}
        />
      </div>
    </div>
  );
}
