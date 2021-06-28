import React from 'react';
import '../App.css';

const RightPanel = (props) => {
  return (
    <div className='right-panel'>
      <div>
        <h2 className="calculation">Numbers Selected</h2>
        {props.markNumbers.map((num) => (
          <p key={num.id}>Mark: {num.id}</p>
        ))}
      </div>
      <div>
        <h2 id="total"style={{ textDecoration: "bold" ,fontSize:"20px",fontWeight:"bold",lineHeight:"180%",  padding:"0 10px"}}>Total: ${props.totalAmount}</h2>
      </div>
    </div>
  );
};

export default RightPanel;