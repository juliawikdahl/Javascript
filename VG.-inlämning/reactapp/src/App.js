
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Customer from './views/Customer';
import Form from './views/Form'; 
import Navbar from './navbar/Navbar'; 

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/Customer" exact component={Customer}/>
        <Route path="/" exact component={Form}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
