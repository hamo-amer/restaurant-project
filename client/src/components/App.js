import React from "react"
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './Header.js'
import Home from './Home'
import NotFound from './NotFound'
import Signin from './Signin'
import Signup from './Signup'



function App() {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/signin' component={Signin}/>
        <Route exact path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
      
    </main>
    </BrowserRouter>
  );
}

export default App;
