

import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

function Header({ setDarkMode, darkMode }) {
    return (
        <div className={`flex h-16 justify-between items-center p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
            <div className='w-52 text-center'>
                <p className="font-extrabold text-3xl">Tufail Online Store</p>
            </div>
            <div className='w-2/4 h-10'>
                <input
                    type="text"
                    className={`w-full h-full rounded-lg pl-4 outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
                    placeholder='Search Product ....'
                />
            </div>
            <div className='flex gap-4 mb-2 items-center'>
                <Link to="/" className={`px-4 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}>Home</Link>
                <Link to="/products" className={`px-4 py-2 rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'}`}>Products</Link>
                <Link to="/register">
                    <button className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-black hover:bg-gray-300'}`}>
                        Register
                    </button>
                </Link>
                <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? '🌙' : '🌞'}
                </IconButton>
            </div>
        </div>
    );
}

export default Header;

