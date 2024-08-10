 
"use client"
import React, { useState, useEffect } from 'react';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => 
        localStorage.getItem('theme') === 'dark' || false
    );

    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <button className={styles.toggleButton} onClick={handleToggle}>
            {isDarkMode ? '🌙' : '🌞'}
        </button>
    );
};

export default ThemeToggle;
