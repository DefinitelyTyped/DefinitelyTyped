/// <reference types="jquery"/>
// Transit //////////////////////////////////////////////////

interface JQueryTransitOptions {
    translate?: number[] | string | string[] | undefined;
    x?: number | string | undefined;
    y?: number | string | undefined;
    width?: number | string | undefined;
    height?: number | string | undefined;
    margin?: string | undefined;
    marginTop?: string | undefined;
    marginLeft?: string | undefined;
    marginRight?: string | undefined;
    marginBottom?: string | undefined;
    skewX?: string | undefined;
    skewY?: string | undefined;
    perspective?: string | undefined;
    rotate?: number | string | undefined;
    rotateX?: string | undefined;
    rotateY?: string | undefined;
    rotate3d?: string | undefined;
    transform?: string | undefined;
    transformOrigin?: string | undefined;
    opacity?: number | undefined;
    duration?: number | undefined;
    delay?: number | undefined;
    easing?: string | undefined;
    complete?: (() => void) | undefined;
    scale?: number | number[] | undefined;
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
