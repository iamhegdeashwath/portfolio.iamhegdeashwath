import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import ReactGA from 'react-ga4';
import PageAnalytics from './components/PageAnalytics';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';

const AboutPage = React.lazy(() =>  import('./pages/AboutPage'));
const ExperiencePage = React.lazy(() => import('./pages/ExperiencePage'));
const EducationPage = React.lazy(() =>  import('./pages/EducationPage'));
const SkillsPage = React.lazy(() => import('./pages/SkillsPage'));
const ContactsPage = React.lazy(() =>  import('./pages/ContactsPage'));

ReactGA.initialize("G-7J3TS2VZ7C");

const importAll = (assets) => {
  let images = {};
  assets.keys().forEach((item, index) => {
      images[item.replace('./', '')] = assets(item);
  });
  return images;
};

const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Home images={images}/>,
      errorElement: (
        <PageTransition>
          <ErrorPage errorImage={images['error.png']}/>
        </PageTransition>
      ),
      children: [
        { 
          path: "/", 
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <PageTransition>
                <AboutPage pageCard={{ pageTitle: "About Me" }} images={images} />
              </PageTransition>
            </React.Suspense>
          )
        },
        { 
          path: "experience", 
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <PageTransition>
                <ExperiencePage pageCard={{ pageTitle: "Experience" }} images={images} />
              </PageTransition> 
            </React.Suspense>
          )
        },
        { 
          path: "education", 
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <PageTransition>
                <EducationPage pageCard={{ pageTitle: "Education" }} images={images} />
              </PageTransition>
            </React.Suspense>
          )
        },
        { 
          path: "skills", 
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <PageTransition>
                <SkillsPage pageCard={{ pageTitle: "Skills" }} images={images} />
              </PageTransition>
            </React.Suspense>
          )
        },
        { 
          path: "contact", 
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <PageTransition>
                <ContactsPage pageCard={{ pageTitle: "Contact" }} images={images} />
              </PageTransition>
            </React.Suspense>
          )
        },
      ],
    }
  ]
);

const AnimatedRouterProvider = ({ router }) => {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router}>
        <PageAnalytics />
      </RouterProvider>
    </AnimatePresence>
  );
};

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AnimatedRouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals((metric) => {
  ReactGA.send({
    hitType: "event",
    eventCategory: "Web Vitals",
    eventAction: metric.name,
    eventValue: Math.round(metric.value),
  });
});