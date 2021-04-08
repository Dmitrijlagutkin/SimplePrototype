import React from 'react';
import useStyles from './stylesCategorySelection'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux'

export default function SelectedWords({getOnDoubleClick}) {
  const classes = useStyles();
  const { selectedWords } = useSelector((state)=> state)

  return (
    <Paper className={classes.wordsItemsListBg}>
    <div className={classes.wordsItemsList}>
		  {selectedWords.map((word) => 
        <div className={classes.wordsItem} key={word} >
          <Button size="small"
           variant="contained"
           onDoubleClick={ (e) => getOnDoubleClick(e.target.innerText)}
           >{word}</Button>
        </div>)}
    </div>
    </Paper>
  );
}