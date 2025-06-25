

import ReactDOM from 'react-dom/client';
import Test from './test';
import "./style.css";
import Nav from "./components/nav.js";
import Content from "./content.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render
(
    <div >
        <div className='Container'>
            <Nav/>
            <Content />
        </div>
        <Test/>
    </div>
);