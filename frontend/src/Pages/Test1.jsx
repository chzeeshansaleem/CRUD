import React, { useEffect, useState } from "react";

const Test1 = () => {
  const [first, setfirst] = useState(0);
  const counter = () => {
    setfirst(first + 1);
  };
  const reset = () => {
    setfirst(0);
  };

  useEffect(() => {
    console.log(first);
  }, [first]);

  return (
    <div>
      <div className="text-center display-3"> Counter is {first}</div>
      <button className="btn btn-primary form-control" onClick={counter}>
        Increament
      </button>
      <button className="btn btn-primary form-control mt-4" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Test1;
