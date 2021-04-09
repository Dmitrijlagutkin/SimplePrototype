import React from 'react';
import useStyles from './stylesCategorySelection'
import Button from '@material-ui/core/Button';

export default function ProductSelect({productName}) {
  const classes = useStyles();

  return (
    <div >
      <Button variant="contained" color="primary" size="small" >
        {productName ? productName : "Select a product" }
      </Button>
    </div>
  );
}