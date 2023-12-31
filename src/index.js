import PublicFooter from 'components/PublicFooter';
import PublicHeader from 'components/PublicHeader';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css';
import "../src/sass/styles.scss";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublicHeader />
    <App />
    <PublicFooter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
