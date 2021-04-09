import React, {useState} from 'react';
import useStyles from './stylesCategorySelection'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ProductSelect from './ProductSelect'
import CategoryWordsListContainer from './CategoryWordsListContainer'

export default function CategorySelection({category, getProductName, productName}) {
  const classes = useStyles();

  return (
    <div className={classes.category}>
      <h1 className={classes.categoryTitle}>Click on the product category you are interested in</h1>
      <div className={classes.productItemsList}>
        {category.products.map((product) => 
        <div className={classes.productItem} key={product.productName} >
          <Button 
                  onClick={ (e) => getProductName(e.target.innerText)} 
                  size="small" 
                  variant="contained"
                  >   
              {product.productName}
          </Button> 
          <div>
            <img className={classes.productImg}  src={product.img} alt="img"/>
          </div>
        </div>)}
      </div>

          <div className={classes.selectProducts}>
            <h3 className={classes.selectProductsTitle}>Click on words below to add or remove persponalize your search</h3>
            <ProductSelect productName={productName}/>
          </div>

          
        <CategoryWordsListContainer category={category} />
          
        <div className={classes.btnSeeResult}>
          <Button variant="contained" 
                      color="primary"
                      target="blank" 
                      >
                See results
            </Button>
        </div>
        <h4>{`We found xxx results for <search> query`}</h4>
      <div className={classes.link}>
        <Link 
          target="blank" 
          href="https://search.shoppresso.com" 
          variant="body2">
            Click heare to see results
        </Link>
      </div>
      
    </div>
  );
}