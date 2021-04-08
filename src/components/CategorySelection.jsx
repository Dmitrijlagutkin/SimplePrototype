import React from 'react';
import useStyles from './stylesCategorySelection'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ProductSelect from './ProductSelect'
import CategoryWordsListContainer from './CategoryWordsListContainer'
import SelectedWords from './SelectedWords'
import { useState } from "react"

export default function CategorySelection({category, getProductName, productName}) {
  const classes = useStyles();
  

  return (
    <div className={classes.category}>
      <h1 className={classes.categoryTitle}>Click on product category you are interested in</h1>
      <div className={classes.productItemsList}>
        {category.products.map((product) => 
        <div className={classes.productItem} key={product.productName}>
          <Button className={classes.productName} 
                  onClick={ (e) => getProductName(e.target.innerText)} 
                  size="small" 
                  variant="contained" >
              {product.productName}
          </Button> 
          <Avatar className={classes.productImg} 
                  key={product.img} 
                  src={product.img} 
                  alt="img" />
        </div>)}
      </div>

          <div className={classes.selectProducts}>
            <h3 className={classes.selectProductsTitle}>Select this list of words to responalize your search for</h3>
            <ProductSelect productName={productName}/>
          </div>

          <SelectedWords category={category} />
          <CategoryWordsListContainer category={category} />
          

      <Button variant="contained" 
              color="primary"
              target="blank" 
              href="https://search.shoppresso.com">
        See results
      </Button>
      
    </div>
  );
}