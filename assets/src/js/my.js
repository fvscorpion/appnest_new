$(function () {

    $('.toggleMenu').click(function (e) {
        e.preventDefault();
        $('.menu-mobile').toggleClass('menu_active');
        $('.content').toggleClass('content_active').toggleClass('fixed');

        $('header .hamburger').toggleClass('is-active');
    });

    $(".menu-mobile").on("click", "a", function () {
        $('.menu-mobile').removeClass('menu_active');
        $('.content').removeClass('content_active').removeClass('fixed');
        $('header .hamburger').removeClass('is-active');

        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $(".menu").on("click", "a", function () {
        $('.menu').removeClass('on');
        $('header .hamburger').removeClass('is-active');

        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $(".back-to-top").click(function (e) {
        window.history.replaceState(null, null, window.location.pathname);
        $('body,html').animate({ scrollTop: 0 }, 1400);
        return false;
    });

    wow = new WOW({
        mobile: false
    })
    wow.init();

    $(document).ready(function () {
        $(".screenshots-wrapper").owlCarousel({
            loop: true,
            margin: 30,
            autoHeight: true,
            nav: false,
            dots: true,
            autoplay: false,
            fluidSpeed: 600,
            dotsSpeed: 600,
            dragEndSpeed: 600,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1,
                },
                640: {
                    items: 2,
                    slideBy: 2,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 4
                }
            }
        });
    });

    $(document).ready(function () {
        $(".feedback-wrapper").owlCarousel({
            loop: true,
            margin: 30,
            autoHeight: true,
            nav: false,
            dots: true,
            autoplay: false,
            fluidSpeed: 600,
            dotsSpeed: 600,
            dragEndSpeed: 600,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1,
                },
                640: {
                    items: 2,
                    slideBy: 2,
                },
                768: {
                    items: 3,
                }
            }
        });
    });

    $(document).ready(function () {
        $(".pricing-wrapper").owlCarousel({
            margin: 30,
            autoHeight: true,
            nav: false,
            dots: true,
            autoplay: false,
            fluidSpeed: 600,
            dotsSpeed: 600,
            dragEndSpeed: 600,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1,
                    loop: true
                },
                640: {
                    items: 2,
                    slideBy: 2,
                    loop: true
                },
                768: {
                    items: 3,
                    loop: false
                }
            }
        });
    });

    $('.js-tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');
    });
    
});