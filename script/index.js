$('#fullpage').fullpage({
    autoScrolling:true,
    scrillHorizontally:true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Intro','Info','Web1','Web2','Landing','SNS','Banner','Cardnews','Detail','Contact'],
})
const mouseImg = document.querySelector('#mouse')
console.log(mouseImg)
window.addEventListener('mousemove',function(e){
        mouseImg.style.left = `${e.clientX}px` // X축
        mouseImg.style.top = `${e.clientY}px` // Y축
})
const bnr_slide = new Swiper('#bnr_slide',{
    direction: 'horizontal',
    autoplay:{delay:3000},
    speed:1000,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        prevEl: '.bnr_title .swiperBtn .swiper-button-prev',
        nextEl: '.bnr_title .swiperBtn .swiper-button-next'
    },
})
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const tab_detail = document.querySelectorAll('.tab_detail > img')
const sns_contents = document.querySelectorAll('.sns_contents')
const sns_popup = document.querySelectorAll('.sns_popup > img')
const bnr = document.querySelectorAll('#bnr_slide .swiper-wrapper .swiper-slide')
const btn_prev = document.querySelector('.cardnews_btn .prev')
const btn_next = document.querySelector('.cardnews_btn .next')
const news_contents = document.querySelectorAll('.news_contents > div')
const cover = document.querySelectorAll('.c_left > .cover')
const txt = document.querySelector('.c_left > .txt')
const c_right = document.querySelectorAll('.c_right > a')
const nav = document.querySelectorAll('.fnb_right > a')
console.log(tab_contents,tab_title,tab_detail,sns_contents,sns_popup,bnr,btn_prev,btn_next,news_contents,cover,txt,c_right,nav)

nav.forEach(function(t){
    t.addEventListener('click', function(e){
        e.preventDefault()
        for(let i of nav){i.classList.remove('active')}
        t.classList.add('active')
    })
})
for(let i of tab_contents){i.style.display = 'none'}
for(let i of tab_detail){i.style.display = 'none'}
tab_contents[0].style.display = 'flex'
tab_detail[0].style.display = 'block'
tab_title.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault()
        for(let i of tab_title){i.classList.remove('active')}
        t.classList.add('active')
        for(let i of tab_contents){i.style.display = 'none'}
        tab_contents[i].style.display = 'flex'
        for(let i of tab_detail){i.style.display = 'none'}
        tab_detail[i].style.display = 'block'
    })
})
// news
news_contents[1].style.opacity = '0'
btn_prev.addEventListener('click',function(e){
    e.preventDefault()
    for(let i of news_contents){i.classList.remove('trans')}
    news_contents[1].style.opacity = '0'
    news_contents[0].style.opacity = '1'
})
btn_next.addEventListener('click',function(e){
    e.preventDefault()
    for(let i of news_contents){i.classList.add('trans')}
    news_contents[0].style.opacity = '0'
    news_contents[1].style.opacity = '1'
})
for(let i of cover){i.style.display = 'none'}
cover[0].style.display = 'block'
c_right.forEach(function(c,d){
    c.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of c_right){i.classList.remove('active')}
        c.classList.add('active')
        for(let i of cover){i.style.display = 'none'}
        cover[d].style.display = 'block'
    })
})
// sns
for(let i of sns_popup){i.style.display = 'none'}
sns_contents.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault()
        sns_popup[i].style.display = 'block'
        for(let j of sns_popup){j.parentElement.style.display = 'block'}
    })
})
sns_popup.forEach(function(a,b){
    a.addEventListener('click',function(e){
        e.preventDefault()
        sns_popup[b].style.display = 'none'
        for(let j of sns_popup){j.parentElement.style.display = 'none'}
    })
})
// bnr
bnr.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        t.classList.toggle('show')
    })
})