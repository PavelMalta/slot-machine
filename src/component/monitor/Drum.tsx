import React from "react";
import s from "./Drum.module.css";

export type DrumPropsType = {
    value: number
}

export const Drum = (props: DrumPropsType) => {
    return (
        <div className={s.drumContainer}>
            {props.value}
        </div>
    )
}