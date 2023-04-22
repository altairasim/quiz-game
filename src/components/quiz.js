import { useState } from "react";
import "./quiz.css";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [score, setScore] = useState(0);
  const [liClicked, setLiClicked] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(true);
  const [clicked, setClicked] = useState();

  function addClaas(event) {
    if (event.target.innerText === currentQuestion.answer && !clicked) {
      setAnswerCorrect(true);
      setScore(score + 1);
      console.log(answerCorrect);
      setAnswerCorrect(true);
      setLiClicked(true);
      setClicked(true);
      return;
    } else if (!clicked) {
      setAnswerCorrect(false);
      console.log(answerCorrect);
      setClicked(true);
    }
    setLiClicked(true);
  }
  function buttonClick() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setLiClicked(false);
      setClicked(false);
    } else {
      alert(`End of quiz you got ${score} out of ${questions.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  }
  return (
    <div className="container">
      <h2>{currentQuestion.question}</h2>
      <h2>{`Score: ${score}`}</h2>
      <ol className="list" type="A">
        <li onClick={addClaas}>{currentQuestion.options[0]}</li>
        <li onClick={addClaas}>{currentQuestion.options[1]}</li>
        <li onClick={addClaas}>{currentQuestion.options[2]}</li>
        <li onClick={addClaas}>{currentQuestion.options[3]}</li>
      </ol>
      <input
        className={`nextBtn ${liClicked ? "show" : "hidden"}`}
        type="button"
        value="next"
        onClick={buttonClick}
      />
    </div>
  );
};

export default Quiz;
