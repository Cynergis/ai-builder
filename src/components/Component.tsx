import React from 'react';

const LabeledInput = () => {
  return (
    <div>
      <label htmlFor="input">Label:</label>
      <input type="text" id="input" name="input" />
    </div>
  );
};

export default LabeledInput;