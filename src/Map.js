import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.7831, lng: -73.9712 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default WrappedMap;
