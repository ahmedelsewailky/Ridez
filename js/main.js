/**
 * Back To Top Button
 * 
 */
$(function () {
    // Show the button when the user scrolls down 100px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});



/**
 * Preloader
 */
$(function() {
    $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $('body').css('overflow', 'auto');
            $('.content').fadeIn('slow');
        });
    });
});


/**
 * Pop-Up Search From Navbar Button
 */
$(function () {
    // Open search window when you click on search icon
    $('#search-icon').click(function () {
        $('#search-popup').fadeIn(300, function () {
            $(this).addClass('show');
        });
        $('body').css('overflow', 'hidden'); 
    });

    // Close the search window when you press the close button.
    $('.close-btn').click(function () {
        $('#search-popup').removeClass('show').fadeOut(300, function () {
            $('body').css('overflow', ''); 
        });
    });

    // Close the search window when clicking anywhere outside the search form.
    $('#search-popup').click(function (e) {
        if ($(e.target).closest('.search-content').length === 0) {
            $(this).removeClass('show').fadeOut(300, function () {
                $('body').css('overflow', '');
            });
        }
    });
});



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