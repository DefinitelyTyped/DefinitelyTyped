/// <reference path="modernizr.d.ts" />

declare var $: any;

function alert(thing: any) {
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
    var ms = Modernizr.prefixed("matchesSelector", HTMLElement.prototype, document.body);
    Modernizr.prefixed('requestAnimationFrame', window, false);

    Modernizr.mq('only all and (max-width: 400px)');
    Modernizr.mq('(min-width: 0px)');
    Modernizr.mq('only screen and (max-width: 768px)');

    Modernizr.addTest('track', () => {
        var video = document.createElement('video');
        // return typeof video.addTextTrack === 'function'
    });

    Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', (elem, rule) => {
        Modernizr.addTest('width', elem.offsetWidth == 9);
    });

    Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', (elem, rule) => {
          Modernizr.addTest('width', elem.offsetWidth == 9);
    }, 2, ["video", "image"]);

    Modernizr.testProp('pointerEvents');

    Modernizr.testAllProps('boxSizing');

    var elem;
    Modernizr.hasEvent('gesturestart', elem);
});
