import React from 'react';
import useStyles from './stylesCategorySelection'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export default function CategoryWordsList({wordList, getOnClickTargetWord}) {
  const classes = useStyles();

  return (
    <Paper className={classes.wordsItemsListBg}>
    <div className={classes.wordsItemsList}>
		  {wordList.map((word) => 
        <div className={classes.wordsItem} key={word} >
          <Button size="small" onClick={ (e) => getOnClickTargetWord(e.target.innerText)} variant="contained">{word}</Button>
        </div>)}
    </div>
    </Paper>
  );
}