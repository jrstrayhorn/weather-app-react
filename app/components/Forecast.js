var React = require('react');

var queryString = require('query-string');
var MainContent = require('./MainContent');

var api = require('../utils/api');

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
    api.getLocationData(location).then(
      function(results) {
        if (results === null) {
          return this.setState(function() {
            return {
              error: 'There was an error with your request, please try again.',
              loading: false
            };
          });
        }
        console.log(results);
        this.setState(function() {
          return {
            error: null,
            loading: false,
            city: results.city,
            state: results.state,
            temp: results.temp,
            description: results.description
          };
        });
      }.bind(this)
    );
  }
  componentDidMount() {
    var params = queryString.parse(this.props.location.search);
    this.getWeatherData(params.location);
  }
  componentDidUpdate(prevProps) {
    // check to see if query string parameters changed
    // in order to do a re-render
    if (prevProps.location.search !== this.props.location.search) {
      var params = queryString.parse(this.props.location.search);
      this.getWeatherData(params.location);
    }
  }
  render() {
    var loading = this.state.loading;
    var error = this.state.error;
    var city = this.state.city;
    var state = this.state.state;
    var temp = this.state.temp;
    var description = this.state.description;

    if (loading) {
      return <MainContent headline="Loading..." tagline="" showForm={false} />;
    }

    if (error) {
      return <MainContent headline="Error" tagline={error} showForm={true} />;
    }
    return (
      <MainContent
        headline={city + ', ' + state}
        tagline={'The weather is ' + temp + '\xB0 F and ' + description + '!'}
        showForm={true}
      />
    );
  }
}

module.exports = Forecast;
