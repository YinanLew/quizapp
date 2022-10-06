import React, { useState, useContext } from 'react';
import {QuizStateContext} from '../../Context';
import {DUMMY_QA} from '../../data';
import './questionsList.css';

function QuestionsList() {

    const { score, setScore, setQuizState } = useContext(QuizStateContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [chosen, setChosen] = useState('');

    const nextQuestion = () => {
        if(DUMMY_QA[currentQuestion].answer === chosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
      }

      const finishQuiz = () => {
        if(DUMMY_QA[currentQuestion].answer === chosen) {
            setScore(score + 1);
        }
        setQuizState('end');
      }

  return (
    <>
      <div>
        <div className='header'>
            <div className='title'>
                <h3>KMQ</h3>
            </div>
            <div className='btn'>
                {currentQuestion === DUMMY_QA.length - 1 ? (
                    <button onClick={finishQuiz}>Finished</button>
                ) : (
                    <div>
                        <button onClick={nextQuestion}>Next</button>
                    </div>
                )}
            </div>
        </div>
        </div>
        <div className='container'>
            <div className='question'>
                <h1>
                    {DUMMY_QA[currentQuestion].prompt}
                </h1>
                <h2>
                {DUMMY_QA[currentQuestion].question}
                </h2>
            </div>
            <div className='answer'>
                <div>
                    Select only one
                </div>
                <div>
                    <button onClick={() => setChosen('A')}>{DUMMY_QA[currentQuestion].optionA}</button>
                </div>
                <div>
                    <button onClick={() => setChosen('B')}>{DUMMY_QA[currentQuestion].optionB}</button>
                </div>
                <div>
                    <button onClick={() => setChosen('C')}>{DUMMY_QA[currentQuestion].optionC}</button>
                </div>
                <div>
                    <button onClick={() => setChosen('D')}>{DUMMY_QA[currentQuestion].optionD}</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuestionsList