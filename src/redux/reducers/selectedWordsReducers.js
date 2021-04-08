import { SET_SELECTED_WORDS } from "../types/index"

const defaultState = []

  export default function selectedWordsReducers(state = defaultState, action) {
    
    switch(action.type) {
        
        
        case SET_SELECTED_WORDS:
            return state = action.payload
        default:
            return state
    }
}