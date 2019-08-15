// Type definitions for react-owl-carousel 2.2
// Project: https://github.com/seal789ie/react-owl-carousel
// Definitions by: T Bounsiar <https://github.com/tbounsiar>, Ismael Gorissen <https://github.com/igorissen>, Kenneth Ceyer <https://github.com/KennethanCeyer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type HandlerCallback = (...args: any[]) => void;

export interface Options {
    // OPTIONS
    /**
     * Default:
     * Adding a -striped className to OwlCarousel.
     */
    className?: string;
    /**
     * Default: 3
     * The number of items you want to see on the screen.
     */
    items?: number;
    /**
     * Default: 0
     * margin-right(px) on item.
     */
    margin?: number;
    /**
     * Default: false
     * Infinity loop. Duplicate last and first items to get loop illusion.
     */
    loop?: boolean;
    /**
     * Default: false
     * Center item. Works well with even an odd number of items.
     */
    center?: boolean;
    /**
     * Default: true
     * Mouse drag enabled.
     */
    mouseDrag?: boolean;
    /**
     * Default: true
     * Touch drag enabled.
     */
    touchDrag?: boolean;
    /**
     * Default: true
     * Stage pull to edge.
     */
    pullDrag?: boolean;
    /**
     * Default: false
     * Item pull to edge.
     */
    freeDrag?: boolean;
    /**
     * Default: 0
     * Padding left and right on stage (can see neighbours).
     */
    stagePadding?: number;
    /**
     * Default: false
     * Merge items. Looking for data-merge='{number}' inside item.
     */
    merge?: boolean;
    /**
     * Default: true
     * Fit merged items if screen is smaller than items value.
     */
    mergeFit?: boolean;
    /**
     * Default: false
     * Set non grid content. Try using width style on divs.
     */
    autoWidth?: boolean;
    /**
     * Default: 0
     * Start position or URL Hash string like '#id'.
     */
    startPosition?: number | string;
    /**
     * Default: false
     * Listen to url hash changes. data-hash on items is required.
     */
    URLhashListener?: boolean;
    /**
     * Default: false
     * Show next/prev buttons.
     */
    nav?: boolean;
    /**
     * Default: true
     * Go backwards when the boundary has reached.
     */
    rewind?: boolean;
    /**
     * Default: [&#x27;next&#x27;,&#x27;prev&#x27;]
     * HTML allowed.
     */
    navText?: string[];
    /**
     * Default: div
     * DOM element type for a single directional navigation link.
     */
    navElement?: string;
    /**
     * Default: 1
     * Navigation slide by x. 'page' string can be set to slide by page.
     */
    slideBy?: number | string;
    /**
     * Default: true
     * Show dots navigation.
     */
    dots?: boolean;
    /**
     * Default: false
     * Show dots each x item.
     */
    dotsEach?: number | boolean;
    /**
     * Default: false
     * Used by data-dot content.
     */
    dotData?: boolean;
    /**
     * Default: false
     * Lazy load images. data-src and data-src-retina for highres.
     * Also load images into background inline style if element is not <img>.
     */
    lazyLoad?: boolean;
    /**
     * Default: false
     * lazyContent was introduced during beta tests but i removed it from the final release due to bad implementation.
     * It is a nice options so i will work on it in the nearest feature.
     */
    lazyContent?: boolean;
    /**
     * Default: false
     * Autoplay.
     */
    autoplay?: boolean;
    /**
     * Default: 5000
     * Autoplay interval timeout.
     */
    autoplayTimeout?: number;
    /**
     * Default: false
     * Pause on mouse hover.
     */
    autoplayHoverPause?: boolean;
    /**
     * Default: 250
     * Speed Calculate. More info to come..
     */
    smartSpeed?: number | boolean;
    /**
     * Default: Number
     * Speed Calculate. More info to come..
     */
    fluidSpeed?: number | boolean;
    /**
     * Default: false
     * autoplay speed.
     */
    autoplaySpeed?: number | boolean;
    /**
     * Default: false
     * Navigation speed.
     */
    navSpeed?: number | boolean;
    /**
     * Default: Number/Boolean
     * Pagination speed.
     */
    dotsSpeed?: number | boolean;
    /**
     * Default: false
     * Drag end speed.
     */
    dragEndSpeed?: number | boolean;
    /**
     * Default: true
     * Enable callback events.
     */
    callbacks?: boolean;
    /**
     * Default: empty object
     * Object containing responsive options. Can be set to false to remove responsive capabilities..
     */
    responsive?: { [breakpoint: string]: Options };
    /**
     * Default: 200
     * Responsive refresh rate.
     */
    responsiveRefreshRate?: number;
    /**
     * Default: window
     * Set on any DOM element.
     * If you care about non responsive browser (like ie8) then use it on main wrapper. This will prevent from crazy resizing.
     */
    responsiveBaseElement?: Element;
    /**
     * Default: false
     * Enable fetching YouTube/Vimeo/Vzaar videos.
     */
    video?: boolean;
    /**
     * Default: false
     * Set height for videos.
     */
    videoHeight?: number | boolean;
    /**
     * Default: false
     * Set width for videos.
     */
    videoWidth?: number | boolean;
    /**
     * Default: false
     * Class for CSS3 animation out.
     */
    animateOut?: string | boolean;
    /**
     * Default: false
     * Class for CSS3 animation in.
     */
    animateIn?: string | boolean;
    /**
     * Default: swing
     * Easing for CSS2 $.animate.
     */
    fallbackEasing?: string;
    /**
     * Default: false
     * Callback to retrieve basic information (current item/pages/widths).
     * Info function second parameter is Owl DOM object reference.
     */
    info?: HandlerCallback;
    /**
     * Default: false
     * Use it if owl items are deep nested inside some generated content. E.g 'youritem'. Dont use dot before class name.
     */
    nestedItemSelector?: string;
    /**
     * Default: div
     * DOM element type for owl-item.
     */
    itemElement?: string;
    /**
     * Default: div
     * DOM element type for owl-stage.
     */
    stageElement?: string;
    /**
     * Default: false
     * Set your own container for nav.
     */
    navContainer?: string | boolean;
    /**
     * Default: false
     * Set your own container for nav.
     */
    dotsContainer?: string | boolean;

