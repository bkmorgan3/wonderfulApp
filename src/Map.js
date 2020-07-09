import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';

import data from './data/data.json';

function Map(props) {
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
                props.setDealer(d);
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default WrappedMap;
