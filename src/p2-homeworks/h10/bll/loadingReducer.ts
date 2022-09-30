const initState = {
    isLoading: false
}
type LoadingType = ReturnType<typeof loadingAC>

export type StateType = {
    isLoading: boolean

}

export const loadingReducer = (state:StateType = initState, action: LoadingType): typeof initState => {
    switch (action.type) {
        case 'IS_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {type: 'IS_LOADING', isLoading}
}