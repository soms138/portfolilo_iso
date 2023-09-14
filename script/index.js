$('#fullpage').fullpage({
    autoScrolling:true,
    scrillHorizontally:true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Intro','Info','Web1','Web2','Landing','SNS','Banner','Cardnews','Detail','Contact'],
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
const sns_popup = document.querySelectorAll('.sns_popup')
const bnr = document.querySelectorAll('#bnr_slide .swiper-wrapper .swiper-slide')
const btn_prev = document.querySelector('.cardnews_btn .prev')
const btn_next = document.querySelector('.cardnews_btn .next')
const news_contents = document.querySelectorAll('.news_contents > div')

console.log(tab_contents,tab_title,tab_detail,sns_contents,bnr,btn_prev,btn_next,news_contents)

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
for(let i of sns_popup){i.style.display = 'none'}
sns_contents.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault()
        sns_popup.fir[i].style.display = 'block'
    })
})
sns_popup.forEach(function(a,b){
    a.addEventListener('click',function(e){
        e.preventDefault()
        sns_popup[b].style.display = 'none'
    })
})
bnr.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        t.classList.toggle('show')
    })
})
news_contents.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        t.classList.toggle('show')
    })
})