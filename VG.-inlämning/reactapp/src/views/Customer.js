import React from 'react'
import {useState, useEffect} from 'react'
import Card from '../components/Card'

function Customer() {

const [customers, setCustomers] = useState([])
useEffect(() => {  
  async function fetchData() {
    const resultat = await fetch("https://ecexam-webapi.azurewebsites.net/api/customers")
    setCustomers(await resultat.json())

  }
  fetchData()
}, [])

    return (
  
        <div>
              <div className="container mt-5">
           <div className ="row row-cols-1 row-cols-md-3 g-4">
             {
               customers.map(customer => (
                 <div key={customer.id}  className="col">
                    <Card item={customer} />
                 </div>
               ))
             }
          </div> 
         </div>

           
        </div>
    )
}

export default Customer


