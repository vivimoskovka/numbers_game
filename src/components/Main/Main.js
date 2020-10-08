import React from 'react'
import {Link} from 'react-router-dom';
import classes from './Main.module.css'

const Main = () => {
  return(
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Eduludo</h1>
      <Link to='/eduludo'>
        <button className={classes.button} component={Link} to={`/eduludo/`}>Let's start!</button>
      </Link>
    </div>
  )
}

export default Main
