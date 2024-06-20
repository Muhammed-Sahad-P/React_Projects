import React, { useState, useMemo } from "react";

function Usememo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    return setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    return setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div className="memodiv">
      <h2>Use Memo</h2>
      <button onClick={incrementCounterOne}>Counter 1 : {counterOne}</button>
      <br></br>
      <br></br>
      <span>{isEven ? "EVEN" : "ODD"}</span>
      <br></br>
      <br></br>
      <button onClick={incrementCounterTwo}>Counter 2 : {counterTwo}</button>
    </div>
  );
}

export default Usememo;
