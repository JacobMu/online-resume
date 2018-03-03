/*jshint esversion: 6 */
//open the nav bar 

const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menu-open');
const menuClosed = document.querySelector('.menu-close');

menuOpen.addEventListener('click', () => { 
    console.log('hi');
    menu.classList.remove('hidden');
});
menuClosed.addEventListener('click', () => {
    menu.classList.add('hidden');
});



//change clients texts

