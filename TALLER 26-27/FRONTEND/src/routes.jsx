import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import VerQuejas from './pages/verQuejas';
import CrearQueja from './pages/crearQuejasrearQueja';

const AppRoutes = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<VerQuejas />} />
        <Route path="/crear-queja" element={<CrearQueja />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRoutes;
