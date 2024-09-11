
$(function () {

    /**
     * ==================================================================================
     * [1] - Back To Top Button
     * Show the button when the user scrolls down 100px
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').addClass("show");
        } else {
            $('#back-to-top').removeClass("show");
        }
    });
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });



    /**
     * ==================================================================================
     * [2] - Preloader
     */
    $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $('body').css('overflow', 'auto');
            $('.content').fadeIn('slow');
        });
    });



    /**
     * ==================================================================================
     * [3] - Pop-Up Search From Navbar Button
     */
    const searchToggler = $("#searchToggler");
    const searchForm = $(".search-form");
    const searchFormCloseBtn = $(".search-form .close-btn");

    searchToggler.on("click", () => {
        searchForm.animate({ right: '0' });
        searchForm.find("form").animate({ width: '75%' });
    });

    searchFormCloseBtn.on("click", () => {
        searchForm.find("form").animate({ width: '0' });
        searchForm.animate({ right: '-100%' });
    });


    /**
     * ==================================================================================
     * [4] - Get Search Keyword
     */
    var urlParams = new URLSearchParams(window.location.search);
    var keyword = urlParams.get('q');
    if (keyword) {
        $('.search-keyword').text(keyword);
        $('#search-input').val(keyword);
    }



    /**
     * ==================================================================================
     * [5] - Counter Up
     */
    function animateCounter(element, start, end, duration) {
        $({ count: start }).animate({ count: end }, {
            duration: duration,
            easing: 'swing',
            step: function () {
                $(element).text(Math.floor(this.count));
            },
            complete: function () {
                $(element).text(this.count);
            }
        });
    }

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // لتتبع العدادات التي بدأت
    var countersStarted = [];

    $(window).on('scroll', function () {
        $('.counter').each(function () {
            var $counter = $(this);

            // التحقق إذا كان العداد قد بدأ بالفعل
            if (!countersStarted.includes($counter[0]) && isScrolledIntoView($counter)) {
                var endValue = parseInt($counter.data('ridez-number'));
                animateCounter($counter, 0, endValue, 2000, 'swing');

                // إضافة العداد إلى القائمة حتى لا يتكرر
                countersStarted.push($counter[0]);
            }
        });
    });




    /**
     * ==================================================================================
     * [6] - Tab Bane Preloader Effect
     */
    $('.nav-pills .nav-link').on('click', function (event) {
        event.preventDefault(); // Prevent the tab from switching immediately

        var targetTab = $(this).attr('data-bs-target'); // Get the target tab's content ID

        $('.nav-tab-preloader').fadeIn('fast', function () {
            // After the preloader is shown, switch the tab content
            $('.nav-pills .nav-link').removeClass('active');
            $(event.target).addClass('active');

            $('.tab-content .tab-pane').removeClass('show active');
            $(targetTab).addClass('show active');

            // Hide the preloader after a short delay
            setTimeout(function () {
                $('.nav-tab-preloader').fadeOut('fast');
            }, 500); // Adjust timing as needed
        });
    });
});
