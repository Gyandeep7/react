import React, { useState } from "react"

const questions = [
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Hyderabad", "Bangloore"],
    correctAnswer: "New Delhi",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Whale", "Giraffe", "Lion"],
    correctAnswer: "Whale",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Hemingway", "Tolstoy", "Austen"],
    correctAnswer: "Shakespeare",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    correctAnswer: "Au",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Korea", "Vietnam"],
    correctAnswer: "Japan",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Michelangelo", "Leonardo da Vinci", "Picasso"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O",
  },
];

const QuizApp=()=>{
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion=(selectedOption)=>{
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section" style={{"color":"blue"}}>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <div className="question-section" style={{"color":"blue"}}>
            <h2>Question {currentQuestion + 1}/10</h2>
            <p>{questions[currentQuestion].question}</p>
          </div>
          <div className="options-section" style={{"color":"blue"}}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleNextQuestion(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default QuizApp;
