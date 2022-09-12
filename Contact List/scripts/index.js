const addBtn=document.querySelector("#add")
const displayArea=document.querySelector(".display")
import {displayContacts,validateInput,clearInput,searchName,sortList} from './functions.js'
const sortAge=document.querySelector("#age")
const searchInput=document.querySelector("#search_input")
const error_msg=document.querySelector("#error_msg")

export const contactList=[
    {
        "id": 5,
        "first": "Sanket",
        "last": "Janolkar",
        "dob": "11998-12-04",
        "email": "sanket@gmmail.com",
        "mobile": "7138336724",
        "city": "Pune",
        "pin": "411007",
        "age": 24
      },
      {
        "id": 82,
        "first": "Siddhi",
        "last": "Ratnaparkhi",
        "dob": "1999-03-05",
        "email": "siddhi1999@gmail.com",
        "mobile": "9890803746",
        "city": "Akola",
        "pin": "444001",
        "age": 22
      },
      {
        "id": 14,
        "first": "Kaustubh",
        "last": "Ambhore",
        "dob": "1996-16-10",
        "email": "kstb@gmail.com",
        "mobile": "8888878270",
        "city": "Mumbai",
        "pin": "400013",
        "age": 26
      }
]


// add new contact 
addBtn.addEventListener("click",(e)=>
{
    e.preventDefault()
    console.log("Clicked")

    if(validateInput()[0]===true)
    {
        //clear error msg
        error_msg.innerHTML=''
        const [first,last,dob,email,mobile,city,pin]=document.querySelectorAll("input")

        let newPerson={
            "id":Math.floor(Math.random()*100),
            "first":first.value,
            "last":last.value,
            "dob":dob.value,
            "email":email.value,
            "mobile":mobile.value,
            "city":city.value,
            "pin":pin.value,
            "age":validateInput()[1]
        }
        console.log(newPerson)
        contactList.push(newPerson)
        localStorage.setItem(`${newPerson.id}`,JSON.stringify(contactList))
        displayContacts(contactList)
        clearInput()
    }
    else
    {
        console.log("Enter valid input")
        console.log(validateInput()[1])
        //print error msg
        error_msg.innerHTML=validateInput()[1]
    } 
})


// search for contact 
searchInput.addEventListener('input',(e)=>
{
    
    const response=searchName(e.target.value)
    console.log(response)
    displayContacts(response)

})

// listerner on change in sorting option
sortAge.addEventListener("click",(e)=>
{
    console.log(e.target.value)
    if(e.target.value==='')
    {
        return
    }
    let sortedList=e.target.value==="low_to_high"?contactList.sort((person1,person2)=>person1.age-person2.age):contactList.sort((person1,person2)=>person2.age-person1.age)
    displayContacts(sortedList)
})



