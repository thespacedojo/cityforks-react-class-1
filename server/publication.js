import { Meteor } from 'meteor/meteor';
import Places from '/imports/collections/Places.js';

Meteor.publish('placesNearby', function(coords) {
  check(coords, {lat: Number, lng: Number})
  return Places.find({point:{ $near :{$geometry: { type: "Point",  coordinates: [ coords.lng, coords.lat] },$minDistance: 1,$maxDistance: 1000}}});
});

Meteor.publish('placesNearbyByBox', function(bottomLeft, topRight) {
  return Places.find({point: {$geoWithin: {$box: [bottomLeft, topRight]}}});
});
