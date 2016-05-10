import React from 'react'
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';
import Footer from '/imports/client/layout/footer.js';
import Places from '/imports/collections/Places.js';

class MapContainer extends Tracker.Component {
  constructor() {
    super();
    this.mapChanged = this.mapChanged.bind(this);
    this.setState({fetchingData: false});
    this.setState({topRight: [0,0], bottomLeft: [0,0]})
    this.autorun(() => {
      const currentLocation = Geolocation.latLng() || { lat: 0, lng: 0}
      this.setState({currentLocation});
      this.subscribe('placesNearbyByBox', this.state.bottomLeft, this.state.topRight);
      // if (!this.state.fetchingData) {
      //   this.setState({fetchingData: true});
      //   Meteor.call('places/fetch', currentLocation, (err, res) => {this.setState({fetchingData: false})});
      // }
      const places = Places.find().fetch();
      this.setState({places});
    });
  }
  mapChanged(event) {
    let bounds = event.target.getBounds();
    let bottomLeft = [bounds._southWest.lng, bounds._southWest.lat];
    let topRight = [bounds._northEast.lng, bounds._northEast.lat];
    let newCenter = event.target.getCenter();
    Meteor.call('places/fetch', newCenter, (err, res) => {this.setState({fetchingData: false})});
    this.setState({topRight: topRight, bottomLeft: bottomLeft})
  }
  render() {
    return (
      <div className="appContainer">

        <header className="bar bar-nav">
          <h1 className="title">CityForks</h1>
        </header>
        <div className="content">
          {React.cloneElement(this.props.children, {loc: this.state.currentLocation, places: this.state.places, mapChanged: this.mapChanged})}
        </div>

        <Footer />
      </div>
    )
  }
}

export default MapContainer;
