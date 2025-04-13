import React, { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ErrorPage = ({errorImage}) => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error('Error captured in ErrorPage:', error);

  const goBack = () => {
    navigate('/');
  }

  useEffect(() => {
    document.body.classList.add('error-page-body');

    return () => {
      document.body.classList.remove('error-page-body');
    };
  }, []);

  const status = error?.status || "404";
  const statusText = error?.statusText || "Page Not Found";

  return (
    <>
      <div className="error-container">
          <span>
              <h1 className="error-title">Oops! Something went wrong.</h1>
              <h3 className="error-sub-title">{status} - {statusText}</h3>
          </span>
          <button onClick={goBack} className="error-page-btn form-btn">
              <ion-icon name="play-back"></ion-icon>
              Go Back to Home
          </button>
      </div>
      <div className="error-img-container">
          <LazyLoadImage src={errorImage} alt="Error Page" effect="blur" />
      </div>
    </>
  );
};

export default ErrorPage;