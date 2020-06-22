import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import Search from './Search'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route 
        path="/search" 
        render={(props) => (
          <Search/>
        )} />
      <Route 
        exact path="/" 
        component={App} />
    </Router>
    {/* <Search location="Bangalore"/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
