import "./styles.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  function handleInput() {
    //please put your logic here
    let number_sanitized = number;
    let reversed_number_sanitized = number_sanitized
      .split("")
      .reverse()
      .join("");
    let difference = reversed_number_sanitized - number_sanitized;
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
    </div>
  );
}
