import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List2() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1 className="text-body-secondary display-5 text-center mt-3">List-2</h1>
      <h1>Inspiring sculptors:</h1>
      <ul className="list-group">
        {artists.map(artist => (
          <li className="list-group-item" key={artist.id}>
            {artist.name}{' '}
            <button className="btn btn-outline-secondary" onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}