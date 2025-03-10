import React, { useState } from 'react';

const MyComponent = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <label>
        Enter text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    </div>
  );
};

export default MyComponent;