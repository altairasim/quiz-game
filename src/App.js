import "./App.css";
import Quiz from "./components/quiz";

function App() {
  const questions = [
    {
      question: "Which animal is known as the Ship of the Desert?",
      options: ["Cow", "Camel", "Horse", "Cat"],
      answer: "Camel",
    },
    {
      question: "How many days are there in a week?",
      options: ["4 Days", "6 Days", "7 Days", "8 Days"],
      answer: "7 Days",
    },
    {
      question: "How many letters are there in the English alphabet?",
      options: ["26", "20", "19", "24"],
      answer: "26",
    },
    {
      question: "How many hours are there in a day?",
      options: ["26", "20", "19", "24"],
      answer: "24",
    },
    {
      question: "Rainbow consist of how many colours?",
      options: ["9", "7", "4", "3"],
      answer: "7",
    },
  ];

  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
