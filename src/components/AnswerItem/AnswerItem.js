import React from 'react'
import classes from './AnswerItem.module.css'


export const AnswerItem = props =>  {

  return (
    <li className={classes.AnswerItem} onClick={() => props.onAnswerClick(props.children)}>
        <span className={classes.AnswerItemNum}>{props.children} </span>
    </li>

  )
}
