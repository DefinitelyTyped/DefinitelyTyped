"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var anime = require("animejs");
var test1 = anime({
    targets: 'div',
    duration: 40,
    color: "#FFFFFF"
});
var callback = function (anim) {
    console.log(anim.completed);
};
var test2 = anime({
    targets: 'div',
    translateX: function (el, i, index) {
        return 0;
    },
    translateY: '40px',
    color: [
        { value: '#FF0000', duration: 2000 },
        { value: '#00FF00', duration: 2000 },
        { value: '#0000FF', duration: 2000 },
    ],
    duration: function () {
        return 1000000000000;
    },
    update: callback,
    complete: callback
});
var someNodes = document.querySelector('button');
var test3 = anime({
    targets: someNodes,
    top: "-5000000em"
});
var tl = anime.timeline({
    loop: false,
    direction: 'normal'
});
tl.add({
    targets: ".tiny-divvy-div",
    scale: 10000000
});
var path = anime.path('#motionPath path');
test1.play();
test2.reverse();
test3.pause();
tl.seek(4000);
tl.finished.then(function () {
    console.log("I wonder if anyone will ever actually read this.");
});
var usesEnums = anime({
    targets: ".usingEnumsIsAReallyHandyThing",
    direction: "reverse" /* Reverse */,
    easing: "easeInOutExpo" /* InOutExpo */,
    someProperty: "+=4000"
});
var bezier = anime.bezier(0, 0, 100, 100);
// anime.speed = 100000000;
anime.speed = 4000;
anime.easings['hello'] = anime.bezier(0, 0, 1900, 3020);
var runningAnims = anime.running;
anime.remove(".tiny-divvy-div");
