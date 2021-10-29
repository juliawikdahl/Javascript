import './App.css';
import {useState, useEffect} from 'react'
import Customer from './components/Customer';

function App() {

  const [customers, setCostumers] = useState ([])
  useEffect(() => {

    async function fetchData () {
    const res = await fetch ("https://ecexam-webapi.azurewebsites.net/api/Customers")
    setCostumers(await res.json())
    }
    fetchData()
  }, []) 
    
  return (
    <div className="container mt-5">
      <div className ="row row-cols-1 row-cols-md-2 g-4">
        {
          customers.map(customer => (
            <div key={customer.id} className="col">
               <Customer item={customer} />
            </div>
          ))
        }
     </div> 
    </div>
  );
}

export default App;
