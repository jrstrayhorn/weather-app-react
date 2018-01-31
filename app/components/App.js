var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');

var Home = require('./Home');
var Forecast = require('./Forecast');

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/forecast" component={Forecast} />
          <Route
            render={function() {
              return <p>Not Found</p>;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

module.exports = App;
