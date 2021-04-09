import CategoryWordsList from './CategoryWordsList'
import { useState } from "react"
import {setSelectedWords} from '../redux/actions/index'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {setWordList} from '../redux/actions/index'
import SelectedWords from './SelectedWords'

export default function CategoryWordsListContainer ({category}) {
	const categoryWordsList = category.categoryWords
	const {selectedWords} = useSelector((state)=> state)
	const {wordList} = useSelector((state)=> state)
	const dispatch = useDispatch()
	const [targetWord, setTargetWord] = useState([])

	useEffect(()=>{
        dispatch(setWordList(categoryWordsList))
    }, [])
	
	const getOnClickTargetWord = (e) => {
		const eIndex = wordList.indexOf(e.toLowerCase())
		wordList.splice(eIndex, 1)
		setTargetWord([...targetWord, e.toLowerCase()])
	}

	const getOnDoubleClick = (e) => {
		console.log("e", e)
		const eIndex = selectedWords.indexOf(e.toLowerCase())
		selectedWords.splice(eIndex, 1)
		wordList.splice(0, 0, e.toLowerCase())
		dispatch(setWordList([...wordList]))
	}

	useEffect(()=>{
        dispatch(setSelectedWords(targetWord))
    }, [targetWord])

	return (
		<div>
		<SelectedWords 
		getOnDoubleClick={getOnDoubleClick}
		selectedWords={selectedWords}
		/>

		<CategoryWordsList wordList={wordList}
		getOnClickTargetWord={getOnClickTargetWord}
		targetWord={targetWord}
		/>
		</div>
		
	)
}