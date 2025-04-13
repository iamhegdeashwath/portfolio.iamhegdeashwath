import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Aside from '../components/Aside';
import MainContent from '../components/MainContent';

const Home = ({images}) => {

  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const menuMap = {
      "/": "About",
      "/experience": "Experience",
      "/education": "Education",
      "/skills": "Skills",
      "/contact": "Contact",
    };
    const menu = menuMap[location.pathname] || "About";
    setActiveMenu(menu);
  }, [location.pathname]);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <main>
        <Aside images={images} />
        <MainContent images={images} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </main>
      <footer>© {currentYear}. Coded with&nbsp;&nbsp;❤️&nbsp;&nbsp;by Ashwath Suresh Hegde. All rights reserved.</footer>
    </>
  );
}

export default Home;