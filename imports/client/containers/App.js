import React from 'react'
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';
import Footer from '/imports/client/layout/footer.js';
import Places from '/imports/collections/Places.js';

class AppContainer extends Tracker.Component {
  constructor() {
    super();
    this.setState({fetchingData: false})
    this.autorun(() => {
      const currentLocation = Geolocation.latLng() || { lat: 0, lng: 0}
      this.subscribe('placesNearby', currentLocation);
      this.setState({currentLocation});
      // if (!this.state.fetchingData) {
      //   this.setState({fetchingData: true});
      //   Meteor.call('places/fetch', currentLocation, (err, res) => {this.setState({fetchingData: false})});
      // }
      const places = Places.find().fetch();
      this.setState({places});
    });
  }
  render() {
    return (
      <div className="appContainer">

        <header className="red bar bar-nav">
          <div className="h1 title"><img src={"/images/cityforks-03.png"} className="logo" alt="CityForks" /></div>
        </header>
        <div className="bar bar-standard bar-header-secondary">
          <h2 className="title">Nearby Places</h2>
        </div>
        <div className="content">
          {React.cloneElement(this.props.children, {loc: this.state.currentLocation, places: this.state.places})}
        </div>

        <Footer />
      </div>
    )
  }
}

export default AppContainer;
