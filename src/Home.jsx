import React, { useState } from "react";
import About from "./About";

const Home = ({ text }) => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <>
      <div>

        <button
          onClick={() => {
            increment();
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          decrease
        </button>
      </div>


      <About data={count}>
      </About>
    </>
  );
};

export default Home;
