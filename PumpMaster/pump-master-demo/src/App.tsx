import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.tsx';
import PumpOverview from './pages/PumpOverview.tsx';
import PumpInspection from './pages/PumpInspection.tsx';
import Navbar from './components/Navbar.tsx';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/overview" element={<PumpOverview />} />
        <Route path="/inspection/:pumpId" element={<PumpInspection />} />
      </Routes>
    </Router>
  );
}

export default App
