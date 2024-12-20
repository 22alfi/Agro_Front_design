// src/Home.js
import React from 'react';
import './Home.css';
import logo from './image/logo.png'; // Adjust the path based on the logo's location

const Navbar = ({ setCurrentPage }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => setCurrentPage('Home')}>
                <img src={logo} alt="MyApp Logo" style={{ height: '30px' }} />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <ul className="nav-links">
                <li onClick={() => setCurrentPage('Home')}><a href="#">Home</a></li>
                <li onClick={() => setCurrentPage('Service')}><a href="#">Services</a></li> {/* Updated to redirect to Service */}
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="auth-buttons">
                <button className="login-btn" onClick={() => setCurrentPage('Choose')}>Login</button>
                <button className="signup-btn" onClick={() => setCurrentPage('Choose')}>Sign Up</button>
            </div>
        </nav>
    );
};

const Home = ({ setCurrentPage, currentPage }) => {
    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {currentPage === "Home" && <div className="background"></div>} {/* Background image div */}
        </div>
    );
};

export default Home;
