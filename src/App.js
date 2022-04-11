import React from 'react';
import Hello from './components/Hello';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hello />} />
                <Route path="/:name" element={<Hello />} />
            </Routes>
        </Router>
    );
}

export default App;
