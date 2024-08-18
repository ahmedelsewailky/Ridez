
/**
 * Hero Slide at Header
 * 
 * @page index.html
 */
var heroSlider = new Swiper(".hero-swiper", {
    effect: "fade",
    loop: true,
    pagination: {
        el: ".hero-swiper .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});



/**
 * Our Services Section Swiper
 * 
 * @page index.html
 */
var serviceSlide = new Swiper(".services-swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



/**
 * Our Trusted Client Section Swiper
 * 
 * @page about.html
 */
var serviceSlide = new Swiper(".brand-swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



/**
 * Client Feedback "Testimonails" Section Swiper
 * 
 * @page index.html
 */
var clientFeedBackSwiper = new Swiper(".client-fb-swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".client-fb-swiper .swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});



/**
 * Client Feedback "Testimonails" Section Swiper
 * 
 * @page index.html
 */
var clientFeedBackSwiper = new Swiper(".blog-swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});