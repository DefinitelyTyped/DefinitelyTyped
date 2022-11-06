import Reveal = require('reveal.js');
import RevealHighlight = require('reveal.js/plugin/highlight/highlight');
import RevealMarkdown = require('reveal.js/plugin/markdown/markdown');
import RevealMath = require('reveal.js/plugin/math/math');
import RevealNotes = require('reveal.js/plugin/notes/notes');
import RevealSearch = require('reveal.js/plugin/search/search');
import RevealZoom = require('reveal.js/plugin/zoom/zoom');

// define useful constants
const el = document.querySelector<HTMLElement>('.deck')!;

// --------------- //
// Reveal instance //
// --------------- //

// use two arguments
// $ExpectType Api
new Reveal(el, {
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealSearch, RevealMath, RevealZoom],
});

// use one arguments
// $ExpectType Api
new Reveal({
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealSearch, RevealMath, RevealZoom],
});

// with options
// $ExpectType Api
new Reveal({ width: 960, height: 700 });

// without argument
// $ExpectType Api
new Reveal();

// $ExpectType Promise<Api>
Reveal.initialize();

// ----------------- //
// initialize Method //
// ----------------- //

const deck = new Reveal();

// $ExpectType Promise<Api>
deck.initialize({
    // default values from https://github.com/hakimel/reveal.js/blob/master/js/config.js

    // The "normal" size of the presentation, aspect ratio will be preserved
    // when the presentation is scaled to fit different resolutions
    width: 960,
    height: 700,

    // Factor of the display size that should remain empty around the content
    margin: 0.04,

    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 2.0,

    // Display presentation control arrows
    controls: true,

    // Help the user learn the controls by providing hints, for example by
    // bouncing the down arrow when they first encounter a vertical slide
    controlsTutorial: true,

    // Determines where controls appear, "edges" or "bottom-right"
    controlsLayout: 'bottom-right',

    // Visibility rule for backwards navigation arrows; "faded", "hidden"
    // or "visible"
    controlsBackArrows: 'faded',

    // Display a presentation progress bar
    progress: true,

    // Display the page number of the current slide
    // - true: Show slide number
    // - false: Hide slide number
    // Can optionally be set as a string that specifies the number formatting:
    // - "h.v": Horizontal . vertical slide number (default)
    // - "h/v": Horizontal / vertical slide number
    // - "c": Flattened slide number
    // - "c/t": Flattened slide number / total slides
    // Alternatively, you can provide a function that returns the slide
    // number for the current slide. The function should take in a slide
    // object and return an array with one string [slideNumber] or
    // three strings [n1,delimiter,n2]. See #formatSlideNumber().
    slideNumber: false,

    // Can be used to limit the contexts in which the slide number appears
    // - "all":      Always show the slide number
    // - "print":    Only when printing to PDF
    // - "speaker":  Only in the speaker view
    showSlideNumber: 'all',

    // Use 1 based indexing for # links to match slide number (default is zero
    // based)
    hashOneBasedIndex: false,

    // Add the current slide number to the URL hash so that reloading the
    // page/copying the URL will return you to the same slide
    hash: false,

    // Flags if we should monitor the hash and change slides accordingly
    respondToHashChanges: true,

    // Push each slide change to the browser history.  Implies `hash: true`
    history: false,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Optional function that blocks keyboard events when retuning false
    //
    // If you set this to 'focused', we will only capture keyboard events
    // for embedded decks when they are in focus
    keyboardCondition: null,

    // Disables the default reveal.js slide layout (scaling and centering)
    // so that you can use custom CSS layout
    disableLayout: false,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: true,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Changes the behavior of our navigation directions.
    //
    // "default"
    // Left/right arrow keys step between horizontal slides, up/down
    // arrow keys step between vertical slides. Space key steps through
    // all slides (both horizontal and vertical).
    //
    // "linear"
    // Removes the up/down arrows. Left/right arrows step through all
    // slides (both horizontal and vertical).
    //
    // "grid"
    // When this is enabled, stepping left/right from a vertical stack
    // to an adjacent vertical stack will land you at the same vertical
    // index.
    //
    // Consider a deck with six slides ordered in two vertical stacks:
    // 1.1    2.1
    // 1.2    2.2
    // 1.3    2.3
    //
    // If you're on slide 1.3 and navigate right, you will normally move
    // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
    // from 1.3 -> 2.3.
    navigationMode: 'default',

    // Randomizes the order of slides each time the presentation loads
    shuffle: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags whether to include the current fragment in the URL,
    // so that reloading brings you to the same fragment position
    fragmentInURL: true,

    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,

    // Flags if we should show a help overlay when the question-mark
    // key is pressed
    help: true,

    // Flags if it should be possible to pause the presentation (blackout)
    pause: true,

    // Flags if speaker notes should be visible to all viewers
    showNotes: false,

    // Flags if slides with data-visibility="hidden" should be kep visible
    showHiddenSlides: false,

    // Global override for autoplaying embedded media (video/audio/iframe)
    // - null:   Media will only autoplay if data-autoplay is present
    // - true:   All media will autoplay, regardless of individual setting
    // - false:  No media will autoplay, regardless of individual setting
    autoPlayMedia: null,

    // Global override for preloading lazy-loaded iframes
    // - null:   Iframes with data-src AND data-preload will be loaded when within
    //           the viewDistance, iframes with only data-src will be loaded when visible
    // - true:   All iframes with data-src will be loaded when within the viewDistance
    // - false:  All iframes with data-src will be loaded only when visible
    preloadIframes: null,

    // Can be used to globally disable auto-animation
    autoAnimate: true,

    // Optionally provide a custom element matcher that will be
    // used to dictate which elements we can animate between.
    autoAnimateMatcher: null,

    // Default settings for our auto-animate transitions, can be
    // overridden per-slide or per-element via data arguments
    autoAnimateEasing: 'ease',
    autoAnimateDuration: 1.0,
    autoAnimateUnmatched: true,

    // CSS properties that can be auto-animated. Position & scale
    // is matched separately so there's no need to include styles
    // like top/right/bottom/left, width/height or margin.
    autoAnimateStyles: [
        'opacity',
        'color',
        'background-color',
        'padding',
        'font-size',
        'line-height',
        'letter-spacing',
        'border-width',
        'border-color',
        'border-radius',
        'outline',
        'outline-offset',
    ],

    // Controls automatic progression to the next slide
    // - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
    //           is present on the current slide or fragment
    // - 1+:     All slides will progress automatically at the given interval
    // - false:  No auto-sliding, even if data-autoslide is present
    autoSlide: 0,

    // Stop auto-sliding after user input
    autoSlideStoppable: true,

    // Use this method for navigation when auto-sliding (defaults to navigateNext)
    autoSlideMethod: null,

    // Specify the average time in seconds that you think you will spend
    // presenting each slide. This is used to show a pacing timer in the
    // speaker view
    defaultTiming: null,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Opens links in an iframe preview overlay
    // Add `data-preview-link` and `data-preview-link="false"` to customise each link
    // individually
    previewLinks: false,

    // Exposes the reveal.js API through window.postMessage
    postMessage: true,

    // Dispatches all reveal.js events to the parent window through postMessage
    postMessageEvents: false,

    // Focuses body when page changes visibility to ensure keyboard shortcuts work
    focusBodyOnPageVisibilityChange: true,

    // Transition style
    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

    // Parallax background image
    parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

    // Parallax background size
    parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

    // Parallax background repeat
    parallaxBackgroundRepeat: '', // repeat/repeat-x/repeat-y/no-repeat/initial/inherit

    // Parallax background position
    parallaxBackgroundPosition: '', // CSS syntax, e.g. "top left"

    // Amount of pixels to move the parallax background per slide step
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null,

    // The maximum number of pages a single slide can expand onto when printing
    // to PDF, unlimited by default
    pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

    // Prints each fragment on a separate slide
    pdfSeparateFragments: true,

    // Offset used to reduce the height of content within exported PDF pages.
    // This exists to account for environment differences based on how you
    // print to PDF. CLI printing options, like phantomjs and wkpdf, can end
    // on precisely the total height of the document whereas in-browser
    // printing has to end one pixel before.
    pdfPageHeightOffset: -1,

    // Number of slides away from the current that are visible
    viewDistance: 3,

    // Number of slides away from the current that are visible on mobile
    // devices. It is advisable to set this to a lower number than
    // viewDistance in order to save resources.
    mobileViewDistance: 2,

    // The display mode that will be used to show slides
    display: 'block',

    // Hide cursor if inactive
    hideInactiveCursor: true,

    // Time before the cursor is hidden (in ms)
    hideCursorTime: 5000,

    // Script dependencies to load
    dependencies: [],

    // Plugin objects to register and use for this presentation
    plugins: [],

    // plugins

    // highlight
    highlight: {
        highlightOnLoad: true,
        excapeHTML: true,
        beforeHighlight: () => {},
    },

    // markdown
    markdown: {
        async: true,
        baseUrl: 'localhost',
        breaks: true,
        gfm: true,
        headerIds: true,
        headerPrefix: 'prefix',
        highlight: () => {},
        langPrefix: 'prefix',
        mangle: true,
        pedantic: true,
        renderer: { key: 'value' },
        sanitize: true,
        sanitizer: () => {},
        silent: true,
        smartLists: true,
        smartpants: true,
        tokenizer: { key: 'value' },
        walkTokens: () => {},
        xhtml: true,
    },

    // katex.
    katex: {
        local: 'local',
        version: 'latest',
        delimiters: [
            { left: '$$', right: '$$', display: true }, // Note: $$ has to come before $
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true },
        ],
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    },

    // mathjax2
    mathjax2: {
        mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js',
        config: 'TeX-AMS_HTML-full',
        // pass other options into `MathJax.Hub.Config()`
        tex2jax: {
            inlineMath: [
                ['$', '$'],
                ['\\(', '\\)'],
            ],
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        },
    },

    // mathjax3
    mathjax3: {
        mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
        tex: {
            inlineMath: [
                ['$', '$'],
                ['\\(', '\\)'],
            ],
        },
        options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        },
    },

    // multiplex
    multiplex: {
        // Example values. To generate your own, see the socket.io server instructions.
        secret: '13652805320794272084', // Obtained from the socket.io server. Gives this (the master) control of the presentation
        id: '1ea875674b17ca76', // Obtained from socket.io server
        url: 'https://reveal-multiplex.glitch.me/', // Location of socket.io server
    },
});

