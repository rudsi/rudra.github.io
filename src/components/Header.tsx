import React from 'react';
import headerStyles from '../styles/Header.module.css'; 
import ThemeToggle from './ThemeToggle';
const Header: React.FC = () => {
    return (
        <>
            <h2>
                <span className={headerStyles.italicText}>Personal blog of </span>{' '}
                <span className={headerStyles.helveticaText}>Rudra Pratap Singh</span>
                <ThemeToggle/>
            </h2>
        </>
    );
}

export default Header;
