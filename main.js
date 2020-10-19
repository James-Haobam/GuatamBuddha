const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const navmenu = document.querySelector('#navbar');
const text = document.querySelector('.to-anime')

openBtn.addEventListener('click',openmenu);
function openmenu(){
    navmenu.style.top = '0';
}


closeBtn.addEventListener('click', closemenu);
function closemenu(){
    navmenu.style.top = '-1000vh';
    
}

// let some = window.setInterval(function(){
// text.classList.add('text-animation')
// },2000);

