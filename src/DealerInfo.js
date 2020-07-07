import React from 'react';

const DealerInfo = (props) => {
  return (
    <div>
      {props.trims.length ? (
        <div>
          <h4>Availability for {props.location}</h4>
          <div>
            {props.trims.map((t) => (
              <div
                key={t.id}
                style={{
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
            ))}{' '}
          </div>
        </div>
      ) : (
        <div>
          <h4>There are no options for {props.location}</h4>
        </div>
      )}
    </div>
  );
};

export default DealerInfo;
