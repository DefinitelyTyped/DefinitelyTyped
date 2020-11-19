

$(document).ready(function() {
  $('#mydiv').scrollToFixed();
});

$(document).ready(function() {
    $('.header').scrollToFixed({
        preFixed: function() { $(this).find('h1').css('color', 'blue'); },
        postFixed: function() { $(this).find('h1').css('color', ''); }
    });

    $('.footer').scrollToFixed( {
        bottom: 0,
        limit: $('.footer').offset().top,
        preFixed: function() { $(this).find('h1').css('color', 'blue'); },
        postFixed: function() { $(this).find('h1').css('color', ''); }
    });

    $('#summary').scrollToFixed({
        marginTop: $('.header').outerHeight() + 10,
        limit: function() {
            var limit = $('.footer').offset().top - $('#summary').outerHeight(true) - 10;
            return limit;
        },
        zIndex: 999,
        preFixed: function() { $(this).find('.title').css('color', 'blue'); },
        preAbsolute: function() { $(this).find('.title').css('color', 'red'); },
        postFixed: function() { $(this).find('.title').css('color', ''); },
        postAbsolute: function() { $(this).find('.title').css('color', ''); }
    });
});

var b = $.isScrollToFixed('.header');
