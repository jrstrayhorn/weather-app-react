import React from 'react';
import { Link } from 'react-router-dom';

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

export default Nav;
