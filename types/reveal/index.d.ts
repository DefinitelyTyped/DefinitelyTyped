// Type definitions for Reveal 4.2.0
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
    initialize: (config?: RevealOptions) => Promise<any>;
    configure: (diff?: RevealOptions) => void;

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
    // https://github.com/reveal/revealjs.com/blob/master/src/config.md

    controls?: boolean | undefined;
    controlsTutorial?: boolean | undefined;
    controlsLayout?: 'edges' | 'bottom-right' | undefined;
    controlsBackArrows?: 'faded' | 'hidden' | 'visible' | undefined;

    progress?: boolean | undefined;

    slideNumber?: boolean | string | undefined;
    showSlideNumber?: 'all' | 'print' | 'speaker';

    hashOneBasedIndex?: boolean | undefined;
    hash?: boolean | undefined;
    respondToHashChanges?: boolean | undefined;

    history?: boolean | undefined;

    keyboard?: any;
    keyboardCondition?: any;

    disableLayout?: boolean | undefined;
    overview?: boolean | undefined;
    center?: boolean | undefined;
    touch?: boolean | undefined;
    loop?: boolean | undefined;
    rtl?: boolean | undefined;
    navigationMode?: 'default' | 'linear' | 'grid' | undefined;
    shuffle?: boolean | undefined;
    fragments?: boolean | undefined;
    fragmentInURL?: boolean | undefined;
    embedded?: boolean | undefined;
    help?: boolean | undefined;
    pause?: boolean | undefined;
    showNotes?: boolean | undefined;

    autoPlayMedia?: boolean | null | undefined;
    preloadIframes?: boolean | null | undefined;

    autoAnimate?: boolean | undefined;
    autoAnimateMatcher?: any;
    autoAnimateEasing?: string | undefined;
    autoAnimateDuration?: number | undefined;
    autoAnimateUnmatched?: boolean | undefined;
    autoAnimateStyles?: string[] | undefined;

    autoSlide?: number | false | undefined;
    autoSlideStoppable?: boolean | undefined;
    autoSlideMethod?: any;
    defaultTiming?: number | null | undefined;

    mouseWheel?: boolean | undefined;
    previewLinks?: boolean | undefined;

    postMessage?: boolean | undefined;
    postMessageEvents?: boolean | undefined;
    focusBodyOnPageVisibilityChange?: boolean | undefined;

    transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom' | undefined;
    transitionSpeed?: 'default' | 'fast' | 'slow' | undefined;
    backgroundTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom' | undefined;

    pdfMaxPagesPerSlide?: number | undefined;
    pdfSeparateFragments?: boolean | undefined;
    pdfPageHeightOffset?: number | undefined;

    viewDistance?: number | undefined;
    mobileViewDistance?: number | undefined;

    display?: string | undefined;

    hideInactiveCursor?: boolean | undefined;
    hideCursorTime?: number | undefined;
    hideAddressBar?: boolean | undefined;

    plugins?: Plugin[] | undefined;

    // https://github.com/reveal/revealjs.com/blob/master/src/backgrounds.md
    parallaxBackgroundImage?: string | undefined;
    parallaxBackgroundSize?: string | undefined;
    parallaxBackgroundHorizontal?: number | undefined;
    parallaxBackgroundVertical?: number | undefined;

    // https://github.com/reveal/revealjs.com/blob/master/src/code.md
    highlight?: any;

    // https://github.com/reveal/revealjs.com/blob/master/src/markdown.md
    markdown?: any;

    // https://github.com/reveal/revealjs.com/blob/master/src/math.md
    katex?: any;
    mathjax2?: any;
    mathjax3?: any;

    // https://github.com/reveal/revealjs.com/blob/master/src/presentation-size.md
    width?: number | string | undefined;
    height?: number | string | undefined;
    margin?: number | string | undefined;
    minScale?: number | string | undefined;
    maxScale?: number | string | undefined;

    // https://github.com/reveal/multiplex
    multiplex?: MultiplexConfig | undefined;

    // https://github.com/reveal/revealjs.com/blob/master/src/plugins.md
    dependencies?: RevealDependency[] | undefined;

    // NOTE: could no longer find the below fields in the reveal.js docs
    math?: MathConfig | undefined;
    rollingLinks?: boolean | undefined;
    theme?: string | undefined;
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
