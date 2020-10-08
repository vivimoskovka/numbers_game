import React from 'react'
import classes from './AnswerItem.module.css'
import { useCssBreakpoints } from 'react-use-css-breakpoints';


const AnswerItem = props =>  {
  const breakpoint = useCssBreakpoints();
  return (
    <li className={classes.AnswerItem} onClick={() => props.onAnswerClick(props.children)}>
        <span className={classes.AnswerItemNum}>{props.children} </span>
    </li>

  )
}

export default AnswerItem
