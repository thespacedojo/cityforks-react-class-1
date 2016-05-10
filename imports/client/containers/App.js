import React from 'react'
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';
import Places from '/imports/collections/Places.js';

class AppContainer extends Tracker.Component {
  constructor() {
    super();
    this.autorun(() => {
      const currentLocation = Geolocation.latLng() || { lat: 39.1007, lng: -84.5091}
      this.subscribe('placesNearby', currentLocation);
      this.setState({fetchingData: true});
      Meteor.call('places/fetch', currentLocation, function(err, res) {this.setState({fetchingData: false})});
      this.setState({currentLocation});
      const places = Places.find().fetch();
      this.setState({places});
    });
  }
  mapChange() {
    loc = {lat: this.getCenter().lat(), lng: this.getCenter().lng()};
    Meteor.call('places/fetch', loc);
  }
  render() {
    return (
      <div className="appContainer">

        <header className="bar bar-nav">
          <h1 className="title">CityForks</h1>
        </header>
        <div className="content">
          {React.cloneElement(this.props.children, {loc: this.state.currentLocation, places: this.state.places, mapChange: this.mapChange})}
        </div>
        <nav className="bar bar-footer bar-tab">
          <Link className="tab-item" activeClassName="active" to="/">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </Link>
          <Link className="tab-item" activeClassName="active" to="/map">
            <span className="icon icon-search"></span>
            <span className="tab-label">Map</span>
          </Link>
        </nav>
      </div>
    )
  }
}

export default AppContainer;
