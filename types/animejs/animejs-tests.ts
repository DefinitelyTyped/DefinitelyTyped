import anime, { AnimeInstance } from "animejs";

const test1 = anime({
    targets: "div",
    duration: 40,
    color: "#FFFFFF",
});

const callback = (anim: AnimeInstance) => {
    console.log(anim.completed);
    console.log(anim.animatables[0].id);
    console.log(anim.animations[0].duration);
};

const test2 = anime({
    targets: "div",
    translateX: (el: HTMLElement, i: number, index: number) => {
        return 0;
    },
    translateY: "40px",
    color: [
        { value: "#FF0000", duration: 2000 },
        { value: "#00FF00", duration: 2000 },
        { value: "#0000FF", duration: 2000 },
    ],
    duration: () => {
        return 1000000000000;
    },
    update: callback,
    complete: callback,
});

const someNodes = document.querySelector("button");

const test3 = anime({
    targets: someNodes,
    top: "-5000000em",
});

const tl = anime.timeline({
    loop: false,
    direction: "normal",
});

tl.add({
    targets: ".tiny-divvy-div",
    scale: 10000000,
});

const path = anime.path("#motionPath path");

test1.play();
test1.tick(10);
test2.reverse();
test3.pause();
tl.seek(4000);

tl.finished.then(() => {
    console.log("I wonder if anyone will ever actually read this.");
});

const usesEnums = anime({
    targets: ".usingEnumsIsAReallyHandyThing",
    direction: "reverse",
    // easing: "inoutexpo", // This don't work at runtime for me 🤔
    someProperty: "+=4000",
});

const bezier = anime.bezier(0, 0, 100, 100);
// anime.speed = 100000000;
(anime as any).speed = 4000;
anime.easings["hello"] = anime.bezier(0, 0, 1900, 3020);
const runningAnims = anime.running;
anime.remove(".tiny-divvy-div");

anime.timeline().add({
    targets: [],
    duration: 1000,
    easing: "linear",
}, 0);

anime({
    targets: ".mizi",
    keyframes: [
        { translateY: -40, delay: 123 },
        { translateX: 250 },
        { translateY: 40 },
        { translateX: 0 },
        { translateY: 0 },
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
    endDelay: -1.12742e-12,
    loop: true,
    easing: (el, i, total) => {
        return (t) => {
            return Math.pow(Math.sin(t * (i + 1)), total);
        };
    },
    loopBegin: () => {
        console.log("Hello, MMM");
    },
    changeComplete: () => {
        console.log("It surely had been read.");
    },
});
anime.set(
    ".test-div",
    {
        height: "1000px",
    },
);

anime.get(".test-div", "height");
anime.get(".test-div", "height", "rem");

// test importing from lib/ files
import animeCJS = require("animejs/lib/anime");
import animeMin = require("animejs/lib/anime.min");
import animeES6 from "animejs/lib/anime.es";

animeCJS({});
animeES6({});
animeMin({});

// test easing
anime({
    targets: ".cubic-bezier-demo .el",
    translateX: 250,
    direction: "alternate",
    loop: true,
    easing: "cubicBezier(.5,.05, .1, .3)",
});
anime({
    targets: ".cubic-bezier-demo .el",
    translateX: 250,
    direction: "alternate",
    loop: true,
    easing: "cubicBezier(.5,  .05, .1, .3)",
});
anime({
    targets: ".spring-physics-demo .el",
    translateX: 250,
    direction: "alternate",
    loop: true,
    easing: "spring(1, 80, 10, 0)",
});
anime({
    targets: ".elastic-easing-demo .line:nth-child(1) .el",
    translateX: 270,
    easing: "easeInElastic(1, .6)",
});

anime({
    targets: ".elastic-easing-demo .line:nth-child(2) .el",
    translateX: 270,
    easing: "easeOutElastic(1, .6)",
});

anime({
    targets: ".elastic-easing-demo .line:nth-child(3) .el",
    translateX: 270,
    easing: "easeInOutElastic(1, .6)",
});

anime({
    targets: ".elastic-easing-demo .line:nth-child(4) .el",
    translateX: 270,
    easing: "easeOutInElastic(1, .6)",
});

// test suspendWhenDocumentHidden
anime.suspendWhenDocumentHidden;

// test css properties
anime({
    targets: ".css-prop-demo .el",
    left: "240px",
    backgroundColor: "#FFF",
    borderRadius: ["0%", "50%"],
    easing: "easeInOutQuad",
});
anime({
    targets: ".css-prop-demo .el",
    translate: "50px -50px",
    easing: "easeInOutQuad",
});
anime({
    targets: ".css-transforms-demo .el",
    translateX: 250,
    scale: 2,
    rotate: "1turn",
});
//   DOM attributes
anime({
    targets: ".dom-attribute-demo input",
    value: [0, 1000],
    round: 1,
    easing: "easeInOutExpo",
});
// SVG attributes
anime({
    targets: [".svg-attributes-demo polygon", "feTurbulence", "feDisplacementMap"],
    points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: "alternate",
    easing: "easeInOutExpo",
});

// Specific property parameters
anime({
    targets: ".specific-prop-params-demo .el",
    translateX: {
        value: 250,
        duration: 800,
    },
    rotate: {
        value: 360,
        duration: 1800,
        easing: "easeInOutSine",
    },
    scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: "easeInOutQuart",
    },
    delay: 250, // All properties except 'scale' inherit 250ms delay
});
anime({
    targets: ".function-based-params-demo .el",
    translateX: 270,
    direction: "alternate",
    loop: true,
    delay: function(el, i, l) {
        return i * 100;
    },
    endDelay: function(el, i, l) {
        return (l - i) * 100;
    },
});

