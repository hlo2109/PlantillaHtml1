$(function () {
    $(".header .menu .btnmenu").click(function () {
        $(".header .menu ul").addClass('left');
        $(".sombra").fadeIn('slow');
    })
    $(".sombra").click(function () {
        $(".header .menu ul").removeClass('left');
        $(".sombra").fadeOut('slow');
    })
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000
    });
})