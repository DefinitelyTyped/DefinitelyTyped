// Type definitions for jQuery.transit.js 0.9.9
// Project: http://ricostacruz.com/jquery.transit/
// Definitions by: MrBigDog2U <https://github.com/MrBigDog2U>
//                 Jhsosa <https://github.com/Jhsosa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="jquery"/>
// Transit //////////////////////////////////////////////////

interface JQueryTransitOptions {
    translate?: number[] | string | string[];
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    margin?: string;
    marginTop?: string;
    marginLeft?: string;
    marginRight?: string;
    marginBottom?: string;
    skewX?: string;
    skewY?: string;
    perspective?: string;
    rotate?: number | string;
    rotateX?: string;
    rotateY?: string;
    rotate3d?: string;
    transform?: string;
    transformOrigin?: string;
    opacity?: number;
    duration?: number;
    delay?: number;
    easing?: string;
    complete?: () => void;
    scale?: number | number[];
}

////////////////////////////////////////////////////////////////////////////////////////////////////

interface JQuery {
    transition(options: JQueryTransitOptions): JQuery;
    transition(options: JQueryTransitOptions, duration: number): JQuery;
    transition(options: JQueryTransitOptions, easing: string): JQuery;
    transition(options: JQueryTransitOptions, duration: number, easing: string): JQuery;
    transition(options: JQueryTransitOptions, complete: () => void): JQuery;
    transition(options: JQueryTransitOptions, duration: number, easing: string, complete: () => void): JQuery;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     */
    css(propertyName: string, value: number[]): JQuery;
}
