import CategorySelection from './CategorySelection'
import { useSelector } from 'react-redux'
import { useState } from "react"

export default function CategorySelectionContainer () {
	const [productName, setproductName] = useState("")

	const getProductName = (e) => {
    setproductName(e)
	}

	const { data } = useSelector((state)=> state)
	const category = data.clocks
	return (<CategorySelection category={category} 
		getProductName={getProductName} 
		productName={productName} 
		/>)
}