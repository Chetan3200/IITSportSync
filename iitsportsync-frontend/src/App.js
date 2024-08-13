import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SportsList from './components/SportsList';
import MatchList from './components/MatchList';
import MatchDetail from './components/MatchDetail';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<SportsList />} />
        <Route path="/sport/:sportId/matches" element={<MatchList />} />
        <Route path="/match/:matchId" element={<MatchDetail />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/profile" 
          element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} 
        />
      </Routes>
    </div>
  );
}

export default App;