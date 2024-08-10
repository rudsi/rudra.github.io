// components/Footer.tsx
"use client"
import React, { useEffect, useState } from 'react';
import footerStyles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        setIsDarkMode(theme === 'dark');
    }, []);

    return (
        <footer className={`${footerStyles.footer} ${isDarkMode ? footerStyles['dark-mode'] : footerStyles['light-mode']}`}>
            <div className={footerStyles.container}>
                <h2>Connect with me on:</h2>
                <ul className={footerStyles.contactList}>
                    <li>
                        <a href="mailto:your-email@example.com" className={footerStyles.link}>
                            📧 Email
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className={footerStyles.link}>
                            🔗 LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className={footerStyles.link}>
                            🐙 GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
