// import all necessary file
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        
        // main header section
        <div className = "header">
           <h2 className ="main-title">Welcome to <span className ="name">Yunnan</span> University</h2>
            <p>Yunnan University in Kunming is seeking to become a regional first-class university that is among the best in China and famous worldwide.</p>
            <h3>Total Budget: 50000 Million</h3>
        </div>
    );
};

export default Header;