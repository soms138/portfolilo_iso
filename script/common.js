const header_nav = document.querySelector('.nav > li > a')
const nav_open = document.querySelector('.nav_open')
console.log(nav, nav_open)
header_nav.addEventListener('click',function(e){
    e.preventDefault()
    header_nav.classList.toggle('open')
})