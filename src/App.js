import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navigation, Home, Registro, Login, Catalogo } from './components/'
//ucr: https://odi.ucr.ac.cr/medios/fotos/2018/diseno_1600_10805b10897f62409.jpg
const App = () => {
  return (
    <Router>
      <Navigation />
      <div>
          <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/registro' component={ Registro } />
              <Route path='/login' component={ Login } />
              <Route path='/catalogo' component={ Catalogo } />
          </Switch>
      </div>
    </ Router>
  )
}

export default App;
