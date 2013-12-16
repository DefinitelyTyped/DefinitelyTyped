/// <reference path="html2canvas.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

/* Tests copied directly from https://github.com/niklasvh/html2canvas/blob/master/tests/test.js */

/*
  html2canvas @VERSION@ <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/
var h2cSelector, h2cOptions;
(function(document, window) {
    var srcStart = '<script type="text/javascript" src="', scrEnd = '"></script>';


    document.write(srcStart + '/tests/assets/jquery-1.6.2.js' + scrEnd);
    document.write(srcStart + '/tests/assets/jquery.plugin.html2canvas.js' + scrEnd);
    var html2canvas = ['Core', 'Generate', 'Parse', 'Preload', 'Queue', 'Renderer', 'Util', 'Support', 'Font', 'renderers/Canvas'], i;
    for (i = 0; i < html2canvas.length; ++i) {
        document.write(srcStart + '/src/' + html2canvas[i] + '.js?' + Math.random() + scrEnd);
    }
    window.onload = function() {
        h2cSelector = [document.body];


        if (window.setUp) {
            window.setUp();
        }


        setTimeout(function() {


            $(h2cSelector).html2canvas($.extend({
                flashcanvas: "../external/flashcanvas.min.js",
                logging: true,
                profile: true,
                proxy: "http://html2canvas.appspot.com/query",
                useCORS: true
            }, h2cOptions));
        }, 100);
    };
}(document, window));

