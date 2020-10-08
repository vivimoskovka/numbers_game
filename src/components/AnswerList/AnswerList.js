import React from 'react'
import AnswerItem from '../AnswerItem/AnswerItem'
import classes from './AnswerList.module.css'


const AnswerList = props => {
  return(
    <ul className={classes.AnswerList}>
      {props.nums.map(num => {
        return(
          <AnswerItem
          onAnswerClick={props.onAnswerClick}
          key={num.index}
          >
            {num}
          </AnswerItem>
        )
      })}
    </ul>
  )
}

export default AnswerList
