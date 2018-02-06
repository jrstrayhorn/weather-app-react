import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import $ from 'jquery';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

window.jQuery = $;
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

ReactDOM.render(<App />, document.getElementById('app'));
