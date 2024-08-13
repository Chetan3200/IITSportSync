import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMatches } from '../api';

function MatchList() {
  const [matches, setMatches] = useState([]);
  const { sportId } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getMatches(sportId);
        setMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };
    fetchMatches();
  }, [sportId]);

  return (
    <div className="match-list">
      <h2>Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <Link to={`/match/${match.id}`}>
              {match.team1} vs {match.team2} - {new Date(match.date).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchList;