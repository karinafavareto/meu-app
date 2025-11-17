import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery1() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <h1 className="text-body-secondary display-5 text-center mt-3">Gallery-1</h1>
      <button type="button" className="btn btn-outline-secondary mb-3" onClick={handleNextClick}>
        Next
      </button>
      <h2 className="text-center">
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3 className="text-center">  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button type="button" className="btn btn-outline-secondary mb-3" onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p className="text-center">{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}