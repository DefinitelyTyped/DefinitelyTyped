// Type definitions for Reveal 4.1.0
// Project: https://github.com/hakimel/reveal.js/
// Definitions by: robertop87 <https://github.com/robertop87>,
//                 Nava2 <https://github.com/Nava2>,
//                 JPtenBerge <https://github.com/JPtenBerge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const Reveal: RevealStatic;

// Reveal plugins are globals since 4.0 (if not loaded through ES Modules): https://revealjs.com/plugins/
declare const RevealHighlight: Plugin;
declare const RevealMarkdown: Plugin;
declare const RevealSearch: Plugin;
declare const RevealNotes: Plugin;
declare const RevealMath: Plugin;
declare const RevealZoom: Plugin;

interface RevealStatic {
    initialize: (config: RevealOptions) => Promise<any>;
    configure: (diff: RevealOptions) => void;

    // Navigation
    slide(indexh: number, indexv?: number, f?: number, o?: number): void;
    left(): void;
    right(): void;
    up(): void;
    down(): void;
    prev(): void;
    next(): void;
    prevFragment(): boolean;
    nextFragment(): boolean;

    // Randomize the order of slides
    shuffle(): void;

    // Toggle presentation states
    toggleOverview(override?: boolean): void;
    togglePause(override?: boolean): void;
    toggleAutoSlide(override?: boolean): void;

    // Retrieves the previous and current slide elements
    getPreviousSlide(): Element;
    getCurrentSlide(): Element;

    getIndices(slide?: Element): { h: number; v: number };
    getProgress(): number;
    getTotalSlides(): number;
    availableFragments(): { prev: boolean; next: boolean };

    // Returns the speaker notes for the current slide
    getSlideNotes(slide?: Element): string;

    // Plugins
    hasPlugin(name: string): boolean;
    getPlugin(name: string): Plugin;
    getPlugins(): { [name: string]: Plugin };

    // States
    addEventListener(type: string, listener: (event: any) => void, useCapture?: boolean): void;
    removeEventListener(type: string, listener: (event: any) => void, useCapture?: boolean): void;

    // State Checks
    isFirstSlide(): boolean;
    isLastSlide(): boolean;
    isPaused(): boolean;
    isOverview(): boolean;
    isAutoSliding(): boolean;

    // undocumented method
    layout(): void;
    addEventListeners(): void;
    removeEventListeners(): void;
    getSlide(x: number, y?: number): Element;
    getScale(): number;
    getConfig(): RevealOptions;
    getQueryHash(): any;
    setState(state: any): void;
    getState(): any;

    // update slides after dynamic changes
    sync(): void;
}

interface RevealOptions {
    // Configuration
    controls?: boolean | undefined;
    progress?: boolean | undefined;
    // https://github.com/hakimel/reveal.js/#slide-number
    slideNumber?: boolean | string | undefined;

    history?: boolean | undefined;
    plugins?: Plugin[] | undefined;

    // https://github.com/hakimel/reveal.js/#keyboard-bindings
    keyboard?: any;
    overview?: boolean | undefined;
    center?: boolean | undefined;
    touch?: boolean | undefined;
    loop?: boolean | undefined;
    rtl?: boolean | undefined;
    shuffle?: boolean | undefined;
    fragments?: boolean | undefined;
    embedded?: boolean | undefined;
    help?: boolean | undefined;
    showNotes?: boolean | undefined;
    autoSlide?: number | undefined;
    autoSlideStoppable?: boolean | undefined;
    autoSlideMethod?: any;
    mouseWheel?: boolean | undefined;
    hideAddressBar?: boolean | undefined;
    previewLinks?: boolean | undefined;
    transition?: string | undefined;
    transitionSpeed?: string | undefined;
    backgroundTransition?: string | undefined;
    viewDistance?: number | undefined;

    // https://github.com/hakimel/reveal.js/#parallax-background
    // Parallax background image
    parallaxBackgroundImage?: string | undefined;

    // Parallax background size
    parallaxBackgroundSize?: string | undefined; // CSS syntax, e.g. "2100px 900px" - currently only pixels are supported (don't use % or auto)

    // Number of pixels to move the parallax background per slide
    // - Calculated automatically unless specified
    // - Set to 0 to disable movement along an axis
    parallaxBackgroundHorizontal?: number | undefined;
    parallaxBackgroundVertical?: number | undefined;

    rollingLinks?: boolean | undefined;
    theme?: string | undefined;

    // Presentation Size
    // https://github.com/hakimel/reveal.js/#presentation-size
    width?: number | string | undefined;
    height?: number | string | undefined;
    margin?: number | string | undefined;
    minScale?: number | string | undefined;
    maxScale?: number | string | undefined;

    // Dependencies
    // https://github.com/hakimel/reveal.js/#dependencies
    dependencies?: RevealDependency[] | undefined;

    // Exposes the reveal.js API through window.postMessage
    postMessage?: boolean | undefined;

    // Dispatches all reveal.js events to the parent window through postMessage
    postMessageEvents?: boolean | undefined;

    // https://github.com/hakimel/reveal.js/#multiplexing
    multiplex?: MultiplexConfig | undefined;

    // https://github.com/hakimel/reveal.js/#mathjax
    math?: MathConfig | undefined;
}

// https://github.com/hakimel/reveal.js/#slide-changed-event
interface SlideEvent {
    previousSlide?: Element | undefined;
    currentSlide: Element;
    indexh: number;
    indexv?: number | undefined;
}

// https://github.com/hakimel/reveal.js/#fragment-events
interface FragmentEvent {
    fragment: Element;
}

// https://github.com/hakimel/reveal.js/#multiplexing
interface MultiplexConfig {
    // Obtained from the socket.io server. Gives this (the master) control of the presentation
    secret?: string | undefined;
    // Obtained from the socket.io server
    id: string;

    // Location of socket.io server
    url: string;
}

// https://github.com/hakimel/reveal.js/#mathjax
interface MathConfig {
    // Obtained from the socket.io server. Gives this (the master) control of the presentation
    mathjax: string;
    // Obtained from the socket.io server
    config: string;
}

// https://github.com/hakimel/reveal.js/#dependencies
interface RevealDependency {
    src: string;
    condition?: (() => boolean) | undefined;
    async?: boolean | undefined;
    callback?: (() => void) | undefined;
}

interface Plugin {
    id: string;
    init(deck: RevealStatic): void | Promise<any>;
}
