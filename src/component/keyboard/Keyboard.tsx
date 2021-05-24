import React from "react";
import s from "./Keyboard.module.css"

export const Keyboard = () => {

    return (
        <div className={s.container}>
            <button>BET</button>
            <button className={s.start}>START</button>
        </div>
    )

}