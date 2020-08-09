import React, { FunctionComponent, useState } from 'react';
import { Game } from "./Game/Game";
import styles from "./App.module.scss";
import moment from 'moment';

// import { Button } from './Game/Button/Button';



// create a new type that defines the possible 'modes' the game can be in.
// I've called them 'Playing' for when they are clicking buttons, and 'Finished' for once the hame is over.
export type GameMode = "Playing" | "Finished";
// create some state to hold the current mode of the game.

interface EndOfGameProps {
    setMode: (Newmode: GameMode) => void;
    
}

export const EndOfGame: FunctionComponent <EndOfGameProps>= ({setMode}) => {

    
    return (
        <div>
            Congratulations! End of Game. <br></br>
            Restart Game
            <button onClick ={() => setMode ("Playing")}>Start Again</button>
            
        </div>

    );
}

export const App: FunctionComponent = () => {

    const [mode, setMode] = useState<GameMode>("Playing");
    const [gameStartTime, setGameStartTime] = useState (moment.now());
    const [gameEndTime, setGameEndTime] = useState (moment.now());

    const startGame = () => {
        setMode("Playing");
        setGameStartTime(moment.now());
    }

    const endGame = () => {
        setMode("Finished");
        setGameEndTime(moment.now());
    }

    //time in  mill
    const gameTimeInMilliseconds = gameEndTime - gameStartTime;
    const gameTimeInSeconds = gameTimeInMilliseconds / 1000;
    
    if (mode === "Finished") {
        return (


            <main className={styles.main}>
                <p>Congratulations - you completed the game in {gameTimeInSeconds} seconds.</p>
                <Game setMode={setMode}/>
                <button onClick ={startGame}>Start Game</button>
                

            </main>

        );
    }
    return (
        
        <EndOfGame setMode={setMode}/>
        
    )
};



