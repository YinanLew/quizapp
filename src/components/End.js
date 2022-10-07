import React, { useContext } from "react";
import { QuizStateContext } from "../Context";
import "./end.css";

function End() {
  const { score } = useContext(QuizStateContext);

  return (
    <div className="end">
      <div className="text-container">
        <div>
          <h1>Congratulations! You did it.</h1>
        </div>
        <div>
          <h2>You final scores are {score}</h2>
        </div>
      </div>
    </div>
  );
}

export default End;
