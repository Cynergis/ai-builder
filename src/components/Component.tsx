import React, { useState } from 'react';

const MyComponent = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <label htmlFor="input-text">Enter some text:</label>
      <input 
        id="input-text"
        type="text" 
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default MyComponent;