import React, { useState } from 'react';
import Quiz from './components/Quiz';
import MainMenu from './components/MainMenu';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helpers/Contexts';
 
import './App.css'
function App() {
    const [ gameState, setGameState] = useState('menu');
   // const [ play, setPlay] = useState('');
    const [score, setScore] = useState(0);

    return (
        <div className='App'>
        <h1>Quiz App</h1>
            <QuizContext.Provider value={{ gameState, setGameState, score, setScore,}}>
                {gameState === 'menu' && <MainMenu />}
                {gameState === 'quiz' && <Quiz />}
                {gameState === 'endscreen' && <EndScreen/>}
            </QuizContext.Provider>
            
        </div>
    )
}

export default App
