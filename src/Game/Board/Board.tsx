import React, {FunctionComponent, useState} from "react";
import styles from "./Board.module.scss";
import {Button} from "../Button/Button";


const buttonPositions = [
    { x: 150, y: 300 },
    { x: 150, y: 1000 },
    { x: 150, y: 1700 },
    { x: 850, y: 300 },
    { x: 850, y: 1000 },
    { x: 850, y: 1700 },
    { x: 500, y: 650 },
    { x: 500, y: 1350 },
]

interface BoardProps {
    incrementScore: () => void;
   
}

export const Board: FunctionComponent<BoardProps> = ({ incrementScore}) => {
    const [activeId, setActiveId] = useState(0);
    
    const selectNextButton = () => {
        const nextButtonId = Math.floor(Math.random() * buttonPositions.length);
        setActiveId(nextButtonId);
    }
    
    const buttonCompleted = () => {
        incrementScore();
        selectNextButton();
    }
    
    const buttons = buttonPositions.map(({x, y}, index) => 
        <Button id={index} x={x} y={y} activeId={activeId} onActiveButtonPressed={buttonCompleted}/>
    );
    
    return (
        <svg className={styles.board} viewBox="0, 0, 1000, 2000">
            {buttons}
        </svg>
    );
};
