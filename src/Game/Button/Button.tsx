import React, {FunctionComponent} from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeId: number;
    onActiveButtonPressed: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({id, x, y, activeId, onActiveButtonPressed}) =>{
    const isActive = id === activeId;
    const className = isActive ? `${styles.button} ${styles.active}` : styles.button;
    
    const onButtonClicked = () => {
        if (isActive) {
            onActiveButtonPressed();
        }
    }
    
    return (
        <circle onClick={onButtonClicked} className={className} cx={x} cy={y} r={100}/>
    );
};


