import React, { useState } from 'react';

const MyComponent = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div>
      <label>Enter some text:</label>
      <input type="text" value={inputText} onChange={handleInputChange} />
    </div>
  );
}

export default MyComponent;