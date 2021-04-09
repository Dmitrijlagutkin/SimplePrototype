import { SET_WORD_LIST } from "../types/index"

const defaultState = []

  export default function wordListReducers(state = defaultState, action) {
    
    switch(action.type) {
        
        
        case SET_WORD_LIST:
            return state = action.payload
        default:
            return state
    }
}