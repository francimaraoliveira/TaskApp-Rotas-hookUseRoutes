// src/pages/TasksPage/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const TasksPage: React.FC = () => {
  return (
    <div>
      <h1>Tasks Page</h1>
      <Link to="/login">Voltar para a Página de Login</Link>
    </div>
  );
}

export default TasksPage;