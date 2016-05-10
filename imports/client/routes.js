import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '/imports/client/containers/App.js';
import MapContainer from '/imports/client/containers/Map.js';
import Places from '/imports/client/components/Places.js';
import LeafletMap from '/imports/client/components/LeafletMap.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ Places } />
    </Route>
    <Route path="/map" component={MapContainer}>
      <IndexRoute component={ LeafletMap } />
    </Route>
  </Router>
);
