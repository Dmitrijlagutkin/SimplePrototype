import CategoryWordsList from './CategoryWordsList'
import { useState } from "react"
import {setSelectedWords} from '../redux/actions/index'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {setWordList} from '../redux/actions/index'

export default function CategoryWordsListContainer (category) {
	const categoryWordsList = category.category.categoryWords
	const {selectedWords} = useSelector((state)=> state)

	const dispatch = useDispatch()
	const [targetWord, setTargetWord] = useState([])

	// const [unTargetWord, setUnTargetWord] = useState([])

	const getOnClickTargetWord = (e) => {
		const eIndex = categoryWordsList.indexOf(e.toLowerCase())
		console.log("eIndex", eIndex)
		console.log("indexOf(targetWord)", categoryWordsList.splice(eIndex, 1))
		setTargetWord([...targetWord, e])
	}

	// const getOnDoubleClick = (e) => {
	// 	const eIndex = selectedWords.indexOf(e.toLowerCase())
	// 	console.log("eIndex", eIndex)
	// 	console.log("indexOf(targetWord)", selectedWords.splice(eIndex, 1))
	// 	setUnTargetWord([...unTargetWord, e])
	// }

	useEffect(() => {
		dispatch(setWordList(categoryWordsList))
	}, [categoryWordsList]);

	useEffect(()=>{
        dispatch(setSelectedWords(targetWord))
    }, [targetWord])

	

	return (
		<CategoryWordsList categoryWordsList={categoryWordsList}
		getOnClickTargetWord={getOnClickTargetWord}
		targetWord={targetWord}
		/>
	)
}