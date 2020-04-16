import React, {useState, useEffect} from 'react';

function Clicker() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count+1)}>Click Me {count}</button>
    </div>
  )
}

export default Clicker;
