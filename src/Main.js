import React from 'react';
import MyCarousel from './Carousel';
import WrappedMap from './Map';
require('dotenv').config();

const Main = () => (
  <div>
    <h1>I am the main holder</h1>
    <MyCarousel />
    <WrappedMap
      loadingElement={<div style={{ height: `100%` }} />}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={
        <div
          className="mapdiv"
          style={{
            border: `1px solid green`,
            height: `100%`,
            width: '60%',
            margin: `50`,
            marginLeft: `30px`,
          }}
        />
      }
    />
    <h5>Im down below the map</h5>
  </div>
);

export default Main;
