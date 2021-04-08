import { data } from "../../data/data"

    
export default function dataReducer(state = data, action) {
    
    switch(action.type) {
        // case SET_CATEGORIES:
        //     return {
        //         ...state
        //     }
        default:
            return state
    }
}

