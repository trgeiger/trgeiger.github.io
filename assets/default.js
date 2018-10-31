$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 165) {
            $('.site-header').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 165) {
            $('.site-header').removeClass('navbar-fixed');
        }
    });


    $(".open, .overlay").click(function() {
        if ($(window).width() < 1130) {
            $(".overlay").fadeToggle(300);
            $(".open").toggleClass("close");
        };
    });

    $(".nav_items a").on('click', function() {
        if ($(window).width() < 1130) {
            $(".overlay").fadeToggle(300);
            $(".open").toggleClass("close");
        };
    });
});
