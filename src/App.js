import React from 'react'
import './App.css'
import Navbar from './Navbar.js'
import Post from './Post.js'
import About from './About.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/about' component={About} />
          <Route path='/post' component={Post} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
