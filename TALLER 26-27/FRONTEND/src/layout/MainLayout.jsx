import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="space-x-4">
          <Link to="/" className="text-white">Ver Quejas</Link>
          <Link to="/crear-queja" className="text-white">Crear Queja</Link>
        </nav>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

