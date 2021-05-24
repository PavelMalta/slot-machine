const initialState = {

}
type InitialStateType = {

}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

type ActionsType = {
    type: string
}