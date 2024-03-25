// scripts.js

$(document).ready(function() {
    // Testimonial Modal
    $('.testimonial').click(function() {
        $('#testimonialModal .modal-content').load($(this).data('content-url'));
        $('#testimonialModal').modal('show');
    });

    // Contact Form Modal (if needed)
    $('.contact-link').click(function() {
        $('#contactModal .modal-content').load($(this).data('content-url'));
        $('#contactModal').modal('show');
    });

    // Close Modals
    $('.modal .close').click(function() {
        $('.modal').modal('hide');
    });

    // Smooth Scrolling
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                });
            }
        }
    });

    // Form Validation (if needed)
    $('form').submit(function(event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});
