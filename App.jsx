import { useEffect, useState } from 'react';
import './App.css';

export default function Gallery() {
  const [leaders, setLeaders] = useState([]);
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/lumawig/personalities')
      .then(res => res.json())
      .then(data => setLeaders(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  if (leaders.length === 0) return <p>No data</p>;

  const hasNext = index < leaders.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex((prevIndex) => (hasNext ? prevIndex + 1 : 0));
  }

  function handlePrevClick() {
    setIndex((prevIndex) => (hasPrev ? prevIndex - 1 : leaders.length - 1));
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const leader = leaders[index];

  return (
    <div className="gallery-container">
      <h1>Cedric James G. Lumawig</h1>
      <h2>BSIT-3A</h2>
      <h3>Great Leaders</h3>
      <h4><i>{leader.name}</i> From {leader.country}</h4>
      <h4>({index + 1} of {leaders.length})</h4>
      <div className="buttons">
        <button onClick={handlePrevClick} disabled={!hasPrev}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <button className="details-button" onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p className="description">{leader.description}</p>}
      <img className="GreatLeaders-image" src={leader.url} alt={leader.alt} />
    </div>
  );
}
