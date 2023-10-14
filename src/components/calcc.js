import React, { useState, useEffect } from "react";
import * as math from "mathjs";
import "./styles.css"; 

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleReset = () => {
    setInput("");
    setResult("");
  };

  const handleEvaluate = () => {
    try {
      const calculatedResult = math.evaluate(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Invalid Expression");
    }
  };

  useEffect(() => {
    document.title = "Calculator";
  }, []);

  const calculatorStyle = {
    width: "300px",
    backgroundColor: "transparent",
    marginTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  };

  const displayStyle = {
    width: "296px",
    height: "200px",
    fontSize: "40px",
    textAlign: "right",
    border: "none",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    outline: "none",
    backgroundColor: "rgb(27, 25, 138)",
    color: "rgb(182, 176, 212)",
  };

  const buttonsStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  };

  const numbersStyle = {
    width: "70%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  const operatorsStyle = {
    width: "30%",
    display: "grid",
  };

  const buttonStyle = {
    fontSize: "24px",
    backgroundColor: "rgb(7, 7, 66)",
    color: "rgb(182, 176, 212)",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "rgb(4, 4, 56)",
  };

  const buttonBottomLeftStyle = {
    borderBottomLeftRadius: "15px",
  };
  
  const buttonBottomRightStyle = {
    borderBottomRightRadius: "15px",
  };
  
  const buttonNormalEdgeStyle = {
    borderRadius: "0",
  };
  
  return (
    <div style={calculatorStyle} className="calculator">
      <div>
        <input
          type="text"
          value={input}
          readOnly
          style={displayStyle}
          id="display"
        />
        
      </div>
      <div style={buttonsStyle} className="buttons">
        <div style={numbersStyle} className="Numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number.toString())}
              style={buttonStyle}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => setInput((prevInput) => prevInput.slice(0, -1))}
            style={{ ...buttonStyle, ...buttonHoverStyle, ...buttonBottomLeftStyle }}
          >
            ←
          </button>
          <button
            onClick={() => handleButtonClick("0")}
            style={{ ...buttonStyle, ...buttonNormalEdgeStyle, ...buttonHoverStyle }}
            id="button-bottom-left"
          >
            0
          </button>
          <button onClick={handleReset} style={buttonStyle}>
            C
          </button>
        </div>
        <div style={operatorsStyle} className="Operators">
          {["/", "*", "-", "+"].map((operator, index) => (
            <button
              key={operator}
              onClick={() => handleButtonClick(operator)}
              style={{ ...buttonStyle, ...buttonHoverStyle }}
              // Set grid-column for '=' button to occupy two spaces
              {...(index === 3 && { gridColumn: "span 2" })}
            >
              {operator}
            </button>
          ))}
          <button
            onClick={handleEvaluate}
            style={{ ...buttonStyle, ...buttonHoverStyle, ...buttonBottomRightStyle }}
            id="button-bottom-right"
          >
            =
          </button>
        </div>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
