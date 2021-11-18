
     const btnSubmit = document.querySelector('#btn-submit')

     btnSubmit.addEventListener('click', (e)=>{
e.preventDefault()

let firstname = document.getElementById('firstname').value;
let lastname = document.getElementById('lastname').value;
let location = document.getElementById('location').value;
let email = document.getElementById('email').value;
let areacode = document.getElementById('areacode').value;
let phone = document.getElementById('phone').value;
console.log(firstname, lastname, location, email, areacode, phone );


let person = {
    firstname,
    lastname,
    location,
    email,
    areacode,
    phone
}

localStorage.setItem('person', JSON.stringify(person))
     })



    