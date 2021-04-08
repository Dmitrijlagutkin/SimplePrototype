import { SET_SELECTED_WORDS } from '../types/index'
import { SET_WORD_LIST } from '../types/index' 

export const setSelectedWords = (payload) => ({ type: SET_SELECTED_WORDS, payload })
export const setWordList = (payload) => ({ type: SET_WORD_LIST, payload })
