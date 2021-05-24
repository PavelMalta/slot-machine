import React from "react";
import s from "./Monitor.module.css"
import {Drum} from "./Drum";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {BetType, DrumType} from "../../redux/app-reducer";

export const Monitor = () => {

    const drumFirst = useSelector<AppRootStateType, DrumType>(store => store.app.drumFirst)
    const drumSecond = useSelector<AppRootStateType, DrumType>(store => store.app.drumSecond)
    const drumThird = useSelector<AppRootStateType, DrumType>(store => store.app.drumThird)
    const bet = useSelector<AppRootStateType, BetType>(store => store.app.bet)

    return (
        <div className={s.container}>
            <div className={s.monitor}>
                <Drum value={drumFirst}/>
                <Drum value={drumSecond}/>
                <Drum value={drumThird}/>
            </div>
            <div className={s.monitorSetting}>
                <div className={s.creditContainer}>
                    <div>CREDIT</div>
                    <div className={s.creditScore}>1000</div>
                </div>
                <div className={s.betContainer}>
                    <div>BET</div>
                    <div className={s.betScore}>{bet}</div>
                </div>
            </div>
        </div>
    )
}

