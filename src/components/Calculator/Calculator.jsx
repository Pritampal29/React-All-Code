import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [data, setData] = useState("");

  const getValue = (event) => {
    setData(data + event.target.value);
  };

  const finalResult = () => {
    try {
      const processedData = data.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
      setData(eval(processedData).toString());
    } catch (error) {
      setData("Error");
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="calculator mx-auto">
          <input
            type="text"
            name="data"
            placeholder="0"
            value={data}
            readOnly
          />

          <div className="buttons-container">
            <div className="standard-buttons">
              <button onClick={() => setData("")} className="btn">
                AC
              </button>
              <button
                onClick={() => setData(data.slice(0, -1))}
                className="btn"
              >
                DEL
              </button>
              <button onClick={getValue} value="%" className="btn">
                %
              </button>
              <button onClick={getValue} value="+" className="btn operator">
                +
              </button>

              <button onClick={getValue} value="7" className="btn">
                7
              </button>
              <button onClick={getValue} value="8" className="btn">
                8
              </button>
              <button onClick={getValue} value="9" className="btn">
                9
              </button>
              <button onClick={getValue} value="/" className="btn operator">
                ÷
              </button>

              <button onClick={getValue} value="4" className="btn">
                4
              </button>
              <button onClick={getValue} value="5" className="btn">
                5
              </button>
              <button onClick={getValue} value="6" className="btn">
                6
              </button>
              <button onClick={getValue} value="*" className="btn operator">
                ×
              </button>

              <button onClick={getValue} value="1" className="btn">
                1
              </button>
              <button onClick={getValue} value="2" className="btn">
                2
              </button>
              <button onClick={getValue} value="3" className="btn">
                3
              </button>
              <button onClick={getValue} value="-" className="btn operator">
                −
              </button>

              <button onClick={getValue} value="0" className="btn">
                0
              </button>
              <button onClick={getValue} value="00" className="btn">
                00
              </button>
              <button onClick={getValue} value="." className="btn">
                .
              </button>
              <button onClick={finalResult} className="btn equals">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
