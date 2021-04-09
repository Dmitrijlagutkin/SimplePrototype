import React from 'react';
import useStyles from './stylesCategorySelection'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';

export default function SelectedWords({getOnDoubleClick, selectedWords}) {
  const classes = useStyles();
  

  return (
    <Paper className={classes.wordsItemsListBg}>
    <div className={classes.wordsItemsList}>
		  {selectedWords.map((word) => 
        <div id={word} 
        className={classes.wordsItem} 
        key={word + Date.now()} 
        onDoubleClick={(e) => getOnDoubleClick(e.currentTarget.id)}>
          <Button size="small"
           variant="contained"
           >{word}
           <CloseIcon fontSize="small" />
           </Button>
        </div>)}
    </div>
    </Paper>
  );
}