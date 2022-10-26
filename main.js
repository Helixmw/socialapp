// let modal = document.querySelector('.modal');
import {Users} from './users.js';
let modal = document.querySelector('.modal');
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');
let middle = document.querySelector('.middle')

modal.classList.add('inv');
const user = new Users(middle,modal,yes,no);

