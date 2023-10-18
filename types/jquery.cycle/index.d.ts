/// <reference types="jquery"/>

interface CycleOptions {
    activePagerClass?: string | undefined; // class name used for the active pager link
    after?:
        | ((currSlideElement: Element, nextSlideElement: Element, options: CycleOptions, forwardFlag: boolean) => void)
        | undefined; // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    allowPagerClickBubble?: boolean | undefined; // allows or prevents click event on pager anchors from bubbling
    animIn?: any; // properties that define how the slide animates in
    animOut?: any; // properties that define how the slide animates out
    aspect?: boolean | undefined; // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
    autostop?: boolean | undefined; // true to end slideshow after X transitions (where X == slide count)
    autostopCount?: number | undefined; // number of transitions (optionally used with autostop to define X)
    backwards?: boolean | undefined; // true to start slideshow at last slide and move backwards through the stack
    before?:
        | ((currSlideElement: Element, nextSlideElement: Element, options: CycleOptions, forwardFlag: boolean) => void)
        | undefined; // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    center?: boolean | undefined; // set to true to have cycle add top/left margin to each slide (use with width and height options)
    cleartype?: boolean | undefined; // true if clearType corrections should be applied (for IE)
    cleartypeNoBg?: boolean | undefined; // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    containerResize?: boolean | undefined; // resize container to fit largest slide
    containerResizeHeight?: boolean | undefined; // resize containers height to fit the largest slide but leave the width dynamic
    continuous?: boolean | undefined; // true to start next transition immediately after current one completes
    cssAfter?: any; // properties that defined the state of the slide after transitioning out
    cssBefore?: any; // properties that define the initial state of the slide before transitioning in
    delay?: number | undefined; // additional delay (in ms) for first transition (hint: can be negative)
    easeIn?: string | undefined; // easing for "in" transition
    easeOut?: string | undefined; // easing for "out" transition
    easing?: string | undefined; // easing method for both in and out transitions
    end?: ((options: CycleOptions) => void) | undefined; // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    fastOnEvent?: boolean | undefined; // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    fit?: boolean | undefined; // force slides to fit container
    fx?: string | undefined; // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    fxFn?:
        | ((
            currSlideElement: Element,
            nextSlideElement: Element,
            options: CycleOptions,
            afterCalback: Function,
            forwardFlag: boolean,
        ) => void)
        | undefined; // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height?: any; // container height (if the 'fit' option is true, the slides will be set to this height as well)
    manualTrump?: boolean | undefined; // causes manual transition to stop an active transition instead of being ignored
    metaAttr?: string | undefined; // data- attribute that holds the option data for the slideshow
    next?: any; // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
    nowrap?: boolean | undefined; // true to prevent slideshow from wrapping
    onPagerEvent?: ((zeroBasedSlideIndex: number, slideElement: Element) => void) | undefined; // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    onPrevNextEvent?: ((isNext: boolean, zeroBasedSlideIndex: number, slideElement: Element) => void) | undefined; // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    pager?: any; // element, jQuery object, or jQuery selector string for the element to use as pager container
    pagerAnchorBuilder?: ((index: number, DOMelement: Element) => string) | undefined; // callback fn for building anchor links:  function(index, DOMelement)
    pagerEvent?: string | undefined; // name of event which drives the pager navigation
    pause?: boolean | undefined; // true to enable "pause on hover"
    pauseOnPagerHover?: boolean | undefined; // true to pause when hovering over pager link
    prev?: any; // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
    prevNextEvent?: string | undefined; // event which drives the manual transition to the previous or next slide
    random?: boolean | undefined; // true for random, false for sequence (not applicable to shuffle fx)
    randomizeEffects?: boolean | undefined; // valid when multiple effects are used; true to make the effect sequence random
    requeueOnImageNotLoaded?: boolean | undefined; // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout?: number | undefined; // ms delay for requeue
    rev?: boolean | undefined; // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
    shuffle?: any; // coords for shuffle animation, ex: { top:15, left: 200 }
    skipInitializationCallbacks?: boolean | undefined; // set to true to disable the first before/after callback that occurs prior to any transition
    slideExpr?: string | undefined; // expression for selecting slides (if something other than all children is required)
    slideResize?: boolean | undefined; // force slide width/height to fixed size before every transition
    speed?: any; // speed of the transition (any valid fx speed value)
    speedIn?: any; // speed of the 'in' transition
    speedOut?: any; // speed of the 'out' transition
    startingSlide?: number | undefined; // zero-based index of the first slide to be displayed
    sync?: boolean | undefined; // true if in/out transitions should occur simultaneously
    timeout?: number | undefined; // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn?:
        | ((currSlideElement: Element, nextSlideElement: Element, options: CycleOptions, forwardFlag: boolean) => void)
        | undefined; // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    updateActivePagerLink?: ((pager: any, currSlide: number, clsName: string) => void) | undefined; // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    width?: any; // container width (if the 'fit' option is true, the slides will be set to this width as well)
}

interface Cycle {
    (fx?: string): JQuery;
    (options?: CycleOptions): JQuery;
    ver: () => string;
    debug: boolean;
    defaults: CycleOptions;

    // expose next/prev function, caller must pass in state
    next: (options?: CycleOptions) => void;
    prev: (options?: CycleOptions) => void;

    transitions: { [key: string]: ($cont: JQuery, $slides: JQuery, options: CycleOptions) => void }; // transition definitions - only fade is defined here, transition pack defines the rest
    custom: (
        currSlideElement: Element,
        nextSlideElement: Element,
        options: CycleOptions,
        afterCalback: Function,
        forwardFlag: boolean,
        speedOverride?: number,
    ) => void; // the actual fn for effecting a transition
    commonReset: (
        currSlideElement: Element,
        nextSlideElement: Element,
        options: CycleOptions,
        w?: boolean,
        h?: boolean,
        rev?: boolean,
    ) => void; // reset common props before the next transition
    hopsFromLast: (options: CycleOptions, forwardFlag?: boolean) => number; // helper fn to calculate the number of slides between the current and the next
    createPagerAnchor: (index: number, DOMElement: Element, $pager: JQuery, els: any, options: CycleOptions) => string;
    updateActivePagerLink: (pager: any, currSlide: number, clsName: string) => void; // invoked after transition
    resetState: (options: CycleOptions, fx?: string) => void; // reset internal state; we do this on every pass in order to support multiple effects
}

interface JQuery {
    cycle: Cycle;
}
