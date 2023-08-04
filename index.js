$(document).ready(function () {

    $('.banner-cards .owl-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        center: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

});