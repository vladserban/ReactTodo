var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// load foundation
$(document).foundation();

// load custom css (via webpack alias)
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
