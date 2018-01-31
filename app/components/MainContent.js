var React = require('react');
var bgImage = require('../images/video_bg.jpg');
var PropTypes = require('prop-types');
var Link = requie('react-router-dom').Link;

function MainContent(props) {
  return (
    <div className="main" style={{ backgroundImage: `url('./${bgImage}')` }}>
      <div className="cover blue" data-color="blue" />
      <div className="container">
        <h1 className="logo cursive">{props.headline}</h1>
        <div className="content main-area">
          <h4 className="motto">{props.tagline}</h4>
          <div className="row">
            <div className="col-md-4 col-md-offset-4 col-sm6-6 col-sm-offset-3 ">
              <form className="form-inline" role="form">
                <div className="form-group">
                  <label className="sr-only" htmlFor="exampleInputEmail2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control transparent"
                    placeholder="Your city/state here..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-danger btn-fill"
                  style={{ marginLeft: '4px' }}
                >
                  Get Weather
                </button>
              </form>
            </div>
          </div>
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
  tagline: PropTypes.string.isRequired
};

module.exports = MainContent;
