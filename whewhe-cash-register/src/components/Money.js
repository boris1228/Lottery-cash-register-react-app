import React from 'react';
import '../App.css';
import num from '../images/num.png';

const Money = (props) => {
  const priceArray = [1, 5, 10, 20];

  return (
    <div className='left-panel'>
      <h3>Select Price here:</h3>
      <div className='button-container'>
        {priceArray.map((amt) => (
          <button id={amt} key={amt} onClick={() => {
              props.onPriceClick(amt);
            }}className='button'
          >
            ${amt}
          </button>         
        ))}
      </div>
      <img src={num} id="img" alt="num"></img>
    </div>
  );
};

export default Money;