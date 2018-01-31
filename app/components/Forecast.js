var React = require('react');

var MainContent = require('./MainContent');

function Forecast() {
  return (
    <MainContent
      headline="Dallas, Texas"
      tagline={'The weather is 26\xB0 F and Broken clouds!'}
    />
  );
}

module.exports = Forecast;
