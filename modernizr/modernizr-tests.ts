/// <reference path="modernizr.d.ts" />

declare var $: any;

window.alert = function(thing?: string) {
    $('#content').append('<div>' + thing + '</div>');
}

$(function () {
    var audio = new Audio();
    audio.src = Modernizr.audio.ogg ? 'background.ogg' :
            Modernizr.audio.mp3 ? 'background.mp3' :
                                  'background.m4a';

    if (Modernizr.webgl) {
        // loadAllWebGLScripts();
    } else {
        var msg = 'With a different browser you’ll get to see the WebGL experience here: get.webgl.org.';
        document.getElementById('#notice').innerHTML = msg;
    }

    Modernizr.prefixed('boxSizing');
    Modernizr.prefixed('requestAnimationFrame', window);
    var ms = Modernizr.prefixed("matchesSelector", HTMLElement.prototype, true);
    Modernizr.prefixed('requestAnimationFrame', window, false);

    Modernizr.mq('only all and (max-width: 400px)');
    Modernizr.mq('(min-width: 0px)');
    Modernizr.mq('only screen and (max-width: 768px)');

    Modernizr.addTest('track', () => {
        var video = document.createElement('video');
        return typeof video.addTextTrack === 'function'
    });

    Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', (elem, rule) => {
        Modernizr.addTest('width', elem.offsetWidth == 9);
    });

    Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', (elem, rule) => {
          Modernizr.addTest('width', elem.offsetWidth == 9);
    }, 2, ["video", "image"]);

    Modernizr.testProp('pointerEvents');

    Modernizr.testAllProps('boxSizing');

    var elem: Element;
    Modernizr.hasEvent('gesturestart', elem);

    if (!Modernizr.input.autofocus) {
          $("[autofocus]").focus();
    }
});


Modernizr.on('flash', function( result ) {
  if (result) {
   // the browser has flash
  } else {
    // the browser does not have flash
  }
});

Modernizr.addTest('itsTuesday', function() {
 var d = new Date();
 return d.getDay() === 2;
});

Modernizr.addTest('hasJquery', 'jQuery' in window);

var detects = {
 'hasjquery': 'jQuery' in window,
 'itstuesday': function() {
   var d = new Date();
   return d.getDay() === 2;
 }
}
Modernizr.addTest(detects);

var keyframes = Modernizr.atRule('@keyframes');
if (keyframes) {
  // keyframes are supported
  // could be `@-webkit-keyframes` or `@keyframes`
} else {
  // keyframes === `false`
}

Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];

Modernizr.hasEvent('blur') // true;

Modernizr.hasEvent('devicelight', window) // true;

var query = Modernizr.mq('(min-width: 900px)');
if (query) {
  // the browser window is larger than 900px
}

Modernizr.prefixed('boxSizing')

var raf = Modernizr.prefixed('requestAnimationFrame', window);
raf(function() {
});

var rAFProp = Modernizr.prefixed('requestAnimationFrame', window, false);
rAFProp === 'WebkitRequestAnimationFrame' // in older webkit

Modernizr.prefixedCSS('transition') // '-moz-transition' in old Firefox

Modernizr.prefixedCSSValue('background', 'linear-gradient(left, red, red)')

var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'

rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'

Modernizr.testAllProps('boxSizing')  // true
Modernizr.testAllProps('display', 'block') // true
Modernizr.testAllProps('display', 'penguin') // false
Modernizr.testAllProps('shapeOutside', 'content-box', true);

Modernizr.testProp('pointerEvents')  // true
Modernizr.testProp('pointerEvents', 'none') // true
Modernizr.testProp('pointerEvents', 'penguin') // false

Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
  // elem is the first DOM node in the page (by default #modernizr)
  // rule is the first argument you supplied - the CSS rule in string form
  Modernizr.addTest('widthworks', elem.style.width === '9px')
});

Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
  document.getElementById('modernizr').style.width === '1px'; // true
  document.getElementById('modernizr2').style.width === '2px'; // true
  elem.firstChild === document.getElementById('modernizr2'); // true
}, 1);

Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
  document.getElementById('modernizr').style.width === '1px'; // true
  document.getElementById('modernizr2').style.width === '2px'; // true
  elem.firstChild === document.getElementById('modernizr2'); // true
}, 1);
