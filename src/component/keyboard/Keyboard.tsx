import React from "react";
import s from "./Keyboard.module.css"
import {
    BetType,
    setBetAC,
    setDrumFirstValueAC, setDrumFirstValueTC,
    setDrumSecondValueAC, setDrumSecondValueTC,
    setDrumThirdValueAC, setDrumThirdValueTC
} from "../../redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

export const Keyboard = () => {

    const bet = useSelector<AppRootStateType, BetType>(store => store.app.bet)
    const dispatch = useDispatch()

    const setBet = () => {
        if (bet === 1) {
            dispatch(setBetAC(2))
        } else if (bet === 2) {
            dispatch(setBetAC(3))
        } else if (bet === 3) {
            dispatch(setBetAC(4))
        } else if (bet === 4) {
            dispatch(setBetAC(5))
        } else if (bet === 5) {
            dispatch(setBetAC(10))
        } else if (bet === 10) {
            dispatch(setBetAC(50))
        } else if (bet === 50) {
            dispatch(setBetAC(100))
        } else if (bet === 100) {
            dispatch(setBetAC(1))
        }
    }

    const startSpin = () => {
        dispatch(setDrumFirstValueTC());
        dispatch(setDrumSecondValueTC());
        dispatch(setDrumThirdValueTC());
    }

    return (
        <div className={s.container}>
            <button onClick={setBet}>BET</button>
            <button className={s.start} onClick={startSpin}>START</button>
        </div>
    )

}