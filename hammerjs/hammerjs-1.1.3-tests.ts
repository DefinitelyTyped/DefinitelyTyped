/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="hammerjs-1.1.3.d.ts" />

// plugin check
if (!Hammer.HAS_TOUCHEVENTS && !Hammer.HAS_POINTEREVENTS) {
    Hammer.plugins.fakeMultitouch();
    Hammer.plugins.showTouches();
}

// instance method check
var el = document.getElementById("container");

Hammer(el).on("doubletap", function () {
    alert('you doubletapped me!');
});

var hammertime = Hammer(el, {
    drag: false,
    transform: false
}).off("tap", function (event:HammerEvent) {
    alert('hello!');
});

hammertime.enable(false);

hammertime.on("touch drag transform", function (ev: HammerEvent) {
    if (!ev.gesture) {
        return;
    }

    if (ev.gesture.deltaX >= 20) {
        hammertime.trigger("swipe", ev.gesture);
    }
});

// jQuery check
$("#element")
   .hammer({
       // Options
   })
   .on("tap", function (ev) {
       console.log(ev);
   });

$("#container").hammer({
    prevent_default: false,
    drag_block_vertical: false
}).on("hold tap doubletap transformstart transform transformend dragstart drag dragend release swipe", function (ev) {
});