// test keyframes
anime({
    targets: ".animation-keyframes-demo .el",
    keyframes: [
        { translateY: -40 },
        { translateX: 250 },
        { translateY: 40 },
        { translateX: 0 },
        { translateY: 0 },
    ],
    duration: 4000,
    easing: "easeOutElastic(1, .8)",
    loop: true,
});
anime({
    targets: ".property-keyframes-demo .el",
    translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 },
    ],
    translateY: [
        { value: -40, duration: 500 },
        { value: 40, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 1000 },
    ],
    scaleX: [
        { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
        { value: 1, duration: 900 },
    ],
    scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
        { value: 1, duration: 450 },
    ],
    easing: "easeOutElastic(1, .8)",
    loop: true,
});

// stagger
anime({
    targets: ".staggering-start-value-demo .el",
    translateX: 270,
    delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
});
anime({
    targets: ".range-value-staggering-demo .el",
    translateX: 270,
    rotate: anime.stagger([-360, 360]), // rotation will be distributed from -360deg to 360deg evenly between all elements
    easing: "easeInOutQuad",
});
anime({
    targets: ".staggering-grid-demo .el",
    scale: [
        { value: .1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
});
anime({
    targets: ".staggering-axis-grid-demo .el",
    translateX: anime.stagger(10, { grid: [14, 5], from: "center", axis: "x" }),
    translateY: anime.stagger(10, { grid: [14, 5], from: "center", axis: "y" }),
    rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: "center", axis: "x" }),
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
    easing: "easeInOutQuad",
});

// timeline
const tl2 = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
});

// Add children
tl2
    .add({
        targets: ".basic-timeline-demo .el.square",
        translateX: 250,
    })
    .add({
        targets: ".basic-timeline-demo .el.circle",
        translateX: 250,
    })
    .add({
        targets: ".basic-timeline-demo .el.triangle",
        translateX: 250,
    });
const tl3 = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
});

tl3
    .add({
        targets: ".offsets-demo .el.square",
        translateX: 250,
    })
    .add({
        targets: ".offsets-demo .el.circle",
        translateX: 250,
    }, "-=600") // relative offset
    .add({
        targets: ".offsets-demo .el.triangle",
        translateX: 250,
    }, 400); // absolute offset
const tl4 = anime.timeline({
    targets: ".params-inheritance-demo .el",
    delay: function(el, i) {
        return i * 200;
    },
    duration: 500, // Can be inherited
    easing: "easeOutExpo", // Can be inherited
    direction: "alternate", // Is not inherited
    loop: true, // Is not inherited
});

tl4
    .add({
        translateX: 250,
        // override the easing parameter
        easing: "spring",
    })
    .add({
        opacity: .5,
        scale: 2,
    })
    .add({
        // override the targets parameter
        targets: ".params-inheritance-demo .el.triangle",
        rotate: 180,
    })
    .add({
        translateX: 0,
        scale: 1,
    });

// SVG
const path2 = anime.path(".motion-path-demo path");

anime({
    targets: ".motion-path-demo .el",
    translateX: path2("x"),
    translateY: path2("y"),
    rotate: path2("angle"),
    easing: "linear",
    duration: 2000,
    loop: true,
});
anime({
    targets: ".morphing-demo .polymorph",
    points: [
        {
            value: [
                "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
                "70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369",
            ],
        },
        { value: "70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369" },
        { value: "70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369" },
        { value: "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369" },
    ],
    easing: "easeOutQuad",
    duration: 2000,
    loop: true,
});
anime({
    targets: ".line-drawing-demo .lines path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function(el, i) {
        return i * 250;
    },
    direction: "alternate",
    loop: true,
});
