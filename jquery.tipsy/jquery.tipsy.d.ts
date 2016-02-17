// Type definitions for jQuery.tipsy
// Project: http://onehackoranother.com/projects/jquery/tipsy/
// Definitions by: Brian Dukes <https://github.com/bdukes/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {
    /**
    * initialize tipsy plugin
    */
    tipsy: JQueryTipsy.Tipsy;
}

declare module JQueryTipsy {
    interface Options {
        /**
        * delay before showing tooltip (ms)
        * 
        * default: 0
        */
        delayIn?: number;
        /**
        * delay before hiding  tooltip (ms)
        * 
        * default: 0
        */
        delayOut?: number;
        /**
        * fade tooltips in/out?
        * 
        * default: false
        */
        fade?: boolean;
        /**
        * fallback text to use when no tooltip text
        * 
        * default: ''
        */
        fallback?: string;
        /**
        * gravity
        * 
        * default: 'n'
        */
        gravity?: any; // string or () => string
        /**
        * is tooltip content HTML?
        * 
        * default: false
        */
        html?: boolean;
        /**
        * use live event support?
        * 
        * default: false
        */
        live?: boolean;
        /**
        * pixel offset of tooltip from element
        * 
        * default: 0
        */
        offset?: number;
        /**
        * opacity of tooltip
        * 
        * default: 0.8
        */
        opacity?: number;
        /**
        * attribute/callback containing tooltip text
        * 
        * default: 'title'
        */
        title?: any; // string or () => string
        /**
        * how tooltip is triggered - hover | focus | manual
        * 
        * default: 'hover'
        */
        trigger?: string;
    }

    interface Tipsy {
        /**
        * initialize tipsy plugin
        */
        (options?: Options): JQuery;
        /**
        * determine gravity either to North or South automatically based on the element's location in the viewport
        */
        autoNS: () => string;
        /**
        * determine gravity either to West or East automatically based on the element's location in the viewport
        */
        autoWE: () => string;
        /**
        * determine gravity either to Southwest or Southeast automatically based on the element's location in the viewport
        */
        autoSWSE: () => string;
        /**
        * determine gravity either to Northwest or Northeast automatically based on the element's location in the viewport
        */
        autoNWNE: () => string;
    }
}
