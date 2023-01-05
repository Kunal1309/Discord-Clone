const barMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-close");
const sideMenu = document.querySelector('.nav-side-menu')

barMenu.addEventListener('click', () =>{
    sideMenu.style.display = "flex";
})
closeMenu.addEventListener('click', ()=>{
    sideMenu.style.display = "none"
})