// Alternate representations

// $ExpectType Promise<void>
deck.initialize({
    slideNumber: true,
    width: 20,
    height: 20,
    plugins: [RevealHighlight, RevealMarkdown, RevealSearch, RevealNotes, RevealMath, RevealZoom],
}).then(() => {});

// use await
// $ExpectType () => Promise<void>
async () => {
    await deck.initialize({
        slideNumber: true,
        width: 20,
        height: 20,
        plugins: [RevealHighlight, RevealMarkdown, RevealSearch, RevealNotes, RevealMath, RevealZoom],
    });
};

// Config can be empty (example in https://revealjs.com/markup/)
// $ExpectType Promise<Api>
deck.initialize();

// ---------------- //
// configure method //
// ---------------- //

// $ExpectType void
deck.configure({});

// $ExpectType void
deck.configure({ slideNumber: true, width: 20, height: 20 });

// -------------- //
// destroy method //
// -------------- //

// $ExpectType void
deck.destroy();

// destroy method does not accept argument
// @ts-expect-error
deck.destroy(true);

// ------------ //
// sync methods //
// ------------ //

// $ExpectType void
deck.sync();

// $ExpectType void
deck.syncSlide(el);

// $ExpectType Element[]
deck.syncFragments(el);

// ------------------ //
// navigation methods //
// ------------------ //

