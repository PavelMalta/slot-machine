export type BetType = 1 | 2 | 3 | 4 | 5 | 10 | 50 | 100
export type DrumType = 1 | 2 | 3 | 4 | 5 | 6 | 7

const initialState = {
    credit: 100,
    bet: 1 as BetType,
    drumFirst: 1 as DrumType,
    drumSecond: 2 as DrumType,
    drumThird: 3 as DrumType,
}
type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-BET':
            return {...state, bet: action.bet}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setBetAC>

export const setBetAC = (bet: BetType) => {
    return {type: 'APP/SET-BET', bet} as const
}