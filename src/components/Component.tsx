import React from 'react';

function TextInputWithLabel() {
  return (
    <div>
      <label htmlFor="input">Label:</label>
      <input id="input" type="text" />
    </div>
  );
}

export default TextInputWithLabel;