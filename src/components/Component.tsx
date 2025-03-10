import React from 'react';

const LabeledInput = () => {
  return (
    <div>
      <label htmlFor="inputField">Enter text:</label>
      <input type="text" id="inputField" name="inputField" />
    </div>
  );
};

export default LabeledInput;