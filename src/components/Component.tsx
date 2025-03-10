import React, { useState } from 'react';

const HelloInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <label>Hello</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default HelloInput;