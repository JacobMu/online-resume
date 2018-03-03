/*jshint esversion: 6 */
//open the nav bar 
const MENU = document.querySelector('.menu');
const MENUOPEN = document.querySelector('.menu-open');
const MENUCLOSED = document.querySelector('.menu-close');

MENUOPEN.addEventListener('click', () => {    
    MENU.classList.remove('hidden');
});
MENUCLOSED.addEventListener('click', () => {
    MENU.classList.add('hidden');
});

//change clients texts

let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-item");

function showSlidesCarousel() {    

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";      
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } 
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlidesCarousel, 6000);
}
showSlidesCarousel();

