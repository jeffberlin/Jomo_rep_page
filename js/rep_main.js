// OS detection
if ( /Android|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("ios-img").style.display = 'none';
}

if ( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
    document.getElementById("play-img").style.display = 'none';
    document.getElementById("ios-img").style.marginRight = '0';
}

// 'Learn More' scroll button functions
$(".learn-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".instructions").offset().top
    }, 'slow')
})

