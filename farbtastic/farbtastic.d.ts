// Type definitions for Farbtastic: jQuery Color Wheel v2.0.0-alpha.1
// Project: http://mattfarina.github.io/farbtastic/
// Definitions by: Matt Brooks <https://github.com/EnableSoftware>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module JQueryFarbtastic {
    type Placeholder = string | Element | JQuery;
    type CallbackFunction = (color: string) => any; 
    type Callback = CallbackFunction | Placeholder; 
    
    interface Options {
        callback?: Callback;
        width?: number;
        wheelWidth?: number;
    }
    
    interface Farbtastic {
        linked: CallbackFunction | JQuery;
        color: string;
        hsl: number[];
        
        linkTo(callback: Callback): Farbtastic;
        setColor(color: string | number[]): Farbtastic;
        setHSL(hsl: number[]): Farbtastic;
    }
}

interface JQueryStatic {
    farbtastic(placeholder: JQueryFarbtastic.Placeholder, callback: JQueryFarbtastic.Callback): JQueryFarbtastic.Farbtastic;
    farbtastic(placeholder: JQueryFarbtastic.Placeholder, options: JQueryFarbtastic.Options): JQueryFarbtastic.Farbtastic;
    farbtastic(placeholder: JQueryFarbtastic.Placeholder): JQueryFarbtastic.Farbtastic;
}

interface JQuery {
    farbtastic(callback: JQueryFarbtastic.Callback): JQuery;
    farbtastic(options: JQueryFarbtastic.Options): JQuery;
    farbtastic(): JQuery;
}