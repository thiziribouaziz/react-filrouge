import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import RecettePage from './pages/RecettePage';
import LoginPage from './pages/LoginPage';

const RoutesConfig = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/recette" element={<RecettePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default RoutesConfig;
