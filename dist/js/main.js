$(document).ready(function () {
    $(".slider").responsiveSlides({
        nav: true,
        pause: false,
        pager: true,
        auto: false
    });

    $('.next').html('&#0155');
    $('.prev').html('&#0139');
    $('.rslides1_s1 a, .rslides1_s2 a, .rslides1_s3 a').html('&#0151');


    $('.toggle-menu').click(function () {
        $('nav').toggleClass('active');
    });
});