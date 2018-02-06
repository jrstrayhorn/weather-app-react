const React = require('react');
const bgImage = require('../images/video_bg.jpg');
const PropTypes = require('prop-types');
const Link = require('react-router-dom').Link;

class LocationInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState(function() {
      return {
        location: value
      };
    });
  }

  render() {
    const { location } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 col-sm6-6 col-sm-offset-3 ">
          <form className="form-inline" role="form">
            <div className="form-group">
              <label className="sr-only" htmlFor="InputCityState">
                City and State
              </label>
              <input
                type="text"
                className="form-control transparent"
                placeholder="Your city/state here..."
                id="location"
                autoComplete="off"
                value={location}
                onChange={this.handleChange}
              />
            </div>

            {location && (
              <Link
                className="btn btn-danger btn-fill"
                style={{ marginLeft: '4px' }}
                to={{
                  pathname: '/forecast',
                  search: `?location=${location}`
                }}
              >
                Get Weather
              </Link>
            )}
          </form>
        </div>
      </div>
    );
  }
}

function MainContent({ headline, tagline, showForm }) {
  return (
    <div className="main" style={{ backgroundImage: `url('./${bgImage}')` }}>
      <div className="cover blue" data-color="blue" />
      <div className="container">
        <h1 className="logo cursive">{headline}</h1>
        <div className="content main-area">
          <h4 className="motto">{tagline}</h4>
          {showForm && <LocationInput />}
        </div>
      </div>
      <div className="footer">
        <div className="container">
          Coded with React by{' '}
          <a href="https://github.com/jrstrayhorn">J.R. Strayhorn</a>
        </div>
      </div>
    </div>
  );
}

MainContent.propTypes = {
  headline: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired
};

module.exports = MainContent;
