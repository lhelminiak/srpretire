(function ($) {
    'use strict';

    // Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 500,
            autoplayHoverPause: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
    }

    var wel_slides = $('.welcome_slides');
    wel_slides.owlCarousel();
    wel_slides.on('translate.owl.carousel', function (event) {
        $('.owl-item .single_slide .slide_text h2').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text h3').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text .btn').removeClass('animated').hide();
    })
    wel_slides.on('translated.owl.carousel', function (event) {
        $('.owl-item.active .single_slide .slide_text h2').addClass('animated custom_slideInUp').show();
        $('.owl-item.active .single_slide .slide_text h3').addClass('animated custom_slideInUp_2').show();
        $('.owl-item.active .single_slide .slide_text .btn').addClass('animated custom_slideInUp_btn_1').show();
    })

    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials, .special_dishes_slider, .blog_post_slider").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 8000
        });        
        $(".mini_port_testimonials").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 800,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
        $(".partner_company_slides").owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            center: true,
            autoplay: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
        $(".creative_gallery_slider").owlCarousel({
            items: 4,
            margin: 0,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 4
                }
            }
        });
    }

    // Navigation Active Code
    if ($.fn.navigation) {
        $("#navigation1").navigation();
        $("#navigation5").navigation({
            hidden: true
        });
    }

    $(".btn-show").click(function () {
        $("#navigation5").data("navigation").toggleOffcanvas();
    });


    // Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        $('.foo_latest_works_img').magnificPopup({
            type: 'image'
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="ion-ios-arrow-thin-up" aria-hidden="true"></i>'
        });
    }

    // Counterup Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Countdown Active Code
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $(this).find(".days").html(event.strftime("%D"));
            $(this).find(".hours").html(event.strftime("%H"));
            $(this).find(".minutes").html(event.strftime("%M"));
            $(this).find(".seconds").html(event.strftime("%S"));
        });
    });

    // Masonary Gallery Active Code
    $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').imagesLoaded(function () {
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').isotope({
            itemSelector: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item'
            }
        });
    });

    // Parallax active js
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // YouTube Video Active Code
    if ($.fn.mb_YTPlayer) {
        $('.player').mb_YTPlayer();
    }

    // MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    var $window = $(window);

    // Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // Preloader active code
    $window.on('load', function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);