import React, { ReactNode } from 'react';
import Header from '../components/Header';
import layoutStyles from '../styles/Layout.module.css';
import BodySection from './BodySection';
import Footer from './Footer';
import Intro from './Intro';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={layoutStyles.layoutContainer}>
      <div className={layoutStyles.centered}>
        <Header />
      </div>
      <div>
        <Intro />
      </div>
      <div className={layoutStyles.bodySectionContainer}>
        <BodySection />
      </div>
      <main>
        {children} {/* Render children here */}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
