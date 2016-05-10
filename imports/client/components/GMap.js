import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";

export default GMap = (props) => {
  return (
    <ScriptjsLoader
      hostname={"maps.googleapis.com"}
      pathname={"/maps/api/js"}
      query={{v: '3.23', libraries: "geometry,drawing,places"}}
      loadingElement={
        <div>
          <p>Loading...</p>
        </div>
      }
      containerElement={
        <div style={{height: "100%",width: "100%"}}/>
      }
      googleMapElement={
        <GoogleMap
          defaultZoom={16}
          onBoundsChanged={props.mapChange}
          center={{lat: props.loc.lat, lng: props.loc.lng}}
        >
          {props.places.map(function(place) {
            return <Marker position={{lat: place.geometry.location.lat,lng: place.geometry.location.lng}} key={place.name} defaultAnimation="2"/>
          })}
        </GoogleMap>
      }
    />
  );
}
