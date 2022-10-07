import React, { useState } from "react";
import QuestionsList from "./components/questionsList/QuestionsList";
import End from "./components/End";
import { QuizStateContext } from "./Context";

function App() {
  const [quizState, setQuizState] = useState("quiz");
  const [score, setScore] = useState(0);

  return (
    <div>
      <QuizStateContext.Provider
        value={{ quizState, setQuizState, score, setScore }}
      >
        <div className="App">{quizState === "quiz" && <QuestionsList />}</div>
        <div>{quizState === "end" && <End />}</div>
      </QuizStateContext.Provider>
    </div>
  );
}

export default App;
