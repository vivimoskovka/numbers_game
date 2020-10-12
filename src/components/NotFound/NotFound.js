import React from 'react'
import {Link} from 'react-router-dom';
import classes from './NotFound.module.css'

export const NotFound = () => {
  return(
    <div className={classes.wrapper}>
      <h1 className={classes.error}>404</h1>
      <h2 className={classes.text}>Not found</h2>
      <Link to='/eduludo'>
        <button className={classes.button} component={Link} to={`/eduludo/`}>Wanna play?</button>
      </Link>
    </div>
  )
}
