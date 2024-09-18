

import React from 'react';
import ReactDOM from 'react-dom/client';
// apps
import HelloWorldApp from './HelloWorldApp'
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
// styles
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={100}/>
    </React.StrictMode>
)