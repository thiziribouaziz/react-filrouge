import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import PasswordPage from './pages/PasswordPage';
import HygienePage from './pages/HygienePage';
import Recettes from './recettes/index';
import Conseils from './recettes/Conseils';

const RoutesConfig = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgottenpassword" element={<PasswordPage />} />
      <Route path="/hygiene" element={<HygienePage />} />
      <Route path="/recettes" element={<Recettes />} />
      <Route path="/conseils" element={<Conseils />} />
    </Routes>
  </Router>
);

export default RoutesConfig;
