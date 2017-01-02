// Type definitions for Reveal 3.3.0
// Project: https://github.com/hakimel/reveal.js/
// Definitions by: robertop87 <https://github.com/robertop87/>, Nava2 <https://github.com/Nava2/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Reveal:RevealStatic;

interface RevealStatic {
    initialize:(config:RevealOptions)=>void;
    configure:(diff:RevealOptions)=>void;

    // Navigation
    slide(indexh:number, indexv?:number, f?:number, o?:number):void;
    left():void;
    right():void;
    up():void;
    down():void;
    prev():void;
    next():void;
    prevFragment():boolean;
    nextFragment():boolean;

    // Randomize the order of slides
    shuffle():void;

    // Toogle presentation states
    toggleOverview(override?:boolean):void;
    togglePause(override?:boolean):void;
    toggleAutoSlide(override?:boolean):void;


    // Retrieves the previous and current slide elements
    getPreviousSlide():Element;
    getCurrentSlide():Element;

    getIndices(slide?:Element):{h:number; v:number;};
    getProgress():number;
    getTotalSlides():number;

    // Returns the speaker notes for the current slide
    getSlideNotes(slide:any):string;

    // States
    addEventListener(type:string, listener:Function, useCapture?:boolean):void;
    removeEventListener(type:string, listener:Function, useCapture?:boolean):void;

    // State Checks
    isFirstSlide():boolean;
    isLastSlide():boolean;
    isPaused():boolean;
    isOverview():boolean;
    isAutoSliding():boolean;

    // undocumented method
    layout():void;
    addEventListeners():void;
    removeEventListeners():void;
    getSlide(x:number, y?:number):Element;
    getScale():number;
    getConfig():RevealOptions;
    getQueryHash():any;
    setState(state:any):void;
    getState():any;

    // update slides after dynamic changes
    sync():void;
}

interface RevealOptions {
    // Configuration
    controls?:boolean;
    progress?:boolean;
    // https://github.com/hakimel/reveal.js/#slide-number
    slideNumber?:boolean|string;
   
    history?:boolean;

    // https://github.com/hakimel/reveal.js/#keyboard-bindings
    keyboard?:any;
    overview?:boolean;
    center?:boolean;
    touch?:boolean;
    loop?:boolean;
    rtl?:boolean;
    shuffle?:boolean;
    fragments?:boolean;
    embedded?:boolean;
    help?:boolean;
    showNotes?:boolean;
    autoSlide?:number;
    autoSlideStoppable?:boolean;
    autoSlideMethod?:any;
    mouseWheel?:boolean;
    hideAddressBar?:boolean;
    previewLinks?:boolean;
    transition?:string;
    transitionSpeed?:string;
    backgroundTransition?:string;
    viewDistance?:number;
    parallaxBackgroundImage?:string;
    parallaxBackgroundSize?:string;
    parallaxBackgroundHorizontal?:any;
    parallaxBackgroundVertical?:any;

    rollingLinks?:boolean;
    theme?:string;

    // Presentation Size
    // https://github.com/hakimel/reveal.js/#presentation-size
    width?:number|string;
    height?:number|string;
    margin?:number|string;
    minScale?:number|string;
    maxScale?:number|string;

    // Dependencies
    // https://github.com/hakimel/reveal.js/#dependencies
    dependencies?: RevealDependency[];

    // Exposes the reveal.js API through window.postMessage
    postMessage?: boolean;

    // Dispatches all reveal.js events to the parent window through postMessage
    postMessageEvents?: boolean;

    // https://github.com/hakimel/reveal.js/#multiplexing
    multiplex?: MultiplexConfig;

    // https://github.com/hakimel/reveal.js/#mathjax
    math?: MathConfig;
}

// https://github.com/hakimel/reveal.js/#multiplexing
interface MultiplexConfig {
    // Obtained from the socket.io server. Gives this (the master) control of the presentation
    secret?: string;
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

    // Location of socket.io server
    url: string;
}

// https://github.com/hakimel/reveal.js/#dependencies
interface RevealDependency {
    src:string;
    condition?: ()=>boolean;
    async?:boolean;
    callback?: ()=>void;
}
