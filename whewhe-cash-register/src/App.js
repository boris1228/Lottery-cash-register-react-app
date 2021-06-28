import React from 'react';
import './App.css';
import NumberButton from './components/NumberButton';
import Money from './components/Money';
import RightPanel from './components/RightPanel';

import { useState } from 'react';

const App = () => {
  const numArray = [{
    id: 1,
    highlight: false
  },
  {
    id: 2,
    highlight: false
  },
  {
    id: 3,
    highlight: false
  },
  {
    id: 4,
    highlight: false
  },
  {
    id: 5,
    highlight: false
  },
  {
    id: 6,
    highlight: false
  },
  {
    id: 7,
    highlight: false
  },
  {
    id: 8,
    highlight: false
  },
  {
    id: 9,
    highlight: false
  },
  {
    id: 10,
    highlight: false
  },
  {
    id: 11,
    highlight: false
  },
  {
    id: 12,
    highlight: false
  },
  {
    id: 13,
    highlight: false
  },
  {
    id: 14,
    highlight: false
  },
  {
    id: 15,
    highlight: false
  },
  {
    id: 16,
    highlight: false
  },
  {
    id: 17,
    highlight: false
  },
  {
    id: 18,
    highlight: false
  },
  {
    id: 19,
    highlight: false
  },
  {
    id: 20,
    highlight: false
  }
];


  const [allNumbers, setNumbers] = useState(numArray);
  const [selectNumbers, setSelectNumbers] = useState([]);
  const [total, setTotal] = useState(0);


  const addPrice = (price) => {
    if (selectNumbers.length !== 5) {

      alert("you need to select 5 numbers");

    } else {
      let Amount = total + price;

      setTotal(Amount);
    }
  };

  const selectNumber = (num) => {
    if (selectNumbers.length < 5 || num.highlight === true) {
      
      allNumbers[num.id - 1].highlight = !allNumbers[num.id - 1].highlight;
      setNumbers(allNumbers);

      let newNumbers = allNumbers.filter((num) => num.highlight === true);
      setSelectNumbers(newNumbers);
    } else {
      alert("You can only select 5 numbers");
    }
  };

  const clear = () => {
    setNumbers(numArray);
    setSelectNumbers([]);
    setTotal(0);
  };

  const random = () => {
    let arr = [];
    while (arr.length < 5) {
      let randNum = Math.floor(Math.random() * 20) + 1; 
      if (arr.indexOf(randNum) === -1) arr.push(randNum);
    }

    let newNumbers = numArray;
    for (let i = 0; i < arr.length; i++) {
      let index = arr[i];

      newNumbers[index - 1].highlight = true;
    }


    let displayNumbers = newNumbers.filter((num) => num.highlight === true);

    setNumbers(newNumbers);
    setSelectNumbers(displayNumbers);
  };

  const cash = () => {

    if (selectNumbers.length === 5 && total !== 0) {
      let displayNumString = [];
      selectNumbers.forEach((num) => {
        displayNumString.push(num.id);
      });
      let alertMsg = `highlight nums: ${displayNumString[0]}, ${displayNumString[1]}, ${displayNumString[2]}, ${displayNumString[3]}, ${displayNumString[4]}\nTotal: $${total}`;
      alert(alertMsg);
    } else {
      alert(
        `You should select number and money then cash out`
      );
    }
  };


  return (
    <div className='game'>
      <h1 className="title"> WHE WHE on D'Avenue</h1>
      <main>
        <Money onPriceClick={addPrice} />
        <NumberButton
          numbers={allNumbers}
          onNumberClick={selectNumber}
          onClearClick={clear}
          onRandomClick={random}
          onCashoutClick={cash}
        />
        <RightPanel markNumbers={selectNumbers} totalAmount={total} />
      </main>
    </div>
  );
};

export default App;
