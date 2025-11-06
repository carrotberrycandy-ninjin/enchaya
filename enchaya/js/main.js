$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1000,
        arrows: false,
        dots: true
    });

    $('.menu_btn').on('click', () => {
        $('body').toggleClass('on');
    });
});

const $fadeImg = $('.zoom-in-img');

$(window).on('scroll load', function () {
    $fadeImg.each(function () {
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        const offset = $(this).offset().top;

        if (scroll > offset - windowHeight + 100) {
            $(this).addClass('visible');
        }
    });
});

const $menuBtn = $('.menu_btn');

$(window).on('scroll load', function () {
    const scroll = $(window).scrollTop();

    $fadeImg.each(function () {
        const offset = $(this).offset().top;
        const windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 100) {
            $(this).addClass('visible');
        }
    });

    if (scroll > 100) {
        $menuBtn.addClass('hidden');
    } else {
        $menuBtn.removeClass('hidden');
    }
});
