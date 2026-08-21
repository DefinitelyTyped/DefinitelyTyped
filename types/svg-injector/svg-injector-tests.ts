import svgInjector = require("svg-injector");

declare const SVGInjector: svgInjector.SVGInjector;

// Simple example
const mySVGsToInject = document.querySelectorAll("img.inject-me");
// $ExpectType void
SVGInjector(mySVGsToInject);

// Single DOM element
// $ExpectType void
SVGInjector(document.querySelector(".inject-me"));

// Configuration
SVGInjector(mySVGsToInject, {
    evalScripts: "always",
    pngFallback: "./path/to/images/",
    each: function(element) {
        // $ExpectType SVGElement | string
        element;
    },
});

// Callback
SVGInjector(mySVGsToInject, null, function(count) {
    // $ExpectType number
    count;
});
