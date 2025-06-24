import React from 'react';

function OffcutEditor({ offcuts, setOffcuts }) {
  const updateOffcut = (index, key, value) => {
    const updated = [...offcuts];
    updated[index][key] = key === 'length' ? parseFloat(value) : value;
    setOffcuts(updated);
  };

  const deleteOffcut = (index) => {
    const updated = offcuts.filter((_, i) => i !== index);
    setOffcuts(updated);
  };

  const addOffcut = () => {
    setOffcuts([...offcuts, { length: 0.0, cast: '' }]);
  };

  return (
    <div>
      {offcuts.map((cut, i) => (
        <div key={i} style={{ marginBottom: '6px' }}>
          <input
            value={cut.length}
            onChange={e => updateOffcut(i, 'length', e.target.value)}
            placeholder="Length (m)"
            style={{ width: '100px' }}
          />
          <input
            value={cut.cast}
            onChange={e => updateOffcut(i, 'cast', e.target.value)}
            placeholder="Cast #"
            style={{ width: '150px', marginLeft: '8px' }}
          />
          <button onClick={() => deleteOffcut(i)} style={{ marginLeft: '8px' }}>Delete</button>
        </div>
      ))}
      <button onClick={addOffcut}>➕ Add Offcut</button>
    </div>
  );
}

export default OffcutEditor;
