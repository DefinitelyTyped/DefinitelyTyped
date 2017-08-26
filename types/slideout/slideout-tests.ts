import Slideout = require("slideout");

// Slideout(options)
var slideout = new Slideout({
    "panel": document.getElementById("panel"),
    "menu": document.getElementById("menu"),
    "padding": 256,
    "tolerance": 70
});

// Slideout.open();
slideout.open();

// Slideout.close();
slideout.close();

// Slideout.toggle();
slideout.toggle();

// Slideout.isOpen();
slideout.isOpen(); // true or false

// Slideout.destroy();
slideout.destroy();

// Slideout.enableTouch();
slideout.enableTouch();

// Slideout.disableTouch();
slideout.disableTouch();

// Slideout.on(event, listener);
slideout.on("open", function () { });

// Slideout.once(event, listener);
slideout.once("open", function () { });

// Slideout.off(event, listener);
slideout.off("open", function () { });

// Slideout.emit(event, ...data);
slideout.emit("open");

// Events
slideout.on("translatestart", function () {
    console.log("Start");
});

slideout.on("translate", function (translated) {
    console.log("Translate: " + translated); // 120 in px
});

slideout.on("translateend", function () {
    console.log("End");
});

// How to open slideout from right side.
var slideout = new Slideout({
    "panel": document.getElementById("content"),
    "menu": document.getElementById("menu"),
    "side": "right"
});

// How to use slideout with a fixed header.
slideout.on("beforeopen", function () {
    document.querySelector(".fixed").classList.add("fixed-open");
});

slideout.on("beforeclose", function () {
    document.querySelector(".fixed").classList.remove("fixed-open");
});
