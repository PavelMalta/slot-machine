import {Dispatch} from "redux";

export type BetType = 1 | 2 | 3 | 4 | 5 | 10 | 50 | 100
export type DrumType = 1 | 2 | 3 | 4 | 5 | 6 | 7

const initialState = {
    credit: 100,
    bet: 1 as BetType,
    drumFirst: 1 as number,
    drumSecond: 2 as number,
    drumThird: 3 as number,
}
type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-BET':
            return {...state, bet: action.bet}
        case 'APP/SET-DRUM-FIRST-VALUE':
            return {...state, drumFirst: action.value}
        case 'APP/SET-DRUM-SECOND-VALUE':
            return {...state, drumSecond: action.value}
        case 'APP/SET-DRUM-THIRD-VALUE':
            return {...state, drumThird: action.value}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setBetAC>
    | ReturnType<typeof setDrumFirstValueAC>
    | ReturnType<typeof setDrumSecondValueAC>
    | ReturnType<typeof setDrumThirdValueAC>

export const setBetAC = (bet: BetType) => {
    return {type: 'APP/SET-BET', bet} as const
}

export const setDrumFirstValueAC = (value: any) => {
    return {type: 'APP/SET-DRUM-FIRST-VALUE', value} as const
}
export const setDrumSecondValueAC = (value: any) => {
    return {type: 'APP/SET-DRUM-SECOND-VALUE', value} as const
}
export const setDrumThirdValueAC = (value: any) => {
    return {type: 'APP/SET-DRUM-THIRD-VALUE', value} as const
}

export const setDrumFirstValueTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        let promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 7) + 1)
            }, 3000)
        })
        promise.then(result => {
            dispatch(setDrumFirstValueAC(result))
        })
    }
}
export const setDrumSecondValueTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        let promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 7) + 1)
            }, 5000)
        })
        promise.then(result => {
            dispatch(setDrumSecondValueAC(result))
        })
    }
}
export const setDrumThirdValueTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        let promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 7) + 1)
            }, 7000)
        })
        promise.then(result => {
            dispatch(setDrumThirdValueAC(result))
        })
    }
}
