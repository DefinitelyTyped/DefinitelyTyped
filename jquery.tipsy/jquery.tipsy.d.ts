// Type definitions for jQuery.tipsy
// Project: http://onehackoranother.com/projects/jquery/tipsy/
//          https://github.com/jaz303/tipsy
// Definitions by: Brian Dukes <https://github.com/bdukes/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {
    tipsy: JQueryTipsy.Tipsy;
}


declare module JQueryTipsy {
    interface Tipsy {
        (options?: Options): JQuery;
        autoNS: () => string;
        autoWE: () => string;
        autoSWSE: () => string;
        autoNWNE: () => string;
    }

    interface Options {
        delayIn?: number;
        delayOut?: number;
        fade?: boolean;
        fallback?: string;
        gravity?: any; // string or () => string
        html?: boolean;
        live?: boolean;
        offset?: number;
        opacity?: number;
        title?: any; // string or () => string
        trigger?: string;
    }
}
