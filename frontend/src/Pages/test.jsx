import React, { useState } from "react";

const test = () => {
  const [first, setfirst] = useState(0);
  const counter = () => {
    setfirst(first + 1);
  };

  return (
    <div>
      <button onClick={counter}>Click me</button>
    </div>
  );
};

export default test;
