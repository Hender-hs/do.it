import { Switch, Route } from 'react-router-dom'
import { FirstPage } from '../Pages/FirstPage'
import { Signup } from '../Pages/Signup'
import { Login } from '../Pages/Login'
import { Home } from '../Pages/Home'

export const Routes = () => {

  return (

    <Switch>

      <Route exact path='/' >
        <FirstPage />
      </Route>

      <Route path='/signup' >
        <Signup />
      </Route>

      <Route path='/login' >
        <Login />
      </Route>

      <Route path='/home' >
        <Home />
      </Route>

      <Route >
        <p>404 Page Not Found</p>
      </Route>
    </Switch>

  )
}