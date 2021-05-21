import React from "react";
import s from "./Monitor.module.css"
import {Drum} from "./Drum";

export const Monitor = () => {

    return (
        <div className={s.container}>
            <div className={s.monitor}>
                <Drum value={3}/>
                <Drum value={4}/>
                <Drum value={1}/>
            </div>
            <div className={s.monitorSetting}>
                <div className={s.creditContainer}>
                    <div>CREDIT:</div>
                    <div>1000</div>
                </div>
                <div className={s.betContainer}>
                    <div>BET</div>
                    <div>5</div>
                </div>
            </div>
        </div>
    )

}

