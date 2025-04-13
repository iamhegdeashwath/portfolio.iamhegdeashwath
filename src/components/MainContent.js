import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar'

const MainContent = ({images, activeMenu, setActiveMenu}) => {

  const navItems = [
    {
      title: "About",
      pageTitle: "About",
      pathParm: ""
    },
    {
      title: "Professional Experience",
      pageTitle: "Experience",
      pathParm: "experience"
    },
    {
      title: "Education",
      pageTitle: "Education",
      pathParm: "education"
    },
    {
      title: "Skills",
      pageTitle: "Skills",
      pathParm: "skills"
    },
    {
      title: "Contact",
      pageTitle: "Contact",
      pathParm: "contact"
    },
  ];

  const location = useLocation();
  const activeRoute = navItems.find(
    (item) => location.pathname === (item.pathParm === "" ? "/" : `/${item.pathParm}`)
  )?.pageTitle;

  return (
    <div className="main-content">
      <NavBar menuHeader={navItems} setActiveMenu={setActiveMenu}></NavBar>
      <article className={`${activeRoute === activeMenu ? "active" : ""}`}>
        <Outlet context={{ activeMenu, setActiveMenu, images }}/>
      </article>
    </div>
  );
}

export default MainContent;