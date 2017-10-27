// 'Learn More' scroll button functions
$(".learn-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".time-img").offset().top
    }, 'slow')
})