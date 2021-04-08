import CategoryWordsList from './CategoryWordsList'
import { useState } from "react"
import {setSelectedWords} from '../redux/actions/index'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {setWordList} from '../redux/actions/index'
import SelectedWords from './SelectedWords'

export default function CategoryWordsListContainer (category) {
	const categoryWordsList = category.category.categoryWords
	const {selectedWords} = useSelector((state)=> state)
	const {wordList} = useSelector((state)=> state)
	console.log("selectedWords", wordList)

	const dispatch = useDispatch()

	dispatch(setWordList(categoryWordsList))
	
	const [targetWord, setTargetWord] = useState([])
	const [unTargetWord, setUnTargetWord] = useState([])

	const getOnClickTargetWord = (e) => {
		const eIndex = wordList.indexOf(e.toLowerCase())
		console.log("wordlist.indexOf(e.toLowerCase())", wordList.indexOf(e.toLowerCase()))
		wordList.splice(eIndex, 1)
		setTargetWord([...targetWord, e])
	}

	const getOnDoubleClick = (e) => {
		const eIndex = selectedWords.indexOf(e.toLowerCase())
		selectedWords.splice(eIndex, 1)
		setUnTargetWord([...targetWord, e])

	}

		
	
	useEffect(()=>{
        dispatch(setSelectedWords(targetWord))
    }, [targetWord])

	

	

	return (
		<div>
		<SelectedWords 
		getOnDoubleClick={getOnDoubleClick}/>
		<CategoryWordsList categoryWordsList={categoryWordsList}
		getOnClickTargetWord={getOnClickTargetWord}
		targetWord={targetWord}

		
		/>
		</div>
		
	)
}