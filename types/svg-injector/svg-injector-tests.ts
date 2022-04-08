import svgInjector = require("svg-injector");

var SVGInjector: svgInjector.SVGInjector;

// Simple example
var mySVGsToInject = document.querySelectorAll('img.inject-me');
SVGInjector(mySVGsToInject);

// Single DOM element
SVGInjector(document.querySelector('.inject-me'));

// Configuration
SVGInjector(mySVGsToInject, {
    evalScripts: 'always',
    pngFallback: './path/to/images/',
    each: eachCallback
});
function eachCallback(element: SVGElement) { }

// Callback
SVGInjector(mySVGsToInject, null, callback);
function callback(count: number) { }
