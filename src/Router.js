import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './components/Main/Main'
import Eduludo from './components/Eduludo/Eduludo'
import NotFound from './components/NotFound/NotFound'

const AppRouter = () => {
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/eduludo/' exact component={Eduludo}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </Router>
  )
}


export default AppRouter
