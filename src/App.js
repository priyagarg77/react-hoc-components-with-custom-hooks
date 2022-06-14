import React from 'react';
import DisplayState from './components/DisplayState';
import Repositories from './components/repositories/Repositories';
import CustomHook from './components/customHooks/CustomHook';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import './components/navbar.css';
import './components/customHooks/customHook.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayState />} />
        <Route path="/fetch-repo-using-hoc" element={<Repositories />} />
        <Route path="/custom-hook-api-call" element={<CustomHook />} />
      </Routes>
    </Router>
  );
}
