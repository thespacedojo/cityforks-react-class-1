import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const LeafletMap = ({loc, places}) => (
  <Map center={[loc.lat, loc.lng]} zoom={16} style={{height: "100%"}}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {places.map(function(place) {
      return (
        <Marker position={[place.geometry.location.lat,place.geometry.location.lng]}>
          <Popup>
            <span>{place.name}</span>
          </Popup>
        </Marker>
      )
    })}
  </Map>
)
export default LeafletMap;
