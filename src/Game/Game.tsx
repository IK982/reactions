import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";
import {ScoreBoard} from "./ScoreBoard/ScoreBoard";

interface GameProps {
    endGame: () => void;
}

export const Game: FunctionComponent<GameProps> = ({endGame}) => {
    const [score, setScore] = useState(0);
    
    const incrementScore = () => {
        if (score >= 90) {
            endGame();
        }
        setScore(score + 10);
    }
    
    return (
        <section className={styles.content}>
            <ScoreBoard score={score}/>
            <Board incrementScore={incrementScore}/>
        </section>
    );
};