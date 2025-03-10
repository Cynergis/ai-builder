import React, { useState } from 'react';

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <label>Input Text:</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default MyComponent;