/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.finger.d.ts"/>

$.Finger.doubleTapInterval = 400;
$.Finger.flickDuration = 250;
$.Finger.pressDuration = 100;
$.Finger.motionThreshhold = 10;
$.Finger.preventDefault = true;
var fingerEventObject: JQueryFingerEventObject;
fingerEventObject.x = 1;
fingerEventObject.y = 2;
fingerEventObject.dx = 3;
fingerEventObject.dy = 4;
fingerEventObject.adx = 3;
fingerEventObject.ady = 4;
fingerEventObject.orientation = 'horizontal';
fingerEventObject.direction = 1;
$('body').on('drag', e => {
    if ('vertical' == e.orientation) return;
    e.preventDefault();
});

$('body').on('drag', '.drag', e => {
    if ('vertical' == e.orientation) return;
    e.preventDefault();
});

$('#menu').on('flick', function (e) {
    if ('horizontal' == e.orientation) {
        if (1 == e.direction) {
            $(this).addClass('is-opened');
        }
        else {
            $(this).removeClass('is-opened');
        }
    }
});
