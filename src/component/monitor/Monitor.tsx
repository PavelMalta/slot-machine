import React from "react";
import s from "./Monitor.module.css"
import {Drum} from "./Drum";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {BetType} from "../../redux/app-reducer";

export const Monitor = () => {

    const drumFirst = useSelector<AppRootStateType, number>(store => store.app.drumFirst)
    const drumSecond = useSelector<AppRootStateType, number>(store => store.app.drumSecond)
    const drumThird = useSelector<AppRootStateType, number>(store => store.app.drumThird)
    const credit = useSelector<AppRootStateType, number>(store => store.app.credit)
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
                    <div className={s.creditScore}>{credit}</div>
                </div>
                <div className={s.betContainer}>
                    <div>BET</div>
                    <div className={s.betScore}>{bet}</div>
                </div>
            </div>
        </div>
    )
}

