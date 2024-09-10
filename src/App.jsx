
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';
import Product from './pages/Product';
import Home from './pages/Home';

import Register from './components/register';
import Header from './components/Header';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <BrowserRouter>
            <div className={darkMode ? 'dark' : ''}>
                <Navbar />
                <Header setDarkMode={setDarkMode} darkMode={darkMode} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
