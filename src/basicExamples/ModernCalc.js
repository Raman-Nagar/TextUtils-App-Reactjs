import React, { useState } from "react";
export default function Home(props) {
  let [res, setRes] = useState("");
  function Calc() {
    let a = [],
      a1 = ["+", "-", "*", "/", "."];
    for (let i = 0; i < 10; i++) {
      a.push(
        <button value={i} onClick={(e) => Input(e)}> {i} </button>
      );
    }
    for (let j = 0; j < a1.length; j++) {
      a.push(
        <button value={a1[j]} onClick={(e) => Input(e)}>
          {a1[j]}
        </button>
      );
    }
    return a;
  }
  const Input = (e) => {
    setRes((res += e.target.value));
    e.preventDefault();
  };
  const Equal = (e) => {
    setRes(eval(res));
    e.preventDefault();
  };
  const Delet = (e) => {
    setRes(e.target.value);
    e.preventDefault();
  };
  return (
    <div>
      <h1>{props.raman}</h1>
      <style>
        {
          ".ram{width:310px; font-size:30px; border:2px solid orangered; border-radius:15px;} .rama{width:300px; border:2px solid orangered; border-radius:15px;}"
        }
      </style>
      <div className="ram">
        <p className="rama">{res}</p>
        {Calc()}
        <br />
        <button value="" onClick={(e) => Equal(e)}>
          =
        </button>
        <button value=" " onClick={(e) => Delet(e)}>
          del
        </button>
      </div>
    </div>
  );
}
