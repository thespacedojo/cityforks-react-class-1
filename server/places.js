import { Meteor } from 'meteor/meteor';
import Places from '/imports/collections/Places.js';

Meteor.methods({
  'places/fetch': function(coords) {
    results = HTTP.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.lat},${coords.lng}&radius=500&types=restaurant|bar&key=AIzaSyDRawePQWErJ4bL1dV0zwESLF6RgLgBtCY`)
    console.log(results)
    _(results.data.results).each(function(loc) {
      _.extend(loc, {point: {type: "Point", coordinates: [loc.geometry.location.lng, loc.geometry.location.lat]}})
      Places.upsert({id: loc.id}, {$set: loc})
    });
  }
});
