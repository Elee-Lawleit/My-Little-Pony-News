import React, { useState } from "react";

export default function Counter() {
  const [value, changeValue] = useState(0);
  const increment = () => {
    changeValue(value + 1);
  };
  const decrement = () => {
    changeValue(value - 1);
  };
  return (
    <div className="container flex gap-1 flex-col m-auto">
      <p className="text-center text-lg">{value}</p>
      <button onClick={increment} className="bg-blue-300 p-3 rounded-md">
        Incremenet
      </button>
      <button onClick={decrement} className="bg-blue-300 p-3 rounded-md">
        Decrement
      </button>
    </div>
  );
}
