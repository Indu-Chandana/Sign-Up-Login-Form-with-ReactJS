import React from 'react';
import './App.css';
import Login from './componentd/login/Login';
import Signup from './componentd/signup/Signup';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from './componentd/navigator/Navigation';
import './App.css'



function App() {
  return (
    <div className="App">

      <Navigation/>

      <BrowserRouter>
        <Switch>
          <Route path="/login"><Login/></Route>
          <Route path="/sign"><Signup/></Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

