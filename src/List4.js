import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List4() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <h1 className="text-body-secondary display-5 text-center mt-3">List-4</h1>
      <button onClick={handleClick} className="btn btn-outline-secondary mb-3">
        Reverse
      </button>
      <ul className="list-group">
        {list.map(artwork => (
          <li className="list-group-item" key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}