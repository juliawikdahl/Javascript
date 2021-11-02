import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Customer from './views/Customer';
import Form from './views/Form'; 
import Navbar from './navbar/Navbar'; 

import Card from '.components/Card'
import {useState, useEffect} from 'react'

function App() {

  const [customers, setCostumers] = useState ([])
  useEffect(() => {

    async function fetchData () {
    const res = await fetch ("https://ecexam-webapi.azurewebsites.net/api/Customers")
    setCostumers(await res.json())
    }
    fetchData()
  }, []) 
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/customer" exact component={Customer}/>
        <div className="container mt-5">
           <div className ="row row-cols-1 row-cols-md-2 g-4">
             {
               customers.map(customer => (
                 <div key={customer.id}  className="col">
                    <Customer item={customer} />
                 </div>
               ))
             }
          </div> 
         </div>
        <Route path="/" exact component={Form}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}


export default App
