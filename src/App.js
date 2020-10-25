import React from 'react';
import './Styles.css';

const App = () => {
  return (
    <React.Fragment>
      <div>
        <div className='row full-height full-width'>
          <div className='col-md-6 col-sm-12 full-height'>
            <div className='d-flex align-items-end justify-content-end w-100'>
              <div className='p-3 text-right'>
                <h3 className='title'>Princeps mathematicorum</h3>
                <h2 className='header-text'>Johann Carl Friedrich Gauss</h2>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 full-height'>
            <div className='d-flex flex-column align-items-center justify-content-center w-100'>
              <div className='w-50 my-3 logo-holder'></div>
              <div
                className='card my-3 w-75 link-box'
                onClick={() => window.open('http://localhost:3001', '_blank')}
              >
                <div className='card-body'>
                  <h4 className='title'>Credit Cards</h4>
                </div>
              </div>
              <div
                className='card my-3 w-75 link-box'
                onClick={() => window.open('http://localhost:3002', '_blank')}
              >
                <div className='card-body'>
                  <h4 className='title'>Liquidity</h4>
                </div>
              </div>
              <div
                className='card my-3 w-75 link-box'
                onClick={() => window.open('http://localhost:3003', '_blank')}
              >
                <div className='card-body'>
                  <h4 className='title'>Payment Initiation</h4>
                </div>
              </div>
              <div
                className='card my-3 w-75 link-box'
                onClick={() => window.open('http://localhost:3004', '_blank')}
              >
                <div className='card-body'>
                  <h4 className='title'>RM Planner</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