// $ExpectType void
deck.slide(0, 1, 2, 1);

// $ExpectType void
deck.left();

// $ExpectType void
deck.right();

// $ExpectType void
deck.up();

// $ExpectType void
deck.down();

// $ExpectType void
deck.prev();

// $ExpectType void
deck.next();

// $ExpectType void
deck.navigateLeft();

// $ExpectType void
deck.navigateRight();

// $ExpectType void
deck.navigateUp();

// $ExpectType void
deck.navigateDown();

// $ExpectType void
deck.navigatePrev();

// $ExpectType void
deck.navigateNext();

// ---------------- //
// fragment methods //
// ---------------- //

// $ExpectType boolean
deck.navigateFragment(1, 1);

// $ExpectType boolean
deck.prevFragment();

// $ExpectType boolean
deck.nextFragment();

// --------------------- //
// event binding methods //
// --------------------- //

// $ExpectType void
deck.on('click', el.click, false);

// $ExpectType void
deck.on('slidetransitionend', event => {
    console.log(event);
});

// $ExpectType void
deck.off('click', el.click, false);

// $ExpectType void
deck.addEventListener('click', el.click);

// $ExpectType void
deck.addEventListener('click', el.click, true);

// $ExpectType void
deck.removeEventListener('click', el.click, false);

// Forces an update in slide layout
// $ExpectType void
deck.layout();

// Returns an object with the available routes as booleans (left/right/top/bottom)

// $ExpectType { down: boolean; left: boolean; right: boolean; up: boolean; }
deck.availableRoutes();

// Returns an object with the available fragments as booleans (prev/next)
// $ExpectType { prev: boolean; next: boolean; }
deck.availableFragments();

// Toggles a help overlay with keyboard shortcuts
// $ExpectType void
deck.toggleHelp();

// Toggles the overview mode on/off
// $ExpectType void
deck.toggleOverview();

// Toggles the "black screen" mode on/off
// $ExpectType void
deck.togglePause();

// Toggles the auto slide mode on/off
// $ExpectType void
deck.toggleAutoSlide();

// Slide navigation checks

// $ExpectType boolean
deck.isFirstSlide();

