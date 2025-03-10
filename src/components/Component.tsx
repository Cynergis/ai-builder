import React, { useState } from 'react';

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <label>
        Enter text:
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
}

export default MyComponent;