    // CLASSES
    /**
     * Default: owl-refresh
     * Class during refresh.
     */
    refreshClass?: string;
    /**
     * Default: owl-loading
     * Class during load.
     */
    loadingClass?: string;
    /**
     * Default: owl-loaded
     * Class after load.
     */
    loadedClass?: string;
    /**
     * Default: owl-rtl
     * Class for right to left mode.
     */
    rtlClass?: string;
    /**
     * Default: owl-drag
     * Class for mouse drag mode.
     */
    dragClass?: string;
    /**
     * Default: owl-grab
     * Class during mouse drag.
     */
    grabClass?: string;
    /**
     * Default: owl-stage
     * Stage class.
     */
    stageClass?: string;
    /**
     * Default: owl-stage-outer
     * Stage outer class.
     */
    stageOuterClass?: string;
    /**
     * Default: owl-nav
     * Navigation container class.
     */
    navContainerClass?: string;
    /**
     * Default: [&#x27;owl-prev&#x27;,&#x27;owl-next&#x27;]
     * Navigation buttons classes.
     */
    navClass?: string[];
    /**
     * Default: owl-controls
     * Controls container class - wrapper for navs and dots.
     */
    controlsClass?: string;
    /**
     * Default: owl-dot
     * Dot Class.
     */
    dotClass?: string;
    /**
     * Default: owl-dots
     * Dots container class.
     */
    dotsClass?: string;
    /**
     * Default: owl-height
     * Auto height class.
     */
    autoHeightClass?: string;
    /**
     * Default: false
     * Optional helper class.
     * Add '<responsiveClass>-<breakpoint>' class to main element. Can be used to stylize content on given breakpoint.
     */
    responsiveClass?: string | boolean;

    // EVENTS
    /**
     * When the plugin initializes.
     */
    onInitialize?: HandlerCallback;
    /**
     * When the plugin has initialized.
     */
    onInitialized?: HandlerCallback;
    /**
     * When the plugin gets resized.
     */
    onResize?: HandlerCallback;
    /**
     * When the plugin has resized.
     */
    onResized?: HandlerCallback;
    /**
     * When the internal state of the plugin needs update.
     */
    onRefresh?: HandlerCallback;
    /**
     * When the internal state of the plugin has updated.
     */
    onRefreshed?: HandlerCallback;
    /**
     * When the dragging of an item is started.
     */
    onDrag?: HandlerCallback;
    /**
     * When the dragging of an item has finished.
     */
    onDragged?: HandlerCallback;
    /**
     * When the translation of the stage starts.
     */
    onTranslate?: HandlerCallback;
    /**
     * When the translation of the stage has finished.
     */
    onTranslated?: HandlerCallback;
    /**
     * When a property is going to change its value.
     */
    onChange?: HandlerCallback;
    /**
     * When a property has changed its value.
     */
    onChanged?: HandlerCallback;
    /**
     * When lazy image loads.
     */
    onLoadLazy?: HandlerCallback;
    /**
     * When lazy image has loaded.
     */
    onLoadedLazy?: HandlerCallback;
    /**
     * When video has unloaded.
     */
    onStopVideo?: HandlerCallback;
    /**
     * When video has loaded.
     */
    onPlayVideo?: HandlerCallback;
}

export default class OwlCarousel extends React.Component<Options, any> {
}
