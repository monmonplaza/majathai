$(document).ready(function () {
    $(".slider").responsiveSlides({
        nav: true,
        pause: false,
        pager: true,
        auto: true
    });

    $('.next').html('&#0155');
    $('.prev').html('&#0139');
    $('.rslides1_s1 a, .rslides1_s2 a, .rslides1_s3 a').html('&#0151');


    $('.toggle-menu').click(function () {
        $(this).toggleClass('close');
        $('nav').toggleClass('active');
    });

    $('nav ul li').click(function () {
        $('nav').removeClass('active');
    });





    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        $('.banner-promo').css('top', 50 + (scrollPos) * .09 + '%');
        $('.banner-main').css('top', 50 + (scrollPos) * .09 + '%');
        $('#about').css('background-position', 'center ' + (scrollPos) * .015 + 'px');
    });


    $('.open-gallery').click(function () {
        var items = [];
        $($(this).attr('href')).find('.slide').each(function () {
            items.push({
                src: $(this)
            });
        });
        $.magnificPopup.open({
            items: items,
            gallery: {
                enabled: true
            }
        });
    });

    var scrollLink = $('.nav-item');

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    })

    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 30;
            if (sectionOffset <= scrollPos) {
                $(this).parent().addClass('active')
                $(this).parent().siblings().removeClass('active')
            }
        })


    })




});