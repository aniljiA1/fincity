import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

import Home from './components/Home'

const App = () => (
  <Switch>
    <Router>
      <Route>
        <Route exact path="/" Component={Home} />
        <Route exact path="/project" Component={Project} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
      </Route>
    </Router>
  </Switch>
)

export default App
