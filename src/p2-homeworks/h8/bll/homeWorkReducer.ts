import {UserType} from '../HW8';


type sortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type checkType = {
    type: 'check'
    payload: number
}

type ActionTypes = sortType | checkType


export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort':
            return [...state].sort((a,b) => action.payload === 'up' ? (a.name > b.name ? 1 : -1) :  (a.name > b.name ? -1 : 1))
        case 'check':
            return state.filter(u => u.age >= action.payload)
        default:
            return state
    }
}