const toggle = document.querySelector('.toggle')
const optionsbar = document.querySelector('.optionsbar')
const nav = document.querySelector('nav')

toggle.addEventListener('click', () =>{
    toggle.classList.toggle('rotate')
    optionsbar.classList.toggle('active')
    nav.classList.toggle('color')
})
