// src/pages/LoginPage/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/tasks">Ir para a Página de Tarefas</Link>
    </div>
  );
}

export default LoginPage;