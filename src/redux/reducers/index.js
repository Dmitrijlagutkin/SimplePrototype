import { createStore, combineReducers } from 'redux'
import {composeWithDevTools}  from "redux-devtools-extension"
import dataReducer from "./dataReducer"
import selectedWordsReducers from "./selectedWordsReducers"
import wordListReducers from "./wordListReducers"

const rootReduser = combineReducers({
    data: dataReducer,
    wordList: wordListReducers,
    selectedWords: selectedWordsReducers
})


export const store = createStore(
  rootReduser,
  composeWithDevTools()
)