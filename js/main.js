//open the nav bar

document.querySelector('.menu').classList.add('hidden');

document.querySelector('.menu-open').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('hidden');
    console.log('I work');
});

document.querySelector('.menu-close').addEventListener('click', function () {
    document.querySelector('.menu').classList.add('hidden');    
    console.log('I work');
});



var linkMenu = document.querySelector('li');

function closeMenu(e) {
    document.querySelector('.menu').classList.add('hidden');
    
}

linkMenu.addEventListener('click', closeMenu);