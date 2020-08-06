import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";

export const Game: FunctionComponent = () => {
    const [currentScore, setCurrentScore] = useState(0);
    return (
        <section className={styles.content}>
            <h1>{currentScore}</h1>
            <Board currentScore={currentScore} setCurrentScore={setCurrentScore}/>
        </section>
    );
};
