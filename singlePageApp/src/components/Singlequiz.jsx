import React, { useState } from 'react';
import Home from './Home';

export default function Singlequiz() {
    const questions = [
        {
            questionText: 'The HTML Stands for -',
            answerOptions: [
                { answerText: 'filter', isCorrect: false },
                { answerText: 'visibility', isCorrect: false },
                { answerText: 'overlay', isCorrect: false },
                { answerText: 'Hyper Text Markup Language', isCorrect: true },
            ],
        },
        {
            questionText: 'The property in CSS used to change the background color of an element is -',
            answerOptions: [
                { answerText: 'Style', isCorrect: false },
                { answerText: 'background-color', isCorrect: true },
                { answerText: 'color', isCorrect: false },
                { answerText: 'None of these', isCorrect: false },
            ],
        },
        {
            questionText: 'CSS stands for -',
            answerOptions: [
                { answerText: 'style sheets', isCorrect: false },
                { answerText: 'React Style sheet', isCorrect: false },
                { answerText: 'Cascading style sheets', isCorrect: true },
                { answerText: 'None of the above', isCorrect: false },
            ],
        },
        {
            questionText: ' Which of the following is the correct syntax to display the hyperlinks without any underline?',
            answerOptions: [
                { answerText: 'a {text-decoration : none;}', isCorrect: true },
                { answerText: 'a {text-decoration : underline;}', isCorrect: false },
                { answerText: 'a {decoration : no-underline;}', isCorrect: false },
                { answerText: 'None of these', isCorrect: false },
            ],
        },
        {
            questionText: 'Are the negative values allowed in padding property?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: false },
                { answerText: 'No', isCorrect: true },
                { answerText: 'Cant say', isCorrect: false },
                { answerText: 'Maybe', isCorrect: false },
            ],
        },
        
        {
            questionText: 'Which of the following class in Bootstrap is used to provide a responsive fixed width container?',
            answerOptions: [
                { answerText: '.conatiner=fixed', isCorrect: false },
                { answerText: '.container-fluid', isCorrect: false },
                { answerText: '.container', isCorrect: true},
                { answerText: 'none of these', isCorrect: false },
            ],
        },
        {
            questionText: ' Which of the following is the correct syntax of creating a standard navigation tab?',
            answerOptions: [
                { answerText: '<ul class="nav nav-tabs">', isCorrect: true},
                { answerText: '<ul class="navigation nav-tabs">', isCorrect: false },
                { answerText: '<ul class="navigation tabs">', isCorrect: false },
                { answerText: '<ul class="nav tab">', isCorrect: false },
            ],
        },
        {
            questionText: 'Which type of JavaScript language is ',
            answerOptions: [
                { answerText: 'Object-Oriented', isCorrect: false },
                { answerText: 'Object-based', isCorrect: true },
                { answerText: 'Assembly-language', isCorrect: false },
                { answerText: 'High Level', isCorrect: true },
            ],
        },
        {
            questionText: ' When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints',
            answerOptions: [
                { answerText: 'Prints an exception error', isCorrect: false },
                { answerText: 'Prints an overflow error', isCorrect: false },
                { answerText: 'Prints the value as such', isCorrect: false },
                { answerText: 'MaybeDisplays "Infinity"', isCorrect: true },
            ],
        },
        {
            questionText: 'Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?',
            answerOptions: [
                { answerText: 'toExponential()', isCorrect: false },
                { answerText: 'toFixed()', isCorrect: true },
                { answerText: 'toPrecision()', isCorrect: false },
                { answerText: 'toLocaleString()', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        
        
        <div className='app'>
            <ul>
                <li><a href="Home.jsx">Home</a></li>
                <li><a href="">Quizzes</a></li>
                <li><a href="About.jsx">About</a></li>
                <li><a href="Contact.jsx">Contact</a></li>
                </ul>
            <h1 style={{"color":"blue"}}>Quiz Created in ReactJS</h1>
            {showScore ? (
                <div className='score-section' style={{"color":"blue"}}>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section' style={{"color":"blue"}}>
                        <div className='question-count'><br />
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div><br />
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>

    );
}