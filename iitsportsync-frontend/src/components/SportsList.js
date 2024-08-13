import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSports } from '../api';

function SportsList() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const data = await getSports();
        setSports(data);
      } catch (error) {
        console.error('Error fetching sports:', error);
      }
    };
    fetchSports();
  }, []);

  return (
    <div className="sports-list">
      <h2>Sports</h2>
      <ul>
        {sports.map((sport) => (
          <li key={sport.id}>
            <Link to={`/sport/${sport.id}/matches`}>{sport.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SportsList;