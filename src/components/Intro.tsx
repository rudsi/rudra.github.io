// components/Intro.tsx
import React from 'react';
import introStyles from '../styles/Intro.module.css';

const Intro: React.FC = () => {
    return (
        <section className={introStyles.intro}>
            <p className={introStyles.text}>
                Hi, I'm Rudra. I'm a curious and enthusiastic individual who embraces challenges and opportunities for growth. I’m driven by a desire to learn, adapt, and solve problems creatively. I’m committed to making a positive impact and thriving in collaborative environments where innovative ideas can flourish.
            </p>
        </section>
    );
};

export default Intro;
