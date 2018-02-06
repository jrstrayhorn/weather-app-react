const React = require('react');

const queryString = require('query-string');
const MainContent = require('./MainContent');

const api = require('../utils/api');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      city: '',
      state: '',
      temp: null,
      description: '',
      error: null
    };
  }
  getWeatherData(location) {
    api.getLocationData(location).then(results => {
      if (results === null) {
        return this.setState(() => ({
          error: 'There was an error with your request, please try again.',
          loading: false
        }));
      }

      const { city, state, temp, description } = results;
      this.setState(() => ({
        error: null,
        loading: false,
        city,
        state,
        temp,
        description
      }));
    });
  }
  componentDidMount() {
    const { location: { search } } = this.props;
    this.getWeatherData(queryString.parse(search).location);
  }
  componentDidUpdate({ location: { search: prevSearch } }) {
    // check to see if query string parameters changed
    // in order to do a re-render
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.getWeatherData(queryString.parse(search).location);
    }
  }
  render() {
    const { loading, error, city, state, temp, description } = this.state;

    if (loading) {
      return <MainContent headline="Loading..." tagline="" showForm={false} />;
    }

    if (error) {
      return <MainContent headline="Error" tagline={error} showForm={true} />;
    }
    return (
      <MainContent
        headline={`${city}, ${state}`}
        tagline={`The weather is ${temp}\xB0 F and ${description}!`}
        showForm={true}
      />
    );
  }
}

module.exports = Forecast;
