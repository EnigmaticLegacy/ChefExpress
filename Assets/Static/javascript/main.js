$(document).ready(function() {
            
    setTimeout(function(){
        $("#body").addClass('loaded');
    }, 3000);

    var owl = $('.owl-carousel');
        owl.owlCarousel({
            margin: 10,
            loop:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            dots:false,
            responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
            }
    });

});
