// Type definitions for canvas-fit 1.5
// Project: https://github.com/hughsk/canvas-fit
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Creates a resize function for your canvas element. Calling this function will resize the canvas to fit its parent element.
 */
declare function fit(
    canvas: HTMLCanvasElement | SVGElement,
    parent?: EventTarget | Document | HTMLElement,
    scale?: string | number,
): resize;

interface resize {
    (this: any, ev: any): any;
    /**
     * Dynamically change the canvas' target scale.
     * Note that you still need to manually trigger a resize after doing this.
     */
    scale?: number;
    /**
     * Dynamically change the canvas' target scale.
     * Note that you still need to manually trigger a resize after doing this.
     * Instead of filling a given element, explicitly set the width and height of the canvas.
     * Note that this value will still be scaled up according to resize.scale
     */
    parent?: Element | (() => [number, number]);
}

/**
 * Small module for fitting a canvas element within the bounds of its parent.
 * Useful, for example, for making a canvas fill the screen. Works with SVG elements too!
 */
export = fit;
