"use client"
import React, { useState, useEffect } from 'react';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <button className={styles.toggleButton} onClick={handleToggle}>
            {isDarkMode ? '🌙' : '🌞'}
        </button>
    );
};

export default ThemeToggle;
