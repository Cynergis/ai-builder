import React, { useState } from 'react';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>Enter some text:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default MyComponent;