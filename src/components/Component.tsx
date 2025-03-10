import React from 'react';

const LabeledInput = () => {
  return (
    <div>
      <label htmlFor="inputId">Your Label</label>
      <input type="text" id="inputId" />
    </div>
  );
};

export default LabeledInput;