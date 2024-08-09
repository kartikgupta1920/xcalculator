// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression using eval
      const evalResult = eval(input);
      setResult(evalResult);

      // Handle edge cases
      if (input === '') {
        setResult('Error');
      } else if (input.includes('/0') && !input.includes('/0.0')) {
        setResult(evalResult === Infinity ? 'Infinity' : evalResult);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
        <h1>React Calculator</h1>
      <input type="text" id="input" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleCalculate()}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
