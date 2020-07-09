import React from 'react';

const DealerInfo = (props) => {
  
const {setDealer} = props
  return (
    <div className="car-container">
      {props.trims.length ? (
        <div className="results" >
          <h4>Availability for {props.location}</h4>
          <div>
            {props.trims.map((t) => (
              <div 
                key={t.id}
                style={{
                  // margin: '10px',
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
                  <button onClick={() => console.log("A function runs that POSTS req.use")} className="request-btn">Request Quote</button>
                  <hr />
                </div>
              </div>
            ))}{' '}
          </div>
        </div>
      ) : (
        <div className="results">
            <span><h5>There are no options for {props.location}</h5></span>
        </div>
      )}
      <button  className="reset request-btn" onClick={() => setDealer(null)}>Clear Selection</button>
    </div>
  );
};

export default DealerInfo;
