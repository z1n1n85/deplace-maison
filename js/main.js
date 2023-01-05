$(window).scroll(function() {
    var scroll = $(window).scrollTop();
        $(".picture-block__picture").css({
            transform: 'scale('+(100 + scroll/25)/100+')',
        });
});