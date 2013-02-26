/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="hammerjs.d.ts" />

var hammer = new Hammer(document.getElementById("container"));
hammer.ondragstart = function (ev) { };
hammer.ondrag = function (ev) { };
hammer.ondragend = function (ev) { };
hammer.onswipe = function (ev) { };

hammer.ontap = function (ev) { };
hammer.ondoubletap = function (ev) { };
hammer.onhold = function (ev) { };

hammer.ontransformstart = function (ev) { };
hammer.ontransform = function (ev) { };
hammer.ontransformend = function (ev) { };

hammer.onrelease = function (ev) { };

$("#element")
   .hammer({
       // Options
   })
   .bind("tap", function (ev) {
       console.log(ev);
   });

$("#container").hammer({
    prevent_default: false,
    drag_vertical: false
}).bind("hold tap doubletap transformstart transform transformend dragstart drag dragend release swipe", function (ev) {
});