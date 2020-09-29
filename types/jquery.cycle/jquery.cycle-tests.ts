// As basic as it can be
$('#element').cycle();

/* Beginner Demos */

$('#s1').cycle('fade');

$('#s2').cycle({
    fx: 'scrollDown'
});

$('#s3').cycle({
    fx: 'fade',
    speed: 2500
});

$('#s4').cycle({
    fx: 'scrollDown',
    speed: 300,
    timeout: 2000
});

$('#s5').cycle({
    fx: 'fade',
    pause: true
});

$('#s6').cycle({
    fx: 'scrollDown',
    random: true
});

/* Intermediate Demos (Part 1) */
$('#s1').cycle({
    fx: 'zoom',
    easing: 'easeInBounce',
    delay: -4000
});

$('#s2').cycle({
    fx: 'scrollDown',
    easing: 'easeOutBounce',
    delay: -2000
});

$('#s3').cycle({
    fx: 'zoom',
    sync: false,
    delay: -4000
});

$('#s4').cycle({
    fx: 'scrollDown',
    sync: false,
    delay: -2000
});

$('#s5').cycle({
    fx: 'shuffle',
    delay: -4000
});

$('#s6').cycle({
    fx: 'shuffle',
    shuffle: {
        top: -230,
        left: 230
    },
    easing: 'easeInOutBack',
    delay: -2000
});

/* Intermediate Demos (Part 2) */

$('#s1').cycle({
    fx: 'slideY',
    speed: 300,
    next: '#s1',
    timeout: 0
});

$('#s2').cycle({
    fx: 'fade',
    speed: 'fast',
    timeout: 0,
    next: '#next2',
    prev: '#prev2'
});

$('#s3').cycle({
    fx: 'fade',
    speed: 300,
    timeout: 3000,
    next: '#s3',
    pause: true
});

$('#s4')
.before('<div id="nav">')
.cycle({
    fx: 'turnDown',
    speed: 'fast',
    timeout: 0,
    pager: '#nav'
});

$('#s5').cycle({
    fx: 'scrollLeft',
    timeout: 5000,
    before: function () {
        $('#output').html("Scrolling image:<br>" + this.src);
    },
    after: function () {
        $('#output').html("Scroll complete for:<br>" + this.src)
            .append('<h3>' + this.alt + '</h3>');
    }
});

$('#s6').cycle({
    fx: 'scrollUp',
    timeout: 6000,
    delay: -2000
});

$('#s7').cycle({
    fx: 'scrollRight',
    delay: -1000
});

/* Advanced Demos (Part 1) */

$('#s1').cycle({
    fx: 'zoom',
    speedIn: 2500,
    speedOut: 500,
    easeIn: 'easeInBounce',
    easeOut: 'easeOutElastic',
    sync: false,
    delay: -4000
});

$('#s2').cycle({
    fx: 'scrollDown',
    speedIn: 2000,
    speedOut: 500,
    easeIn: 'easeInCirc',
    easeOut: 'easeOutBounce',
    delay: -2000
});

$('#s3').cycle({
    fx: 'custom',
    cssBefore: {
        left: 232,
        top: -232,
        display: 'block'
    },
    animIn: {
        left: 0,
        top: 0
    },
    animOut: {
        left: 232,
        top: 232
    },
    delay: -3000
});

$('#s4').cycle({
    fx: 'custom',
    sync: false,
    cssBefore: {
        top: 0,
        left: 232,
        display: 'block'
    },
    animIn: {
        left: 0
    },
    animOut: {
        top: 232
    },
    delay: -1000
});

$('#s5').cycle({
    fx: 'custom',
    cssBefore: {
        left: 115,
        top: 115,
        width: 0,
        height: 0,
        opacity: 1,
        display: 'block'
    },
    animOut: {
        opacity: 0
    },
    animIn: {
        left: 0,
        top: 0,
        width: 200,
        height: 200
    },
    cssAfter: {
        zIndex: 0
    },
    delay: -3000
});

$('#s6').cycle({
    fx: 'custom',
    cssBefore: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        display: 'block'
    },
    animIn: {
        width: 200,
        height: 200
    },
    animOut: {
        top: 200,
        left: 200,
        width: 0,
        height: 0
    },
    cssAfter: {
        zIndex: 0
    },
    delay: -1000
});

/* Advanced Demos (Part 2) */

$('#s6').cycle({
    fx: 'custom',
    cssBefore: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        zIndex: 1
    },
    animIn: {
        width: 200,
        height: 200
    },
    animOut: {
        top: 200,
        left: 200,
        width: 0,
        height: 0
    },
    cssAfter: {
        zIndex: 0
    }
});

$.fn.cycle.transitions['pinch'] = function ($cont, $slides, opts) {
    var $el = $($slides[0]);
    var w = $el.width();
    var h = $el.height();
    opts.cssBefore = { top: 0, left: 0, width: 0, height: 0, zIndex: 1 };
    opts.animIn = { width: w, height: h };
    opts.animOut = { top: h, left: w, width: 0, height: 0 };
    opts.cssAfter = { zIndex: 0 };
};

$('#s1').cycle('pinch');

$('#s2').cycle({
    fx: 'pinch',
    delay: 2000
});

/* More Demos (from the more demos page) */

// Using multiple transition effects in a single slide slideshow
$('#slideshow2').cycle({
    fx: 'scrollLeft,scrollDown,scrollRight,scrollUp',
    randomizeEffects: false,
    easing: 'easeInBack' // easing supported via the easing plugin
});

// Another Advanced "pager" Demo
$('#slideshow').cycle({
    fx: 'turnDown',
    speed: 'fast',
    timeout: 0,
    pager: '#nav',
    pagerAnchorBuilder: function (idx, slide) {
        // return selector string for existing anchor
        return '#nav li:eq(' + idx + ') a';
    }
});

// Using the 'slideExpr' option
$('#slideshow').cycle({ slideExpr: 'img' });

// Defeating IE's ClearType bug
$('#slideshow').cycle({
    cleartype: false // disable cleartype corrections
});

// Using the 'nowrap' option (manual slideshow)
$('#s1').cycle({
    fx: 'scrollHorz',
    prev: '#prev1',
    next: '#next1',
    nowrap: true,
    timeout: 0
});

// Using a continually transitioning slideshow (the 'continuous' option)
$('#slideshow').cycle({
    fx: 'shuffle',
    continuous: true
});
