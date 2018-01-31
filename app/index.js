var React = require('react');
var ReactDOM = require('react-dom');

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./index.css');

var App = require('./components/App');

var $ = require('jquery');

window.jQuery = $;
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

ReactDOM.render(<App />, document.getElementById('app'));
