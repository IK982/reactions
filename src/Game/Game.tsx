import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";
import {GameMode} from "../App"

interface GameProps{
    setMode: (mode: GameMode)=> void;
}
export const Game: FunctionComponent <GameProps> = ({setMode}) => {
    const [currentScore, setCurrentScore] = useState(0);
    return (
        <section className={styles.content}>
            <h1>{currentScore}</h1>
            <Board currentScore={currentScore} setCurrentScore={setCurrentScore} setMode={setMode}/>
        </section>
    );
};
