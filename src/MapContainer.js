import React, { useState } from 'react';
import WrappedMap from './Map';
import DealerInfo from './DealerInfo';

require('dotenv').config();

function MapContainer() {
  const [dealer, setDealer] = useState(null);
  return (
    <div className="map-container">
      <WrappedMap
        setDealer={setDealer}
        loadingElement={<div style={{ height: `100%` }} />}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div className="mapdiv" />}
      />

      {dealer && (
        <DealerInfo
          location={dealer.location}
          trims={dealer.trims}
          price={dealer.price}
          id={dealer.id}
        />
      )}
    </div>
  );
}

export default MapContainer;
