import React, { useState, useEffect } from "react";
import useDocumentTitle from "./Hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

 useDocumentTitle(count)

  return (
    <div>
      <h4 style={{color:"red"}}>Customhook</h4>
      <button onClick={() => setCount(count + 1)}>Count -{count}</button>
    </div>
  );
}

export default DocTitleOne;
