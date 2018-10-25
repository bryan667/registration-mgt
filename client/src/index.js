import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles.css'

import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'


ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
,document.getElementById('root'));