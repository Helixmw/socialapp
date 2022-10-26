// let modal = document.querySelector('.modal');
import {Users} from './users.js';
let modal = document.querySelector('.modal');
let follow = document.querySelector('.follow');
let remove = document.querySelector('.remove');
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');
let middle = document.querySelector('.middle')

modal.classList.add('inv');
const user = new Users(middle);
follow.addEventListener('click', () => {
    user.unfollow(modal);
});
no.addEventListener('click', () => {
    user.clickNo(modal);
});
yes.addEventListener('click', () => {
    user.clickYes(modal);
});
