import React, {FunctionComponent} from "react";
import styles from "./GameOver.module.scss";

interface GameOverProps {
    startGame: () => void;
    gameTimeInMilliseconds: number;
} 

export const GameOver: FunctionComponent<GameOverProps> = ({startGame, gameTimeInMilliseconds}) => {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Contratulations, you finished the Game</h1>
            <p className={styles.message}>You completed the game in {gameTimeInMilliseconds/1000} seconds.</p>
            <button className={styles.button} onClick={startGame}>Try again</button>
        </section>
    );
}