import React, { useState, useEffect } from 'react'
import AnswerList from '../../components/AnswerList/AnswerList'
import classes from './Eduludo.module.css'
import {Link} from 'react-router-dom';

const Eduludo = () => {

  const [nums, setNums] = useState([
                                    1, 2, 3, 4, 5,
                                    6, 7, 8, 9, 10,
                                    11, 12, 13, 14, 15,
                                    16, 17, 18, 19, 20
                                    ])

  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1)
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1)
  const [answer, setAnswer] = useState()

  const cls = [classes.Eduludo]

  if (answer === 'error') {
    cls.push('fas fa-frown' + ' ' + classes.error + ' ' + classes.fadeOut)
  } else if (answer === 'success') {
    cls.push('fas fa-smile' + ' ' + classes.success + ' ' + classes.fadeOut)
  }

  const onAnswerClickHandler = (ans) => {

    if (answer) {
      return
    }

    setAnswer((num1+num2) == ans ? 'success' : 'error')

    setTimeout(() => {
      setNum1(Math.floor(Math.random() * 10) + 1)
      setNum2(Math.floor(Math.random() * 10) + 1)

      setAnswer(null)
    },3000)
  }

  return (

    <div className={classes.Eduludo}>
      <Link to='/'>
        <button className={classes.goBackButton} component={Link} to={`/`}>Go back</button>
      </Link>

      <div className={classes.EduludoWrapper}>
        <h1 className={classes.Example}>{num1} + {num2}</h1>

        <i className={cls.join(' ')}></i>

        <AnswerList
          nums={nums}
          onAnswerClick={onAnswerClickHandler}
        />
      </div>
    </div>
  )
}

export default Eduludo
