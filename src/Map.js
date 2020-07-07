import React, { useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

import data from './data/data.json';
import DealerInfo from './DealerInfo';

function Map() {
  const [dealer, setDealer] = useState(null);
  return (
    <div className="map-area">
      <div>
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 40.7831, lng: -73.9712 }}
        >
          {data.dealers.map((d) => (
            <Marker
              key={d.id}
              position={{
                lat: d.position.lat,
                lng: d.position.lng,
              }}
              onClick={() => {
                setDealer(d);
              }}
            />
          ))}
          {dealer && (
            <InfoWindow
              position={{
                lat: dealer.position.lat,
                lng: dealer.position.lng,
              }}
            >
              <div>{dealer.location}</div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
      <div>
        {dealer && (
          <DealerInfo
            location={dealer.location}
            trims={dealer.trims}
            price={dealer.price}
            id={dealer.id}
          />
        )}
      </div>
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default WrappedMap;
