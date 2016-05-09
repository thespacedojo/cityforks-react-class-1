import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '/imports/client/routes.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'))
})
