import React from 'react';

const DealerInfo = (props) => {
  console.log('props', props);
  return (
    <div style={{ border: '2px solid blue' }}>
      <h4>Availability for {props.location}</h4>
      <div style={{ border: '2px dotted red' }}>
        {props.trims.map((t) => (
          <div
            style={{
              border: '2px solid green',
              margin: '10px',
              display: 'flex',
            }}
          >
            <div className="car-detail">
              <img
                style={{ width: '100px', height: '100px' }}
                src={t.image}
                alt="car pic"
              />
            </div>
            <div className="details">
              <h3>2020 {t.name.toUpperCase()}</h3>
              <p>Starting at {t.price}</p>
              <button className="request-btn">Request Quote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerInfo;
