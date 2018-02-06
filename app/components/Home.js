import React from 'react';

import MainContent from './MainContent';

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

export default Home;
