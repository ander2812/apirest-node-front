import React from 'react';
import ReactDOM from 'react-dom/client';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './firebase-config'
import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
