
$(function () {

    /**
     * ==================================================================================
     * [1] - Back To Top Button
     * Show the button when the user scrolls down 100px
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backToTop').addClass("show");
        } else {
            $('#backToTop').removeClass("show");
        }

        // Calculate scroll progress
        var scrollTop = $(this).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var scrollPercent = (scrollTop / docHeight) * 100;
        var circleCircumference = 2 * Math.PI * 45; // Circumference of the circle

        // Update stroke-dashoffset to reflect scroll progress
        var strokeDashoffset = circleCircumference - (scrollPercent / 100 * circleCircumference);
        $('#progress-border circle').css('stroke-dashoffset', strokeDashoffset);
    });

    $('#backToTop').click(function () {
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
    const searchToggler = $("[data-toggle=\"search-popup\"]");
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



    /**
     * ==================================================================================
     * Trigger Odometer plugin
     */
    function initializeOdometers() {
        $('.odometer').each(function () {
            const count_number = $(this).data('number');
            $(this).text(count_number);
        });
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the odometer animation when it is visible
                const odometerElement = $(entry.target);
                if (!odometerElement.hasClass('animated')) {
                    odometerElement.addClass('animated');
                    const count_number = odometerElement.data('number');
                    odometerElement.text(count_number);
                }
            }
        });
    });
    $('.odometer').each(function () {
        observer.observe(this);
    });
});
