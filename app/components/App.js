const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Nav = require('./Nav');

const Home = require('./Home');
const Forecast = require('./Forecast');

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/forecast" component={Forecast} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    </Router>
  );
}

module.exports = App;
