// Type definitions for Foundation Sites v6.0.4
// Project: http://foundation.zurb.com/
// Definitions by: Sam Vloeberghs <https://github.com/samvloeberghs/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

declare module Foundation {

    // http://foundation.zurb.com/sites/docs/abide.html#javascript-reference
    export interface Abide {
        requiredCheck: (element: Object) => boolean;
        findLabel: (element:Object) => boolean;
        addErrorClasses: (element: Object) => void;
        removeErrorClasses: (element:Object) => void;
        validateInput: (element: Object, form: Object) => void;
        validateForm: (element: Object) => void;
        validateText: (element: Object) => boolean;
        validateRadio: (group: String) => boolean;
        resetform: ($form: Object) => void;
    }
    interface AbideOptions {

    }

    // http://foundation.zurb.com/sites/docs/accordion.html#javascript-reference
    export interface Accordion {
        toggle: ($target : JQuery) => void;
        down: ($target : JQuery, firstTime: boolean) => void;
        up: ($target: JQuery) => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/accordion-menu.html#javascript-reference
    export interface AccordionMenu {
        toggle: ($target : JQuery) => void;
        down: ($target : JQuery, firstTime: boolean) => void;
        up: ($target: JQuery) => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/drilldown-menu.html#javascript-reference
    export interface Drilldown {
        _hideAll: ($elem : JQuery) => void;
        _show: ($elem : JQuery) => void;
        _hide: ($elem : JQuery) => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/dropdown.html#javascript-reference
    export interface Dropdown {
        getPositionClass: () => String;
        open: () => void;
        close: () => void;
        toggle: () => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/dropdown-menu.html#javascript-reference
    export interface DropdownMenu {
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/equalizer.html#javascript-reference
    export interface Equalizer {
        getHeights: (element: Object) => Array<any>;
        applyHeight: ($eqParent: Object, heights:Array) => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/interchange.html#javascript-reference
    export interface Interchange {
        replace: (path: String) => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/magellan.html#javascript-reference
    export interface Magellan {
        calcPoints: () => void;
        reflow: () => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/offcanvas.html#javascript-reference
    export interface OffCanvas {
        open: (event: Object, trigger : JQuery) => void;
        toggle: (event: Object, trigger : JQuery) => void;
        close: () => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/orbit.html#javascript-reference
    export interface Orbit {
        changeSlide: (isLTR: boolean, chosenSlide?: Object, idx?: number) => void;
        geoSync: () => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/reveal.html#javascript-reference
    export interface Reveal {
        open: () => void;
        toggle: () => void;
        close: () => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/slider.html#javascript-reference
    export interface Slider {
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/sticky.html#javascript-reference
    export interface Sticky {
        _pauseListeners: (scrollListener: String) => void;
        _calc: (checkSizes: boolean, scroll: number) => void;
        destroy: () => void;
        emCalc: (number: any) => void;
    }

    // http://foundation.zurb.com/sites/docs/tabs.html#javascript-reference
    export interface Tabs {
        _handleTabChange: ($target : JQuery) => void;
        selectTab: ($target : JQuery) => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/toggler.html#javascript-reference
    export interface Toggler {
        toggle: () => void;
        destroy: () => void;
    }

    // http://foundation.zurb.com/sites/docs/tooltip.html#javascript-reference
    export interface Tooltip {
        show: () => void;
        hide: () =>void;
        toggle: () => void;
        destroy: () => void;
    }

    // Utilities
    // ---------

    export interface Box {
        ImNotTouchingYou: (element: Object, parent?: Object, lrOnly?:boolean, tbOnly?:boolean) => boolean;
        GetDimensions: (element: Object) => Object;
        GetOffsets: (element: Object, anchor: Object, position:String, vOffset:number, hOffset:number, isOverflow:boolean) => Object;
    }

    export interface KeyBoard {
        parseKey: (event:any) => String;
        findFocusable: ($element:Object) => Object;
    }

    export interface MediaQuery {
        get: (size:String) => String;
        atLeast: (size:String) => boolean;
        queries:Array<any>;
        current:any;
    }

    export interface Motion {
        animateIn: (element: Object, animation:any, cb:Function) => void;
        animateOut: (element: Object, animation:any, cb:Function) => void;
    }

    interface Move {
        // TODO
    }

    interface Nest {
        // TODO
    }

    export interface Timer {
        start: () => void;
        restart: () => void;
        pause: () => void;
    }

    interface Touch {
        // TODO :extension on jQuery
    }

    interface Triggers {
        // TODO :extension on jQuery
    }

    interface FoundationStatic {
        version : string;

        rtl: () => boolean;
        plugin: (plugin: Object, name:String) => void;
        registerPlugin: (plugin: Object) => void;
        unregisterPlugin: (plugin: Object) => void;
        GetYoDigits: (length: number, namespace?: String) => String;
        reflow: (elem: Object, plugins?: Array<String>|String) => void;
        getFnName: (fn: String) => String;
        transitionend: () => String;

        util : {
            throttle(func : (...args : any[]) => any, delay : number) : (...args : any[]) => any;
        };
        onImagesLoaded: (images:Object, cb:Function) => void;

        Abide: (element:Object, options:AbideOptions) => void;

    }
}

interface JQuery {
    foundation(method:String|Array<any>) : JQuery;
}

declare var Foundation : Foundation.FoundationStatic;
