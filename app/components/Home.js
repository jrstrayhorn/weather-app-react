var React = require('react');

var MainContent = require('./MainContent');

function Home() {
  return (
    <MainContent
      headline="Weatherly"
      tagline="Enter a City and State, we'll get the weather!"
    />
  );
}

module.exports = Home;
