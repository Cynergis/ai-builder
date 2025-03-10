import React from 'react';

const TextInput = () => {
  return (
    <div>
      <label htmlFor="inputText">Label:</label>
      <input type="text" id="inputText" name="inputText" />
    </div>
  );
};

export default TextInput;