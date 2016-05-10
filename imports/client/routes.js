import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '/imports/client/containers/App.js';
import Places from '/imports/client/components/Places.js';
import GMap from '/imports/client/components/GMap.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ Places } />
      <Route path="/map" component={ GMap } />
    </Route>
  </Router>
);
