import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/Questions';
import { GameStateContext, QuizContext } from '../Helpers/Contexts';

function Quiz() {
    const [ score, setScore, gameState, setGameState ] = useContext(GameStateContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");




    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen){
            setScore(score + 1 );
        }
        alert(score);
        setCurrQuestion(currQuestion + 1);
    } 

    const finishQuiz = () => {

        console.log('This function is working!');
        this.setGameState("endscreen");
    }
    
    return (
        <div className='Quiz'>
            <h1>{Questions[currQuestion].prompt} </h1>
            <div className='options'>
                <button onClick={() => {setOptionChosen("A")}}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => {setOptionChosen("B")}}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => {setOptionChosen('C')}}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => {setOptionChosen('D')}}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion === Questions.length - 1? (<button onClick={finishQuiz}>Finish Quiz</button>) : (<button onClick={nextQuestion}> Next Question </button>) }


        </div>
    )
}
 
export default Quiz
