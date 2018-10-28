import Vivus = require("vivus");

function assertNever(input: never) {
    throw new Error("Should never get here!");
}

function onEndOfAnimation(v: Vivus) {
    v = v.play(0.5).stop();

    const status = v.getStatus();
    switch (status) {
        case "start":
        case "progress":
        case "end":
            break;
        default:
            assertNever(status);
    }

    v.setFrameProgress(0.5).play().reset().finish().destroy();
}

// Documentation tests.

new Vivus("my-svg", { duration: 200 }, onEndOfAnimation);

new Vivus("my-div", { duration: 200, file: "link/to/my.svg" }, onEndOfAnimation);

var myVivus = new Vivus("my-svg-element");
myVivus.stop().reset().play(2);

new Vivus("my-svg-element", {
    type: "delayed",
    duration: 200,
    animTimingFunction: Vivus.EASE
}, onEndOfAnimation);



// Empty options tests.

new Vivus("svg-element", {});

const el = document.getElementById("my-element") !;

// 'duration' & 'delay' options tests.

new Vivus(el, { duration: 200, delay: 199 })

// 'type' option tests.

new Vivus(el, { type: "delayed" });
new Vivus(el, { type: "sync" });
new Vivus(el, { type: "oneByOne" });
new Vivus(el, { type: "script" });
new Vivus(el, { type: "scenario" });
new Vivus(el, { type: "scenario-sync" });

// 'start' option tests.

new Vivus(el, { start: "inViewport" });
new Vivus(el, { start: "manual" });
new Vivus(el, { start: "autostart" });

// Custom & built-in easing functions in options.

new Vivus("my-svg-element", {
    animTimingFunction: Vivus.EASE_OUT_BOUNCE,
    pathTimingFunction: x => x ** 0.5,
});

function testEasingFunctions() {
    var n: number;

    n = Vivus.LINEAR(0);
    n = Vivus.LINEAR(1);
    n = Vivus.EASE(0);
    n = Vivus.EASE(1);
    n = Vivus.EASE_IN(0);
    n = Vivus.EASE_IN(1);
    n = Vivus.EASE_OUT(0);
    n = Vivus.EASE_OUT(1);
    n = Vivus.EASE_OUT_BOUNCE(0);
    n = Vivus.EASE_OUT_BOUNCE(1);

    return n;
}