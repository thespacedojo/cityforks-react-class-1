import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '/imports/client/containers/App.js';
import Places from '/imports/client/components/Places.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ Places } />
    </Route>
  </Router>
);
