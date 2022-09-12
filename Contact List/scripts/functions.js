import { contactList } from "./index.js"

// display the list pass asinput in display Area
export function displayContacts(listToDisplay)
{
    console.log("Adding new ....")
    const displayArea=document.querySelector(".display")
    let cardsToDisplay=listToDisplay.map(person=>createCard(person))
    
    displayArea.innerHTML=cardsToDisplay.join("")

    //return cardsToDisplay
}

// create a card for each object in list
function createCard(itemToDisplay)
{
    return `
    <li class="card">
            <div class="name">
              <p>${itemToDisplay.first}</p>
              <p>${itemToDisplay.last}</p>
            </div>
            <div class="details">
              <div class="contact">
                <p>${itemToDisplay.email}</p>
                <p>${itemToDisplay.mobile}</p>
              </div>
              <div class="other">
                <div class="dob">${itemToDisplay.dob}</div>
                <div class="address">
                  <span>${itemToDisplay.city}, ${itemToDisplay.pin}</span>
                </div>
              </div>
            </div>
    </li>`
    
}

// validate the input
export function validateInput()
{
    const [first,last,dob,email,mobile,city,pin]=document.querySelectorAll("input")
    
    //validate first name
    if(first.value=="")
    {
        first.focus()
        return [false,`Please enter First Name.`]
    }
    //validate last name
    if(last.value==="")
    {
        last.focus()
        return [false,`Please enter Last Name.`]
    }

    //validate date of birth
    if(dob.value==="")
    {
        dob.focus()
        return [false,`Please enter Date of birth`]
    }
    else
    {
        //let userInput=dob.value
        let birthDate = new Date(dob.value);
        let difference=Date.now() - birthDate.getTime(); 
        console.log(difference)
        let  ageDate = new Date(difference); 
        var age=  Math.abs(ageDate.getUTCFullYear() - 1970);
        console.log("Age :: "+age)

        if(age<18)
        {
            dob.focus()
            return [false,`Age must be gratrerthan 18 years.`]
        }
    }

    //validate email
    if(email.value==="")
    {
        email.focus()
        return [false,`Please enter email.`]
    }

    //validate mobile
    if(mobile.value==="")
    {
        mobile.focus()
        return [false,`Please enter Mobile number.`]
    }

    //validate city
    if(city.value==="")
    {
        city.focus()
        return [false,`Please enter Cityt Name.`]
    }

    //validate pin
    if(pin.value==="")
    {
        pin.focus()
        return [false,`Please enter Pin.`]
    }

    console.log("All validated")
    return [true,age]
}

//clear form after adding new contact
export function clearInput()
{
    let inputElement=document.querySelectorAll("input")

    for(let elem of inputElement)
    {
        elem.value=''
    }
}

// serach contact list 
export function searchName(userInput)
{
    console.log("Searching :"+userInput)
    let searchResult=[]
    for(let person of contactList)
    {
        if(person.first.toLowerCase().includes(userInput) || person.last.toLowerCase().includes(userInput))
        {
            searchResult.push(person)
        }
    }

    return searchResult
}

// sort by age
export function sortList(option)
{
    option==="low_to_high"?contactList.sort((person1,person2)=>person1.age-person2.age):contactList.sort
}