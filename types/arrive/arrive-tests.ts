/// <reference types="jquery"/>

document.arrive("a.foobar", function() {
    this.getAttribute("href");
});

document.arrive("a.foobar", { fireOnAttributesModification: true, existing: true, onceOnly: true }, function() {
    this.getAttribute("href");
});

window.arrive("a.foobar", function() {
    this.getAttribute("href");
});

document.getElementsByClassName("foobar").arrive(".fizzbuzz", function() {
    this.getAttribute("href");
});

$(document).arrive(".test-elem", function() {
    const $newElem = $(this);
});

$(".container-1").arrive(".test-elem", function() {
    const $newElem = $(this);
});

$(document).arrive(".test-elem", (newElem) => {
    const $newElem = $(newElem);
});

document.unbindArrive();

$(document).unbindArrive();

$(document).unbindArrive(".test-elem");

const callbackFunc = () => {
};

$(document).unbindArrive(callbackFunc);

$(document).unbindArrive(".test-elem", callbackFunc);

Arrive.unbindAllArrive();

document.unbindLeave();

$(document).unbindLeave();

$(document).unbindLeave(".test-elem");

$(document).unbindLeave(callbackFunc);

$(document).unbindLeave(".test-elem", callbackFunc);

Arrive.unbindAllLeave();
