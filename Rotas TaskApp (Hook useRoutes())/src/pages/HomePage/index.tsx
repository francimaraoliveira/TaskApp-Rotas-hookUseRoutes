// src/pages/HomePage/index.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Ir para a Página de Login</button>
    </div>
  );
}

export default HomePage;