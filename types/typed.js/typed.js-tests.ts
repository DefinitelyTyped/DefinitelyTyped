import { Typed, TypedJsOptions } from 'typed.js';

// Create instance
const typed = new Typed(".element", {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 50,
    smartBackspace: true,
    shuffle: true,
    backDelay: 150,
    loop: true,
    showCursor: true,
    autoInsertCss: true,
    contentType: "html",
    onComplete: (self: Typed) => {
        // Complete!!
    },
    onDestroy: (self: Typed) => {
        // End!!
    },
});

// Methods
typed.reset(false);
typed.destroy();
typed.start();
typed.stop();
typed.toggle();
