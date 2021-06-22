

$('#slider1').tinycarousel();

$('#slider2').tinycarousel({ display: 2 });

$('#slider3').tinycarousel({ pager: true, interval: true });

$('#slider4').tinycarousel({ controls: false, pager: true, animation: false });

$('#slider5').tinycarousel({ axis: 'y' });

var oSlider7 = $('#slider7');

oSlider7.tinycarousel({ interval: true });

//The tinycarousel_move method you can use to make a anchor to a certain slide.
$('#gotoslide4').click(function () {
    oSlider7.tinycarousel_move(4);
    return false;
});

//The tinycarousel_start method starts the interval.
$('#startslider').click(function () {
    oSlider7.tinycarousel_start();
    return false;
});

//The tinycarousel_stop method stops the interval.
$('#stopslider').click(function () {
    oSlider7.tinycarousel_stop();
    return false;
});

$(document).ready(function () {    
    $('#slider-code').tinycarousel();
});

$(document).ready(function () {
    $('#slider-code').tinycarousel({ pager: true });
});

$('#slider-code').tinycarousel({
    callback: function (element, index) {
        console.log(element, index);
    }
});
