import React from "react";
import {FunctionComponent} from "react";
import styles from "./ScoreBoard.module.scss";

interface ScoreBoardProps {
    score: number;
}

export const ScoreBoard: FunctionComponent<ScoreBoardProps> = ({score}) => {
    return (
        <section className={styles.section}>
            <div className={styles.board}>
                <div className={styles.score}>{score}</div>
            </div>
        </section>
    );
}