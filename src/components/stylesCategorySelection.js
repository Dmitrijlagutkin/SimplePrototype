import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
	category: {
		textAlign: "center",
		margin: '15px',
	  },
	  categoryTitle: {
		  margin: '25px'
	  },
	  productItemsList: {
		  display: "flex",
		  justifyContent: "center",
	  },
	  productItem: {
		  margin: "0 20px",
	  },
	  productImg: {
		borderRadius: "50% 50%",
		textAlign: "center",
		margin: "20px auto",
		width: "70px",
    	height: "70px",	
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
		  margin: "10px 10px 0 10px",
	  },
	  wordsItemsListBg: {
		padding: "15px",
		margin: "30px 0"
	  },
	  btnSeeResult: {
		margin: "15px 0 30px 0",
	  },
	  link: {
		margin: "30px 0",
	  },
	//   closeIcon: {
	// 	  marginTop: "5px",
	//   },
}))

export default useStyles