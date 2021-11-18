 //login data
 const submitbtn = document.querySelector('.form')

 submitbtn.addEventListener('submit', (e)=>{
e.preventDefault()

let loginuser = document.getElementById('loginuser').value;
let loginpassword = document.getElementById('loginpassword').value;
console.log(loginuser,loginpassword);

let person1 = {
loginuser,
loginpassword

}

document.querySelector('#loginuser').value = "";
document.querySelector('#loginpassword').value = "";

localStorage.setItem('person1', JSON.stringify(person1))
 })


 
