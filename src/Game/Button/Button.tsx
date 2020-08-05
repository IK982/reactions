import React, {FunctionComponent} from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
}

export const Button: FunctionComponent<ButtonProps> = ({id, x, y, activeButtonId}) => {

    
    const isActive = id === activeButtonId;
    const getClassName = ():string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`

        }
        return styles.button;

    }
    return (
        <circle className={getClassName()} cx={x} cy={y} r={100}/>

    );
};