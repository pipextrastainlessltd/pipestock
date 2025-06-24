import React from 'react';

const pipeSizes = [
  '1/2\" SCH 10S 304L', '1/2\" SCH 40S 304L',
  '3/4\" SCH 10S 304L', '3/4\" SCH 40S 304L',
  '1\" SCH 10S 304L', '1\" SCH 40S 304L',
  '1 1/4\" SCH 10S 304L', '1 1/4\" SCH 40S 304L',
  '1 1/2\" SCH 10S 304L', '1 1/2\" SCH 40S 304L',
  '2\" SCH 10S 304L', '2\" SCH 40S 304L',
  '2 1/2\" SCH 10S 304L', '2 1/2\" SCH 40S 304L',
  '3\" SCH 10S 304L', '3\" SCH 40S 304L',
  '3 1/2\" SCH 10S 304L', '3 1/2\" SCH 40S 304L',
  '4\" SCH 10S 304L', '4\" SCH 40S 304L',
  '5\" SCH 10S 304L', '5\" SCH 40S 304L',
  '6\" SCH 10S 304L', '6\" SCH 40S 304L',
  '8\" SCH 10S 304L', '8\" SCH 20 304L', '8\" SCH 40S 304L',
  '10\" SCH 10S 304L', '10\" SCH 20 304L', '10\" SCH 40S 304L',
  '12\" SCH 10S 304L', '12\" SCH 20 304L', '12\" SCH 40S 304L',
  '14\" SCH 10S 304L', '16\" SCH 10S 304L', '16\" FULL SCH 10 304L',
  '18\" SCH 10S 304L', '20\" SCH 10S 304L', '24\" SCH 10S 304L'
];

function PipeList({ pipeData, onSelectPipe }) {
  const getBaseSize = (label) => label.split(' ')[0];
  const seenSizes = new Map();
  let colorToggle = 0;
  const getStock = (size) => {
    const data = pipeData[size];
    if (!data) return 0;
    const purchased = data.purchases?.reduce((sum, p) => sum + (p.receivedQty || 0), 0) || 0;
    const sold = data.sales?.reduce((sum, s) => sum + s.length, 0) || 0;
    const offcuts = data.offcuts?.reduce((sum, o) => sum + o.length, 0) || 0;
    return (purchased - sold + offcuts).toFixed(3);
  };

  return (
    <div>
      <h2>Select Pipe Size</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {pipeSizes.map((size, idx) => {
          const base = getBaseSize(size);
          if (!seenSizes.has(base)) seenSizes.set(base, colorToggle++ % 2);
          const bg = seenSizes.get(base) === 0 ? '#f0f8ff' : '#ffffff';
          return (
            <div
              key={idx}
              style={{
                backgroundColor: bg,
                padding: '6px',
                marginBottom: '4px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              <strong>{size}</strong>
              <div style={{ marginTop: '6px' }}>Stock: {getStock(size)} m</div>
            </div>
          );
        })}
          const base = getBaseSize(size);
          if (!seenSizes.has(base)) seenSizes.set(base, colorToggle++ % 2);
          const bg = seenSizes.get(base) === 0 ? '#f0f8ff' : '#ffffff';
          return (
          <div key={idx} style={{
            border: '1px solid #ccc',
            padding: '10px',
            width: '30%',
            minWidth: '240px',
            boxSizing: 'border-box',
            background: bg
          }}>
            <button onClick={() => onSelectPipe(size)} style={{ width: '100%' }}>{size}</button>
            <div style={{ marginTop: '6px' }}>Stock: {getStock(size)} m</div>
          </div>
        })
      </div>
    </div>
  );
}

export default PipeList;