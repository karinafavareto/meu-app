import { useState } from 'react';

let nextId = 0;

export default function List1() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1 className="text-body-secondary display-5 text-center mt-3">List-1</h1>
      <h1>Inspiring sculptors:</h1>
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className="btn btn-outline-secondary mb-3" onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul className="list-group">
        {artists.map(artist => (
          <li className="list-group-item" key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}