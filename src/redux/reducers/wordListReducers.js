import { SET_WORD_LIST } from "../types/index"

const defaultState = []

  export default function selectedWordsReducers(state = defaultState, action) {
    
    switch(action.type) {
        
        
        case SET_WORD_LIST:
            console.log(action.payload)
            return state = action.payload
        default:
            return state
    }
}