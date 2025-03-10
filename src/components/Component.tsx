import React, { useState } from 'react';

const MyComponent = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <label>Enter some text:</label>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}

export default MyComponent;