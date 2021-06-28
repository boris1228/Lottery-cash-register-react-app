import React from 'react';
import '../App.css';

const NumberButton = (props) => {
  return (
    <div className='number-container'>
      <div className='num-container'>
        {props.numbers.map((num) => (
          <div
            id={num.id}
            key={num.id}
            onClick={() => {
              props.onNumberClick(num);
            }}
            className={num.highlight ? 'num num-highlight' : 'num'}
          >
            {num.id}
          </div>
        ))}
      </div>
      <div className='num-btn-container'>
        <button className='num-btn random-btn' onClick={() => props.onRandomClick()}>
          RANDOM
        </button>
        <button className='num-btn cash-btn' onClick={() => props.onCashoutClick()}>
          CASH
        </button>
        <button className='num-btn clear-btn' onClick={() => props.onClearClick()}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default NumberButton;