// Type definitions for owl.carousel
// Project: https://github.com/OwlCarousel2/OwlCarousel2
// Definitions by: Roberto Naharro <https://github.com/roberto-naharro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace OwlCarousel {
  interface Options {
    // The number of items you want to see on the screen.
    // Default: 3 
    items?: number;

    // margin-right(px) on item.
    // Default: 0
    margin?: number;

    // Infinity loop. Duplicate last and first items to get loop illusion.
    // Default: false
    loop?: boolean;

    // Center item. Works well with even an odd number of items.
    // Default: false
    center?: boolean;

    // Mouse drag enabled.
    // Default: true;
    mouseDrag?: boolean;

    // Touch drag enabled.
    // Default: true;
    touchDrag?: boolean;

    // Stage pull to edge.
    // Default: true;
    pullDrag?: boolean;

    // Item pull to edge.
    // Default: false;
    freeDrag?: boolean;

    // Padding left and right on stage (can see neighbours).
    // Default: 0;
    stagePadding?: number;

    // Merge items. Looking for data-merge='{number}' inside item..
    // Default: false;
    merge?: boolean;

    // Fit merged items if screen is smaller than items value.
    // Default: true;
    mergeFit?: boolean;

    // Set non grid content. Try using width style on divs.
    // Default: false;
    autoWidth?: boolean;

    // Start position or URL Hash string like '#id'.
    // Default: 0;
    startPosition?: number | string;

    // Listen to url hash changes. data-hash on items is required.
    // Default: false;
    URLhashListener?: boolean;

    // Show next/prev buttons.
    // Default: false;
    nav?: boolean;

    // Go backwards when the boundary has reached.
    // Default: true;
    rewind?: boolean;

    // HTML allowed.
    // Default: [&#x27;next&#x27;,&#x27;prev&#x27;];
    navText?: string[];

    // DOM element type for a single directional navigation link.
    // Default: div;
    navElement?: string;

    // Navigation slide by x. 'page' string can be set to slide by page.
    // Default: 1;
    slideBy?: number | string;

    // Show dots navigation.
    // Default: true;
    dots?: boolean;

    // Show dots each x item.
    // Default: false;
    dotsEach?: number | boolean;

    // Used by data-dot content.
    // Default: false;
    dotData?: boolean;

    // Lazy load images. data-src and data-src-retina for highres. Also load 
    // images into background inline style if element is not <img>
    // Default: false;
    lazyLoad?: boolean;

    // lazyContent was introduced during beta tests but i removed it from the
    // final release due to bad implementation. It is a nice options so i will
    // work on it in the nearest feature.
    // Default: false;
    lazyContent?: boolean;

    // Autoplay.
    // Default: false;
    autoplay?: boolean;

    // Autoplay interval timeout.
    // Default: 5000;
    autoplayTimeout?: number;

    // Pause on mouse hover.
    // Default: false;
    autoplayHoverPause?: boolean;

    // Speed Calculate. More info to come..
    // Default: 250;
    smartSpeed?: number;

    // Speed Calculate. More info to come..
    // Default: number;
    fluidSpeed?: boolean;

    // autoplay speed.
    // Default: false;
    autoplaySpeed?: number | boolean;

    // Navigation speed.
    // Default: false;
    navSpeed?: number | boolean;

    // Pagination speed.
    // Default: number/boolean;
    dotsSpeed?: boolean;

    // Drag end speed.
    // Default: false;
    dragEndSpeed?: number | boolean;

    // Enable callback events.
    // Default: true;
    callbacks?: boolean;

    // Object containing responsive options. Can be set to false to remove responsive capabilities.
    // Default: empty object;
    responsive?: {
      [bp: string]: Options;
    };

    // Responsive refresh rate.
    // Default: 200;
    responsiveRefreshRate?: number;

    // Set on any DOM element. If you care about non responsive browser (like 
    // ie8) then use it on main wrapper. This will prevent from crazy resizing.
    // Default: window;
    responsiveBaseElement?: Element;

    // Enable fetching YouTube/Vimeo/Vzaar videos.
    // Default: false;
    video?: boolean;

    // Set height for videos.
    // Default: false;
    videoHeight?: number | boolean;

    // Set width for videos.
    // Default: false;
    videoWidth?: number | boolean;

    // Class for CSS3 animation out.
    // Default: false;
    animateOut?: string | boolean;

    // Class for CSS3 animation in.
    // Default: false;
    animateInClass?: string | boolean;

    // Easing for CSS2 $.animate.
    // Default: swing;
    fallbackEasing?: string;

    // Callback to retrieve basic information (current item/pages/widths). Info function second parameter is Owl DOM object reference.
    // Default: false;
    info?: Function;

    // Use it if owl items are deep nested inside some generated content. E.g 'youritem'. Dont use dot before class name.
    // Default: false;
    nestedItemSelector?: string;

    // DOM element type for owl-item.
    // Default: div;
    itemElement?: string;

    // DOM element type for owl-stage.
    // Default: div;
    stageElement?: string;

    // Set your own container for nav.
    // Default: false;
    navContainer?: string | boolean;

    // Set your own container for nav.
    // Default: false;
    dotsContainer?: string | boolean;

    // --- Clases ---

    // Class during refresh
    // Default: owl-refresh
    refreshClass?: string;


    // Class during load
    // Default: owl-loading
    loadingClass?: string;


    // Class after load
    // Default: owl-loaded
    loadedClass?: string;


    // Class for right to left mode
    // Default: owl-rtl
    rtlClass?: string;


    // Class for mouse drag mode
    // Default: owl-drag
    dragClass?: string;


    // Class during mouse drag
    // Default: owl-grab
    grabClass?: string;


    // Stage class
    // Default: owl-stage
    stageClass?: string;


    // Stage outer class
    // Default: owl-stage-outer
    stageOuterClass?: string;


    // Navigation container class
    // Default: owl-nav
    navContainerClass?: string;


    // Navigation buttons classes
    // Default: [&#x27;owl-prev&#x27;,&#x27;owl-next&#x27;]
    navClass?: string[];


    // Controls container class - wrapper for navs and dots
    // Default: owl-controls
    controlsClass?: string;


    // Dot Class
    // Default: owl-dot
    dotClass?: string;


    // Dots container class
    // Default: owl-dots
    dotsClass?: string;


    // Auto height class
    // Default: owl-height
    autoHeightClass?: string;


    // Optional helper class. Add '<responsiveClass>-<breakpoint>' class to main element. Can be used to stylize content on given breakpoint
    // Default: false
    responsiveClass?: string | boolean;

  }

  type OnEvent = 'initialize.owl.carousel' | 'initialized.owl.carousel' |
    'resize.owl.carousel' | 'resize.owl.carousel' | 'resized.owl.carousel' |
    'refresh.owl.carousel' | 'refreshed.owl.carousel' | 'drag.owl.carousel' |
    'dragged.owl.carousel' | 'translate.owl.carousel' |
    'translated.owl.carousel' | 'change.owl.carousel' | 'changed.owl.carousel'
    | 'load.owl.lazy' | 'loaded.owl.lazy'

  type TriggerEvent = 'next.owl.carousel' | 'prev.owl.carousel' |
    'to.owl.carousel' | 'destroy.owl.carousel' | 'replace.owl.carousel' |
    'add.owl.carousel' | 'remove.owl.carousel' |
    'play.owl.autoplay' | 'stop.owl.autoplay' |
    'play.owl.video' | 'stop.owl.video'
}

interface JQuery {
  owlCarousel(): JQuery;
  owlCarousel(options: OwlCarousel.Options | 'destroy'): JQuery;
  on(events: OwlCarousel.OnEvent, handler: (...args: any[]) => any): JQuery;
  trigger(eventType: OwlCarousel.TriggerEvent): JQuery;
}

declare module 'owl.carousel' {
  namespace OwlCarousel { }
}
