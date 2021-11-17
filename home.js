let person = [];
const addperson = (ev)=>{
    ev.preventDefault();
    let person = {
        id:Date.now(),
     firstname:Document.getElementById('firstname').value,
     lastname:Document.getElementById('lastname').value,
     lacation:Document.getElementById('location').value,
     email:Document.getElementById('email').value,
     areacode:Document.getElementById('areacode').value,
     phone:Document.getElementById('phone').value,
    }
    person.push(person);
    document.forms[0].reset();//to clear form for next entry

    console.warn('added', (person));
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' +JSDN.stringfy(person, '\t' ,2); 

    localStorage.setItem('mypersonlist', JSDN.stringfy(person));

}
     document.addEventListener('DOMContentLoader', ()=>{
         document.getElementById(btn).addEventListener('click',addperson);
     });