import "./styles.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [reverse, setReverse] = useState(0);
  function handleInput() {
    //please put your logic here
    let number_sanitized = number;
    let reversed_number_sanitized = number_sanitized.split("").reverse();
    let flag = true;
    reversed_number_sanitized = reversed_number_sanitized.map((e) => {
      if (flag) {
        if (e > 0) {
          flag = false;
          return e;
        }
      } else {
        return e;
      }
    });
    reversed_number_sanitized = reversed_number_sanitized.join("");
    let difference = reversed_number_sanitized - number_sanitized;

    setReverse(reversed_number_sanitized);
    setResult(Math.abs(difference));
  }
  function handleNumber(e) {
    let sanitize_number = e.replace(/\D/g, "");
    setNumber(sanitize_number);
  }

  return (
    <div className="App">
      <div>
        Number:{" "}
        <input value={number} onChange={(e) => handleNumber(e.target.value)} />
        <button onClick={() => handleInput()}>Submit</button>
      </div>
      <div>Result: {result}</div>
      <div>Reverse: {reverse}</div>
    </div>
  );
}
