//form validation
let loginuser = document.querySelector('#loginuser');
loginuser.addEventListener('keyup',function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (loginuser.value.length== 0 || loginuser.value.length < 6){
        loginuser.style.border='3px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else{
        loginuser.style.border = "3px solid green";
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

let loginpassword = document.querySelector('#loginpassword');
loginpassword.addEventListener('keyup',function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (loginpassword.value.length== 0 || loginpassword.value.length < 8){
        loginpassword.style.border='3px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else{
        loginpassword.style.border = "3px solid green";
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})