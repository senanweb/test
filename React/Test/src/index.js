import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'; //10
import App from './app';
import Header from './Components/header';
import Footer from './Components/footer';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render
(
    <div>
        <App/>
        <Header/>
        <Footer/>
    </div>
);

