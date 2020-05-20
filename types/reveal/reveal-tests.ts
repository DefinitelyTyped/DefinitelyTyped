

Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'linear',
    slideNumber: 'c/t',
    width: '100%',
    height: '80%',

    postMessage: true,
    postMessageEvents: true,

    multiplex: {
        // Example values. To generate your own, see the socket.io server instructions.
        secret: '13652805320794272084', // Obtained from the socket.io server. Gives this (the master) control of the presentation
        id: '1ea875674b17ca76', // Obtained from socket.io server
        url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh' // Location of socket.io server
    },

    math: {
        mathjax: 'https://cdn.mathjax.org/mathjax/latest/MathJax.js',
        config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html
    },

    dependencies: [
        { src: 'plugin/multiplex/master.js', async: true },
        { src: 'plugin/math/math.js', async: true }
    ]
});

// Alternate representations
Reveal.initialize({
    slideNumber: true,
    width: 20,
    height: 20
});

// Taken from https://github.com/hakimel/reveal.js/#api

// Navigation
Reveal.slide( 0, 1, 2 );
Reveal.left();
Reveal.right();
Reveal.up();
Reveal.down();
Reveal.prev();
Reveal.next();
Reveal.prevFragment();
Reveal.nextFragment();

// Randomize the order of slides
Reveal.shuffle();

// Toggle presentation states, optionally pass true/false to force on/off
Reveal.toggleOverview();
Reveal.togglePause();
Reveal.toggleAutoSlide();

// Change a config value at runtime
Reveal.configure({ controls: true });

// Returns the present configuration options
Reveal.getConfig();

// Fetch the current scale of the presentation
Reveal.getScale();

// Retrieves the previous and current slide elements
Reveal.getPreviousSlide();
Reveal.getCurrentSlide();

Reveal.getIndices(); // { h: 0, v: 0 } }
Reveal.getProgress(); // 0-1
Reveal.getTotalSlides();

// Returns the speaker notes for the current slide
Reveal.getSlideNotes();

// State checks
Reveal.isFirstSlide();
Reveal.isLastSlide();
Reveal.isOverview();
Reveal.isPaused();
Reveal.isAutoSliding();

Reveal.addEventListener( 'slidechanged', ( event: SlideEvent ) => {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );

Reveal.addEventListener( 'fragmentshown', ( event: FragmentEvent ) => {
    // event.fragment = the fragment DOM element
} );
Reveal.addEventListener( 'fragmenthidden', ( event: FragmentEvent ) => {
    // event.fragment = the fragment DOM element
} );

Reveal.slide( 1 );
// we're on slide 1

const state = Reveal.getState();

Reveal.slide( 3 );
// we're on slide 3

Reveal.setState( state );
// we're back on slide 1
