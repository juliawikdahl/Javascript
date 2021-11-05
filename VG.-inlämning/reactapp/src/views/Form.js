import React,  {useState } from 'react'
import './Form.css';

const Form = () => {


    const validLength = (value, errorHandler, errorMessage = "not valid", ) => 
    {
        const regexvalue =/^.{2,}$/
        if(!regexvalue.test(value)) 
        {
            errorHandler(errorMessage);
            return;
        }
        errorHandler("");
    }
    
    const validateEmail = (value, errorHandler, errorMessage = "Not valid") => 
    {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!regEx.test(value)) 
        {
            errorHandler(errorMessage);
            return;
        }
        errorHandler("");
    }
    

const [firstname, setfirstname] = useState ("")
const [firstnameError, setfirstnameError] = useState ("")
const firstnamehandler =(e) => {setfirstname(e.target.value)
setfirstname(e.target.value)
validLength(e.target.value, setfirstnameError, "Förnamnet måste innehålla minst två tecken!");
}


const [lastname, setlastname] = useState ("")
const [lastnameError, setlastnameError] = useState ("")
const lastnamehandler =(e) => {setlastname(e.target.value)
    setlastname(e.target.value)
    validLength(e.target.value, setlastnameError, "Efternamnet måste innehålla minst två tecken!");
}

const [email, setemail] = useState ("")
const [emailError, setemailError] = useState ("")
const emailhandler =(e) => {setemail(e.target.value)
    setemail(e.target.value)
    validateEmail(e.target.value, setemailError, "Inkorrekt format på mejladressen")
}


const submithandler = async (e) => {
    e.preventDefault()

    if(firstnameError.length > 0 || lastnameError.length > 0 || emailError.length > 0) 
    {
        alert("Det finns fortfarande valideringsfel på sidan!");
        return;
    }

    const reg = { Förnamn: firstname, Efternamn: lastname, Epostadress: email }
    
    const empty = [];
    for (const key of Object.keys(reg)) {
        if(reg[key].length === 0)
        {
            empty.push(key);
        }
    }

    if(empty.length > 0)
    {
        alert(`Fälten ${empty.join(', ')} kan inte lämnas tomt`);
        return;
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reg)
    };
    const res = await fetch('https://ecexam-webapi.azurewebsites.net/api/customers', requestOptions)
}

    return (
    
       <form id="Myform" className="container col-6 mt-5" noValidate>
           <h1 class="h1">Registrera Dig</h1>
            <div>
                <div className="mt-4">Förnamn*</div>
                <input id="first-name" className="form-control" required type="text" placeholder="" value= {firstname} onChange={firstnamehandler} />
                <div style={{display:'block'}} id="first-name-error" className="invalid-feedback"> <small>{firstnameError}</small></div>
            </div>

            <div>
            <div className="mt-3">Efternamn*</div>
                <input id="last-name" className="form-control" required type="text" placeholder="" value= {lastname} onChange={lastnamehandler}/>
                <div style={{display:'block'}} id="last-name-error" className="invalid-feedback"> <small>{lastnameError}</small></div>
            </div>
            <div>
            <div className="mt-3">E-postadress*</div>
                <input id="Email" className="form-control" required type="email" placeholder="" value= {email} onChange={emailhandler}/>
                <div style={{display:'block'}} id="Email-error" className="invalid-feedback"> <small>{emailError}</small></div>
            </div>
            <button onClick={submithandler} id="btn" type="submit" className="btn-secondary mt-4" >SKICKA</button>
    
         </form>
      
    )
}

export default Form
