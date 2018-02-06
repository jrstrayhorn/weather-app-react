const React = require('react');

const MainContent = require('./MainContent');

function Home(props) {
  return (
    <MainContent
      headline="Weatherly"
      tagline="Enter a City and State, we'll get the weather!"
      match={props.match}
      showForm={true}
    />
  );
}

module.exports = Home;
