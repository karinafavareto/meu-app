import { useState } from 'react';

let initialCounters = [
  0, 0, 0
];

export default function CounterList() {
  const [counters, setCounters] = useState(
    initialCounters
  );

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <>
    <h1 className="text-body-secondary display-5 text-center mt-3">CounterList</h1>   
    <ul className="list-group">       
      {counters.map((counter, i) => (
        <li className="list-group-item" key={i}>
          {counter}
          <button className="btn btn-outline-secondary ms-3" onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
    </>
  );
}