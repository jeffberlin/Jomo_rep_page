// 'Learn More' scroll button functions
$(".learn-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".instructions").offset().top
    }, 'slow')
})