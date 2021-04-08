import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
	category: {
		textAlign: "center",
		margin: '15px',
	  },
	  categoryTitle: {
		  margin: '40px'
	  },
	  productItemsList: {
		  display: "flex",
		  justifyContent: "center",
	  },
	  productItem: {
		  margin: "0 20px",
	  },
	  productImg: {
		textAlign: "center",
		margin: "20px auto",
	  },
	  selectProducts: {
		display: "flex",
		justifyContent: "center",
	  },
	  selectProductsTitle: {
		  margin: "2px 15px 0 0",
	  },
	  wordsItemsList: {
		  margin: "20px 0",
		display: "flex",
		justifyContent: "center",
	  },
	  wordsItem: {
		  margin: "0 10px",
	  },
	  wordsItemsListBg: {
		padding: "15px",
		margin: "30px 0"
	  },
}))

export default useStyles