const sidebar = document.querySelector('.side-menu')
const barIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector(".fa-close")

barIcon.addEventListener('click', () => {
    barIcon.style.display ="none"
    sidebar.style.display = 'block'
    closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', () =>{
    closeIcon.style.display = 'none'
    barIcon.style.display = 'block'
    sidebar.style.display = 'none'
})

