import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import _ from "lodash";

function App() {
  const [userValue, setUserValue] = useState(0);
  const [output, setOutput] = useState(0);
  //   const debounced = useRef(_.debounce(value => setOutput(value), 600));

  //   const updateUserValue = useCallback(({ target: { value } }) => {
  //     setUserValue(value);
  //     debounced.current(value);
  //   }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutput(userValue);
    }, 600);
    return () => {
      console.log("useeffect returned");
      clearTimeout(timeout);
    };
  }, [userValue]);

  const updateOutput = e => {
    setUserValue(e.target.value);
  };
  return (
    <div className="App">
      <br></br>
      <div>
        <h1>Input</h1>
        <input
          //ref={inputRef}
          value={userValue}
          type="number"
          onChange={updateOutput}
        ></input>
      </div>
      <br></br>
      <div>
        <h1>Output</h1>
        {output}
      </div>
    </div>
  );
}

export default App;
