import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import People from './components/People';

// styles
// import './main.css';


const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute component={People} />
    </Route>
  </Router>,
  document.getElementById('root')
)
