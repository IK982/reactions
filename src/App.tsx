import React, {FunctionComponent, useState} from 'react';
import {Game} from "./Game/Game";
import styles from "./App.module.scss";
import {GameOver} from "./GameOver/GameOver";
import moment from "moment";

export type Page = "Game" | "GameOver";



export const App: FunctionComponent = () => {
    return (
        <main className={styles.main}>
            <AppContent/>
        </main>
    );
};

const AppContent = () => {
    const [page, setPage] = useState<Page>("GameOver");
    const [startTime, setStartTime] = useState(moment.now())
    const [endTime, setEndTime] = useState(moment.now())

    const startGame = (): void => {
        setPage("Game");
        setStartTime(moment.now());
    }
    
    const endGame = (): void => {
        
        setPage("GameOver");
        setEndTime(moment.now());
    }
    
    const gameTimeInMilliseconds = endTime - startTime;
    
    if (page === "GameOver") {
        return <GameOver startGame={startGame} gameTimeInMilliseconds={gameTimeInMilliseconds}/>
    }
    
    return <Game endGame={endGame} />
}


