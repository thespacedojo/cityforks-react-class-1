import React from 'react'
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';
import Places from '/imports/collections/Places.js';

class AppContainer extends Tracker.Component {
  constructor() {
    super();
    this.autorun(() => {
      const currentLocation = Geolocation.latLng() || { lat: 0, lng: 0}
      this.subscribe('placesNearby', currentLocation);
      this.setState({currentLocation});
      const places = Places.find().fetch();
      this.setState({places});
    });
  }
  render() {
    return (
      <div className="appContainer">

        <header className="bar bar-nav">
          <h1 className="title">CityForks</h1>
        </header>
        {React.cloneElement(this.props.children, {loc: this.state.currentLocation, places: this.state.places})}

      </div>
    )
  }
}

export default AppContainer;
