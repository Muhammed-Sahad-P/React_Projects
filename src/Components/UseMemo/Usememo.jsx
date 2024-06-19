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
    <div>
      <h4 style={{ color: "red" }}>Usememo</h4>
      <button onClick={incrementCounterOne}>Counter 1 : {counterOne}</button>
      <span>{isEven ? "EVEN" : "ODD"}</span>
      <button onClick={incrementCounterTwo}>Counter 2 : {counterTwo}</button>
    </div>
  );
}

export default Usememo;
