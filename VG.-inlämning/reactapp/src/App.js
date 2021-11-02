import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Customer from './views/Customer';
import Form from './views/Form'; 
import Navbar from './navbar/Navbar'; 
import Card from './components/Card';
import {useState, useEffect} from 'react'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/customer" exact component={Customer}/>
        <Route path="/" exact component={Form}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App