// $ExpectType boolean
deck.isLastSlide();

// $ExpectType boolean
deck.isLastVerticalSlide();

// $ExpectType boolean
deck.isVerticalSlide();

// State checks

// $ExpectType boolean
deck.isPaused();

// $ExpectType boolean
deck.isAutoSliding();

// $ExpectType boolean
deck.isSpeakerNotes();

// $ExpectType boolean
deck.isOverview();

// $ExpectType boolean
deck.isFocused();

// $ExpectType boolean
deck.isPrintingPDF();

// Checks if reveal.js has been loaded and is ready for use
// $ExpectType boolean
deck.isReady();

// Slide preloading

// $ExpectType void
deck.loadSlide(el);

// $ExpectType void
deck.unloadSlide(el);

// Preview management

// $ExpectType void
deck.showPreview('localhost');

// $ExpectType void
deck.hidePreview();

// Adds or removes all internal event listeners

// $ExpectType void
deck.addEventListeners();

// $ExpectType void
deck.removeEventListeners();

// $ExpectType Event
deck.dispatchEvent({ type: 'resize', data: {} });

// Facility for persisting and restoring the presentation state

// $ExpectType { indexh: number; indexv: number; indexf: number; paused: boolean; overview: boolean; }
deck.getState();

// $ExpectType void
deck.setState(deck.getState());

// Presentation progress on range of 0-1

// $ExpectType number
deck.getProgress();

// Returns the indices of the current, or specified, slide

// $ExpectType { h: number; v: number; f: number; }
deck.getIndices();

// Returns an Array of key:value maps of the attributes of each
// slide in the deck

// $ExpectType any[]
deck.getSlidesAttributes();

// Returns the number of slides that we have passed

// $ExpectType number
deck.getSlidePastCount(el);

// Returns the total number of slides

// $ExpectType number
deck.getTotalSlides();

// Returns the slide element at the specified index

// $ExpectType HTMLElement
deck.getSlide(1, 2);

// Returns the previous slide element, may be null

// $ExpectType HTMLElement | null
deck.getPreviousSlide();

// Returns the current slide element

// $ExpectType HTMLElement
deck.getCurrentSlide();

// Returns the slide background element at the specified index

// $ExpectType HTMLElement | undefined
deck.getSlideBackground(el, 2);

// $ExpectType HTMLElement | undefined
deck.getSlideBackground(1, 2);

// Returns the speaker notes string for a slide, or null

// $ExpectType string | null
deck.getSlideNotes(el);

// Returns an Array of all slides

// $ExpectType Element[]
deck.getSlides();

// Returns an array with all horizontal/vertical slides in the deck

// $ExpectType Element[]
deck.getHorizontalSlides();

// $ExpectType Element[]
deck.getVerticalSlides();

// Checks if the presentation contains two or more horizontal
// and vertical slides

// $ExpectType boolean
deck.hasHorizontalSlides();

// $ExpectType boolean
deck.hasVerticalSlides();

// Checks if the deck has navigated on either axis at least once

// $ExpectType boolean
deck.hasNavigatedHorizontally();

// $ExpectType boolean
deck.hasNavigatedVertically();

// Adds/removes a custom key binding

// $ExpectType void
deck.addKeyBinding('enter', () => {});

// $ExpectType void
deck.addKeyBinding({ keyCode: 1, key: 'enter', description: 'description' }, () => {});

// $ExpectType void
deck.removeKeyBinding(1);

// Programmatically triggers a keyboard event

// $ExpectType void
deck.triggerKey(1);

// Registers a new shortcut to include in the help overlay

// $ExpectType void
deck.registerKeyboardShortcut('entter', 'value');

// $ExpectType ComputedSlideSize
deck.getComputedSlideSize(100, 100);

// Returns the current scale of the presentation content

// $ExpectType number
deck.getScale();

// Returns the current configuration object

// $ExpectType Options
deck.getConfig();

// Helper method, retrieves query string as a key:value map

// $ExpectType any
deck.getQueryHash();

// Returns the path to the current slide as represented in the URL

// $ExpectType string
deck.getSlidePath(el);

// Returns reveal.js DOM elements

// $ExpectType Element
deck.getRevealElement();

// $ExpectType Element
deck.getSlidesElement();

// $ExpectType HTMLElement | null
deck.getViewportElement();

// $ExpectType HTMLDivElement
deck.getBackgroundsElement();

// API for registering and retrieving plugins

// $ExpectType void
deck.registerPlugin(RevealMarkdown());

// $ExpectType boolean
deck.hasPlugin('markdown');

// $ExpectType Plugin
deck.getPlugin('markdwon');

// $ExpectType { [id: string]: Plugin; }
deck.getPlugins();
