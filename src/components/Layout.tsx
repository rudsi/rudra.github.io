import React from 'react';
import Header from '../components/Header';
import layoutStyles from '../styles/Layout.module.css';
import BodySection from './BodySection';
import Footer from './Footer';
import Intro from './Intro';

const Layout: React.FC = () => {
  return (
    <div className={layoutStyles.layoutContainer}>
      <div className={layoutStyles.centered}>
        <Header />
      </div>
      <div>
        <Intro/>
      </div>
      <div className={layoutStyles.bodySectionContainer}>
        <BodySection />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;
