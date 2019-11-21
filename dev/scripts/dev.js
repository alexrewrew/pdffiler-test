// const swup = new Swup();

(($) => {
    "use strict";

    // --- DOM elements ---
    const DOMs = {
        documentBody: $("body"),
        documentBodyHtml: $("html, body"),

        header: $('header'),
        nav: $('nav'),
        footer: $('footer'),

        navBtn: $("#nav-btn"),

        selectChosen: $(".select-chosen"),
        selectSelect2: $(".select-select2"),
        selectSelect2Container: $(".select-select2-container"),

        sliderSlick: $(".slider-slick"),
        sliderSlickArrowLeft: "<div class='slider-slick__arrow left'></div>",
        sliderSlickArrowRight: "<div class='slider-slick__arrow right'></div>",
        sliderSlickCounter: $(".slider-slick-counter"),
        sliderOwl: $('.owl-carousel'),

        stickyDiv: $('.sticky-div'),

        linkSmooth: $(".smooth"),
        linkUp: $(".link-up"),

        accordion: $('.accordion'),
        tabs: $('.tabs-wrapper'),
        datepicker: $(".datepicker"),

    };

    const STATEs = {
        hidden: 'hidden',
        visible: 'visible',
        scroll: 'scroll',
        active: 'active',
        open: 'open'
    };

    // --- Browser detection ---
    // const browser = bowser.getParser(window.navigator.userAgent);
    // const currentBrowser = browser.getBrowserName();
    //
    // if (currentBrowser === 'Firefox') {
    //     DOMs.documentBody.addClass('brow-firefox');
    // }
    // if (currentBrowser === 'Chrome') {
    //     DOMs.documentBody.addClass('brow-chrome');
    // }
    // if (currentBrowser === 'Safari') {
    //     DOMs.documentBody.addClass('brow-safari');
    // }
    // if (currentBrowser === 'Internet Explorer') {
    //     DOMs.documentBody.addClass('brow-msie');
    // }
    // if (currentBrowser === 'Microsoft Edge') {
    //     DOMs.documentBody.addClass('brow-msedge');
    // }

    // --- Size detection ---
    const NUMs = {
        windowHeight: 0,
        windowWidth: 0,
        headerHeight: 0,
        navHeight: 0
    };

    // --- Init page ---
    const initPage = function () {
        NUMs.windowHeight = window.innerHeight;
        NUMs.windowWidth = window.innerWidth;
        NUMs.headerHeight = DOMs.header.outerHeight();
        NUMs.navHeight = DOMs.nav.outerHeight();
    };

    // --- Viewport element detection ---
    (function ($) {
        $.fn.isInViewport = function () {
            if ($(this).length > 0) {
                let elementTop = $(this).offset().top + (NUMs.headerHeight / 2) - NUMs.navHeight;
                let elementBottom = elementTop;
                let viewportTop = $(window).scrollTop();
                let viewportBottom = viewportTop + NUMs.windowHeight;
                return elementBottom > viewportTop && elementTop < viewportBottom;
            }
        };
    })(jQuery);

    // adaptive change images places
    (function ($) {
        $.fn.insertChange = function () {

            let make = function () {
                const insertAfter = $(this).find('.insert-after');
                const insertIn = $(this).find('.insert-in');
                const insertImg = $(this).find('.insert-img');

                if (NUMs.windowWidth < 768) {
                    $(insertImg).insertAfter($(insertAfter));
                } else if (NUMs.windowWidth > 767) {
                    $(insertImg).appendTo($(insertIn));
                }
            };
            return this.each(make);
        };
    })(jQuery);

    // --- Responsive scripts ---

    $(window).on('load resize', function () {
        initPage();

        // if (NUMs.windowWidth < 768) {
            // DOMs.stickyDiv.trigger("sticky_kit:detach");
        // } else if (NUMs.windowWidth > 767) {
            // DOMs.stickyDiv.stick_in_parent({offset_top: NUMs.navHeight});
        // }
    });

    // --- Document ready scripts ---
    $(document).ready(function () {

        // --- Sending form ---
        let subscribeForm = $('#ajax_form');
        let data = {};

        subscribeForm.on('submit', function(e) {
            e.preventDefault();
            data.webresource = subscribeForm[0][0].value;
            data.phone = subscribeForm[0][1].value;
            data.fio = subscribeForm[0][2].value;
            data.message = subscribeForm[0][3].value;
            data.submit = 'subscribe';
            $.ajax({
                type: 'POST',
                url: 'php/send.php',
                data: data,
                success: function() { //Данные отправлены успешно
                    $('form').removeClass('error');
                    $('form').addClass('success');
                },
                error: function() { // Данные не отправлены
                    $('formn').addClass('error');
                }
            });
        });

        // --- Nav trigger ---
        // DOMs.navBtn.on('click', function (e) {
        //     e.preventDefault();
        //     DOMs.documentBodyHtml.toggleClass(STATEs.open);
        // });

        // --- Scroll speed ---
        // jQuery.scrollSpeed(100, 600);

        // --- Select Chosen ---
        // DOMs.selectChosen.chosen({
        //     disable_search_threshold: 4,
        //     no_results_text: "Нічого не знайдено"
        // });

        // --- Select Select2 ---
        // DOMs.selectSelect2.select2({
        //     placeholder: "Choose...",
        //     allowClear: true,
        //     dropdownParent: DOMs.selectSelect2Container,
        //     minimumResultsForSearch: Infinity
        // });

        // --- Slider Slick Counter ---
        // DOMs.sliderSlick.on("init reInit afterChange", (event, slick, currentSlide) => {
        //     let i = (currentSlide ? currentSlide : 0) + 1;
        //     DOMs.sliderSlickCounter.html(i + '<span>/</span>' + slick.slideCount);
        // });

        // --- Slider Slick
        DOMs.sliderSlick.slick({
            prevArrow: DOMs.sliderSlickArrowLeft,
            nextArrow: DOMs.sliderSlickArrowRight,
            dots: true,
            // variableWidth: true,
            // adaptiveHeight: true
        });

        // --- Slider Owl ---
        // DOMs.sliderOwl.owlCarousel({
        //     center: true,
        //     items: 2,
        //     autoWidth: true,
        //     loop: true,
        // });

        // --- Slider Swiper ---
        // const swiper = new Swiper('.swiper-container', {
        //     slidesPerView: 'auto',
        //     centeredSlides: true,
        //     spaceBetween: 45,
        //     loop: true,
        //     preventClicks: false,
        //     preventClicksPropagation: false,
        //     slideToClickedSlide: true,
        //     autoplay: {
        //         delay: 2500,
        //         disableOnInteraction: false,
        //     },
        //     pagination: {
        //         el: '.swiper-pagination',
        //         type: 'fraction',
        //         clickable: true,
        //     },
        //     navigation: {
        //         prevEl: '.swiper-arrow.left',
        //         nextEl: '.swiper-arrow.right',
        //     },
        // });

        // --- Accordion ---
        // DOMs.accordion.rewAccordion();

        // --- Tabs ---
        // DOMs.tabs.rewTabs();

        // --- Datepicker ---
        // DOMs.datepicker.flatpickr();

        // --- Scroll class change ---
        // $(window).scroll(function () {
        //     if ($(this).scrollTop() > 200) {
        //         DOMs.linkUp.addClass(STATEs.visible);
        //     } else {
        //         DOMs.linkUp.removeClass(STATEs.visible);
        //     }
        // });

        // --- Anchor links smooth ---
        // DOMs.linkSmooth.on('click', function (e) {
        //     e.preventDefault();
        //
        //     const id = $(this).attr("href");
        //     const top = $(id).offset().top - 70;
        //
        //     DOMs.documentBodyHtml.animate({
        //         scrollTop: top
        //     }, 500);
        // });
    });
})(jQuery);




