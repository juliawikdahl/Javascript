const password = document.getElementById("password")
const confirmpassword = document.getElementById("confirm-password")


function minvalidvaluetwo(value) {
    const regexvalue =/^.{2,}$/
    if (!regexvalue.test(value)) {
        return false
    }
    else {
        return true 
    }
}

/^.{5,}$/
function minvalidvaluefive(value) {
    const regexvaluefive = (?<!\d)\d{5}(?!\d)
    if (!regexvaluefive.test(value)) {
        return false
    }
    else {
        return true 
    }
}

function validemail(value) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(value)) {
        return false
    }
    else {
        return true 
    }
}

function validpassword(value) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if (!regex.test(value)) {
        return false
    }
    else {
        return true 
    }
}

function matchpassword (password, confirmpassword) {
    if (password !== confirmpassword) {
        return false
    }
    else {
        return true
    }
}

populateSelector("year", 1921, 2021)
populateSelector("month", 1, 12)
populateSelector("day", 1, 31)

function populateSelector(selectorId, to, from){
    const selector = document.getElementById(selectorId);

    for(let i = to; i <= from; ++i) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        selector.appendChild(option);
    }
}
setselectorListener();
function setselectorListener() {
    const datevalidation = document.querySelectorAll(".age")
    datevalidation.forEach(element => {
    element.addEventListener("change", function(e) {
        validateAge()
     })
})

}

function validateAge (){
    const todayYear = new Date().getFullYear();
    const todayMonth = new Date().getMonth() + 1;
    const todayDay = new Date().getDate();

    const year =document.getElementById("year").value
    const month =document.getElementById("month").value
    const day =document.getElementById("day").value

    if(isNaN(year) || isNaN(month) || isNaN(day) ) {
        return;
    }

    const today = new Date(year, month, day);
    const currentDay = new Date(todayYear, todayMonth, todayDay);

    var userAge = dateDiffInDays(currentDay, today) / 365;

    if (userAge >= 18)
    { 
        document.getElementById('select-error').style.display= "none"
    }
    else {
        document.getElementById('select-error').style.display= "block"
    }
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(todaysDate, birthDate) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());
  const utc2 = Date.UTC(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}




var forms = document.querySelectorAll('.needs-validation')
setEventListeners()
checkform(forms)


function setEventListeners() {
    forms.forEach(element => {
        switch(element.type) {
            case "text":
                element.addEventListener("keyup", function(e) { 
                    if(!minvalidvaluetwo(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        checkform(forms)
                    }        
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        checkform(forms)
                    }
                })
                break;

            case "email": 
                element.addEventListener("keyup", function(e) {
                    if(!validemail(e.target.value))  {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        checkform(forms)
                    }        
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        checkform(forms)
                    }
                })
                break;
            
            case "password": 
            element.addEventListener("keyup", function(e) {
                const confirmPasswordValue = document.getElementById("confirm-password").value;
                const passwordValue = document.getElementById("password").value;
                if(e.target.id == "password") {
                    if(!validpassword(e.target.value))  {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        // checkform(forms)
                    }        
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        // checkform(forms)
                    } 
                } else if(e.target.id== "confirm-password"){
                    if(!matchpassword(passwordValue, confirmPasswordValue))  {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        // checkform(forms)
                    }        
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        // checkform(forms)
                    }
                }
            })
            break;

            case "number": 
            element.addEventListener("keyup", function(e) {
                if(!minvalidvaluefive(e.target.value)) {
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                    checkform(forms)
                }        
                else {
                    e.target.classList.remove("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkform(forms)
                }
            })
            break;
        }     
    })
}

// function checkform(elements) {
//     let disable = false
//     let errors = document.querySelectorAll('.is-invalid')
//     let submitButton = document.querySelectorAll('.submit')[0]   

//     elements.forEach(element => {
//         if(element.value === "" || errors.length > 0)
//             disable = true
//     })     

//     if(submitButton !== undefined)
//         submitButton.disabled = disable
// }

// function onSubmit(e) {
//     e.preventDefault()
//     console.log("submitted")
// }