import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';
// import 'antd/dist/antd.css';

import App from 'containers/index';
import Home from 'containers/home';
import About from 'containers/about';
import TodoList from 'containers/todolist';


// Render the main component into the dom
export default class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path='about' component={About}/>
          <Route path='todo' component={TodoList}></Route>
        </Route>
      </Router>
    )
  }
}
ReactDOM.render(
  <Root/>, document.getElementById('app'));
