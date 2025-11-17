import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1 className="text-body-secondary display-5 text-center mt-3">Counter</h1>
      <h1>{number}</h1>
      <button type="button" className="btn btn-outline-secondary mb-3" onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}