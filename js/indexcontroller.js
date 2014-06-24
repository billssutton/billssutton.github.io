

// Scrolling animation on scroller-arrow
$('.scroller-arrow[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            var css = target.css;
            var scrollToPosition = target.offset().top - ($(window).height() - target.outerHeight())/2;
            console.log($(window).height());
            console.log(target.outerHeight());
            $('html,body').animate({
                scrollTop: scrollToPosition
            }, 1200);
            return false;
        }
    }
});