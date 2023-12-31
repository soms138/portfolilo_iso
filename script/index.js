$('#fullpage').fullpage({
    autoScrolling:true,
    scrillHorizontally:true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Intro','About','Web','Web','Landing','SNS','Banner','Cardnews','Detail','Contact'],
    anchors: ['Intro','About','Web','Web','Landing','SNS','Banner','Cardnews','Detail','Contact'],
})
const mouseImg = document.querySelector('#mouse')
console.log(mouseImg)
window.addEventListener('mousemove',function(e){
        mouseImg.style.left = `${e.clientX}px` // X축
        mouseImg.style.top = `${e.clientY}px` // Y축
})
$('.nav_open').hide()
$('nav').on('mouseover',function(){
    $('.nav_open').stop().slideDown();
})
$('nav').on('mouseout',function(){
    $('.nav_open').stop().slideUp();
})
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const tab_detail = document.querySelectorAll('.tab_detail > img')
const sns_contents = document.querySelectorAll('.sns_contents')
const sns_popup = document.querySelectorAll('.sns_popup > img')
const sns_bg =document.querySelector('.sns_wrap > p')
const bnr_tab = document.querySelectorAll('#bnr_slide .swiper-slide')
const bnr_popup = document.querySelectorAll('.bnr_popup > p')
const bnr_bg = document.querySelector('.bnr_bg')
const btn_prev = document.querySelector('.cardnews_btn .prev')
const btn_next = document.querySelector('.cardnews_btn .next')
const news_contents = document.querySelectorAll('.news_contents > div')
const cover = document.querySelectorAll('.c_left > .cover')
const txt = document.querySelector('.c_left > .txt')
const c_right = document.querySelectorAll('.c_right > a')
const nav = document.querySelectorAll('.fnb_right > a')
const footer = document.querySelector('footer')
const section = document.querySelectorAll('.section')
const detail = document.querySelectorAll('.detail > p')
console.log(tab_contents,tab_title,tab_detail,sns_contents,sns_popup,bnr_tab,bnr_popup,bnr_bg,btn_prev,btn_next,news_contents,cover,txt,c_right,nav,footer)
$(".sea").ripples('play')
$(".sea").ripples({
    resolution: 500, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
    perturbance: 0.02, // 잔물경 굴절 강도. 0은 굴절 없음
});
nav.forEach(function(t){
    t.addEventListener('click', function(){
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
sns_bg.style.display = 'none'
sns_contents.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault();
        sns_popup[i].style.display = 'block'
        for(let i of sns_popup){i.parentElement.style.display = 'block'}
        sns_bg.style.display = 'block'
    })
})
sns_bg.addEventListener('click',function(e){
    e.preventDefault()
    for(let i of sns_popup){i.style.display = 'none'}
    for(let i of sns_popup){i.parentElement.style.display = 'none'}
    this.style.display = 'none'
})
// bnr
for(let i of bnr_popup){i.style.display = 'none'}
bnr_bg.style.display = 'none'
bnr_tab.forEach(function(t,i){
    t.addEventListener('click', function(e){
        e.preventDefault();
        bnr_popup[i].style.display = 'block'
        bnr_bg.style.display = 'block'
    })
})
bnr_bg.addEventListener('click',function(e){
    e.preventDefault()
    for(let i of bnr_popup){i.style.display = 'none'}
    this.style.display = 'none'
})
const bnr_slide = new Swiper('#bnr_slide',{
    slidesPerView: 1.5,
    centeredSlides:true,
    direction: 'horizontal',
    autoplay:{delay:3000},
    speed:800,
    spaceBetween: 30,
    loop:true,
    scrollbar:{el:'#bnr_slide .swiper-scrollbar'},
})
// detail
for(let i of detail){
    i.addEventListener('mouseover',function(){
        $.fn.fullpage.setAllowScrolling(false)
    })
    i.addEventListener('mouseout',function(){
        $.fn.fullpage.setAllowScrolling(true)
    })
}