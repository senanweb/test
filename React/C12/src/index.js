

import ReactDOM from 'react-dom/client';
import Test from './test';
import "./style.css";
import Nav from "./components/nav.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render
(
    <div>
        <Nav/>
        <Test/>
    </div>
);