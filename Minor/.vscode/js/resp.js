burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListemer('click', ()=>{
    navbar.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
})