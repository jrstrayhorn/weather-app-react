const React = require('react');
const Link = require('react-router-dom').Link;

function Nav() {
  return (
    <nav
      className="navbar navbar-transparent navbar-fixed-top"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Weatherly
          </Link>
        </div>
      </div>
    </nav>
  );
}

module.exports = Nav;
