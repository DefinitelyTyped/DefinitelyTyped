/// <reference path="../jquery/jquery-1.8.d.ts" />
/// <reference path="foundation-3.2.d.ts" />

function test_orbit() {
    $("#featured").orbit();
    $('#featured').orbit({
        animation: 'fade',
        animationSpeed: 800,
        timer: true,
        resetTimerOnClick: false,
        advanceSpeed: 4000,
        pauseOnHover: false,
        startClockOnMouseOut: false,
        startClockOnMouseOutAfter: 1000,
        directionalNav: true,
        captions: true,
        captionAnimation: 'fade',
        captionAnimationSpeed: 800,
        bullets: false,
        bulletThumbs: false,
        bulletThumbLocation: '',
        afterSlideChange: function () { },
        fluid: true
    });
}

function test_fluid() {
    $("#myModal").reveal();
}

function test_joyride() {
    $("#chooseID").joyride();
}