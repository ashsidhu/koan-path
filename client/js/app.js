var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = React.createClass({
  render: function(){
    debugger;
    return (
      <div> Welcome to home page </div>
    );
  }
})

var routes = (
  <Route name="app" path="/" handler={App}>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});