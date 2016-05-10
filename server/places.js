import { Meteor } from 'meteor/meteor';
import Places from '/imports/collections/Places.js';

Meteor.methods({
  'places/fetch': function(coords) {
    console.log(`running data find for ${coords.lat}`);
    results = HTTP.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.lat},${coords.lng}&radius=500&types=restaurant|bar&key=AIzaSyCtfoCAldCEf8hXUlkVUd4UljqKR6W_aF4`)
    _(results.data.results).each(function(loc) {
      _.extend(loc, {point: {type: "Point", coordinates: [loc.geometry.location.lng, loc.geometry.location.lat]}})
      Places.upsert({id: loc.id}, {$set: loc})
    });
  }
});
