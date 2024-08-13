import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMatch } from '../api';

function MatchDetail() {
  const [match, setMatch] = useState(null);
  const [updates, setUpdates] = useState([]);
  const { matchId } = useParams();

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const data = await getMatch(matchId);
        setMatch(data);
      } catch (error) {
        console.error('Error fetching match:', error);
      }
    };
    fetchMatch();

    // WebSocket connection
    const ws = new WebSocket(`ws://localhost:8000/ws/match/${matchId}/`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setUpdates((prevUpdates) => [...prevUpdates, data.message]);
    };

    return () => {
      ws.close();
    };
  }, [matchId]);

  if (!match) return <div>Loading...</div>;

  return (
    <div className="match-detail">
      <h2>{match.team1} vs {match.team2}</h2>
      <p>Date: {new Date(match.date).toLocaleString()}</p>
      <p>Location: {match.location}</p>
      <p>Score: {match.score_team1} - {match.score_team2}</p>
      <h3>Live Updates</h3>
      <ul>
        {updates.map((update, index) => (
          <li key={index}>{update}</li>
        ))}
      </ul>
    </div>
  );
}

export default MatchDetail;