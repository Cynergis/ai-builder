import React from 'react';

const LabeledInput = () => {
  return (
    <div>
      <label htmlFor="inputId">Label:</label>
      <input type="text" id="inputId" name="inputName" />
    </div>
  );
};

export default LabeledInput;