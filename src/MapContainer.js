import React from 'react';
import WrappedMap from './Map';

require('dotenv').config();

const MapContainer = () => (
  <div className="map-container">
    <WrappedMap
      loadingElement={<div style={{ height: `100%` }} />}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div className="mapdiv" />}
    />
  </div>
);

export default MapContainer;
