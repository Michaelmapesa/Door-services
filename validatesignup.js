let firstname = document.querySelector('#firstname');
firstname.addEventListener('keyup',function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (firstname.value.length== 0 || firstname.value.length < 8){
        firstname.style.border='3px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else{
        firstname.style.border = "3px solid green";
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

let lastname = document.querySelector('#lastname');
lastname.addEventListener('keyup',function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (lastname.value.length== 0 || lastname.value.length < 8){
        lastname.style.border='3px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else{
        lastname.style.border = "3px solid green";
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

let location = document.querySelector('#location');
location.addEventListener('keyup',function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (location.value.length== 0 || location.value.length < 8){
        location.style.border='3px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else{
        location.style.border = "3px solid green";
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

let email = document.querySelector('#email');
email.addEventListener('keyup',function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (email.value.length== 0 || email.value.length < 8){
        email.style.border='3px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else{
        email.style.border = "3px solid green";
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

let areacode = document.querySelector('#areacode');
areacode.addEventListener('keyup',function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (areacode.value.length== 0 || areacode.value.length < 8){
        areacode.style.border='3px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else{
        areacode.style.border = "3px solid green";
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})