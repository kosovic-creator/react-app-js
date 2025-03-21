/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import  './index2.css';


const initialState = { count: 0 };

function reducer(state, action) {

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - 1 };
    case "inc":
      return { ...state, count: state.count + 1};

    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <button onClick={dec}>-</button>
        <input value={count} />
        <button onClick={inc}>+</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
/////////////////////////////////////////////////////////////////////////









function DateCounter1() {
  const [count, setCount] = useState(0);

  const dec = function () {
    setCount((count) => count - 1);
  };
  const inc = function () {
    setCount((count) => count + 1);
  };
  const reset = function () {
    setCount(0);
  };
  return (
    <div className="counter">
      <div>
        <button onClick={dec}>-</button>
        <input value={count} />
        <button onClick={inc}>+</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

