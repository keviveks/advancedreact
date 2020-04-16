import { useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue('');
  };

  return [value, updateValue, resetValue];
};
