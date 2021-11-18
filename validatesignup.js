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





