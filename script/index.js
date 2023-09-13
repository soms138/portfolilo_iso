$('#fullpage').fullpage({
    autoScrolling:true,
    scrillHorizontally:true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['intro','info','Web1','Web2','Web3','Landing','SNS','Banner','Cardnews','Detail','Contact'],
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
})
const news_slide = new Swiper('#news_slide',{
    slidesPerView: 1,
    direction: 'horizontal',
    speed:1000,
    navigation: {
        nextEl: '.slide_btn .swiper-button-next',
        prevEl: '.slide_btn .swiper-button-prev'
    }
})
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const tab_detail = document.querySelectorAll('.tab_detail')
const sns_contents = document.querySelectorAll('.sns_contents')
const bnr = document.querySelectorAll('#bnr_slide .swiper-wrapper .swiper-slide')
const news = document.querySelectorAll('#news_slide .swiper-wrapper .swiper-slide')
console.log(tab_contents,tab_title,tab_detail,sns_contents,bnr,news)
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
        tab_detail[i].style.display = 'block'
    })
})
sns_contents.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        t.classList.toggle('show')
    })
})
bnr.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        t.classList.toggle('show')
    })
})
news.forEach(function(t){
    t.addEventListener('click',function(e){
        e.preventDefault()
        t.classList.toggle('show')
    })
})