 //login data
 const submitbtn = document.querySelector('.submit-btn')

 submitbtn.addEventListener('click', (e)=>{
e.preventDefault()

let loginuser = document.getElementById('loginuser').value;
let loginpassword = document.getElementById('loginpassword').value;
console.log(loginuser,loginpassword);

let person1 = {
loginuser,
loginpassword

}

localStorage.setItem('person1', JSON.stringify(person1))
 })