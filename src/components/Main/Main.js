import React from 'react'
import {Link} from 'react-router-dom';
import classes from './Main.module.css'

export const Main = () => {
  return(
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Wonder Number</h1>
      <Link to='/play'>
        <button className={classes.button} component={Link} to={`/play/`}>Let's start!</button>
      </Link>
    </div>
  )
}
