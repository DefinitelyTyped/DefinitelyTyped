/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.cycle2.d.ts"/>

// basic
$('#element').cycle();


// code snippets from http://jquery.malsup.com/cycle2/api
$('.cycle-slideshow').cycle({
    speed: 600,
    manualSpeed: 100
});

var newSlide = '<img src="pic.jpg">';
$('.cycle-slideshow').cycle('add', newSlide);

$('.cycle-slideshow').cycle('destroy');

// goto 3rd slide
$('.cycle-slideshow').cycle('goto', 2);

$('.cycle-slideshow').cycle('next');

$('.cycle-slideshow').cycle('pause');

$('.cycle-slideshow').cycle('prev');

$('.cycle-slideshow').cycle('reinit');

// remove 2nd slide
$('.cycle-slideshow').cycle('remove', 1);

$('.cycle-slideshow').cycle('resume');

$('.cycle-slideshow').cycle('stop');


// from http://jquery.malsup.com/cycle2/demo/add.php
var images = [
    '<img src="http://malsup.github.io/images/p2.jpg">',
    '<img src="http://malsup.github.io/images/p3.jpg">',
    '<img src="http://malsup.github.io/images/p4.jpg">'
];

$('button').one('click', function() {
    for (var i=0; i < images.length; i++) {
        $('.cycle-slideshow').cycle('add', images[i]);
    }
    $(this).prop('disabled', true)
})
