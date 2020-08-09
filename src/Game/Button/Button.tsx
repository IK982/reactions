import React, { FunctionComponent, useState } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    onButtonPressed: () => void;
    
}

export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, onButtonPressed}) => {


    const isActive = id === activeButtonId;
    const getClassName = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`
        }
        return styles.button;
    }

    const buttonClicked = (): void => {
        if(isActive) {
            onButtonPressed();
       
            
        }
    }

  
    return (

        <circle onClick={buttonClicked} className={getClassName()} cx={x} cy={y} r={100} />

    );
};

    // returns a random integer between 0 and the number of buttons.


