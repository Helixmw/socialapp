// let modal = document.querySelector('.modal');
import {Users} from './users.js';
let modal = document.querySelector('.modal');
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');
let middle = document.querySelector('.middle');
let add = document.querySelector('.add-button');
let prompt = document.querySelector('.prompt');
let field = document.querySelector('.crop-field');
let accept = document.querySelector('.accept');
let cancel = document.querySelector('.cancel');
let croppr = document.querySelector('.cropper');
let file = document.querySelector('.file');
let adduser = document.querySelector('.adduser');
let previmg = document.querySelector('.prev-img');
let profname = document.querySelector('.uname');
let label = document.querySelector('.label');
let newimg;
modal.classList.add('inv');
// modal.classList.remove('inv');
prompt.classList.add('inv');
field.classList.add('inv');
adduser.classList.add('inv');
const user = new Users(middle,modal,yes,no,add);
let opts = {
    viewport: { width: 200, height: 200, type: 'circle'},
    boundary: { width: 300, height: 300 },
   
}
var cropjs = new Croppie(croppr, opts);
file.addEventListener('change', () => {
    let img = file.files[0];
    if(typeof img !== undefined){
        field.classList.remove('inv');
        adduser.classList.remove('inv');
        let imgurl = URL.createObjectURL(img);
        cropjs.bind({
            url: imgurl,
            orientation:4
        });  
    }
   
});
cancel.addEventListener('click', () => {
    field.classList.add('inv');
    adduser.classList.add('inv');
    previmg.classList.remove("add-border");
    // newimg = "";
    previmg.innerHTML="";
});
accept.addEventListener('click',() => {
    cropjs.result('blob').then(function(blob){
        newimg = URL.createObjectURL(blob);
        field.classList.add('inv');
        // console.log(newimg);
        let mainimg = document.createElement("img");
        mainimg.className = "main-img";
        mainimg.src = newimg;
        previmg.appendChild(mainimg);
        previmg.classList.add("add-border");
    });
});
add.addEventListener('click', () => {
    user.uploadUser(modal,prompt);
});
profname.addEventListener('keyup', () => {
    label.innerHTML = profname.value;
});
adduser.addEventListener('click', () => {
    previmg.innerHTML = "";
    label.innerHTML ="";
    let newname = profname.value;
    user.addNewUser(newimg, newname,middle,modal,field);
    adduser.classList.add('inv');
});



