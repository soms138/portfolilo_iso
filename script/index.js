$('#fullpage').fullpage({
    autoScrolling:true,
    scrillHorizontally:true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['intro','info','Web1','Web2','Web3','Landing','SNS','Banner','Cardnews','Detail','Contact'],
})
const bnr_slide = new Swiper('#bnr_slide',{
    slidesPerView: 2,
    direction: 'horizontal',
    centeredSlides:true,
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
        nextEl: '#news_slide .swiper-button-next',
        prevEl: '#news_slide .swiper-button-prev'
    }
})