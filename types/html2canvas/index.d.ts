// Type definitions for html2canvas.js 0.5
// Project: https://github.com/niklasvh/html2canvas
// Definitions by: Richard Hepburn <https://github.com/rwhepburn/>, Pei-Tang Huang <https://github.com/tan9/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace Html2Canvas {
    interface Html2CanvasOptions {
        /** Whether to allow cross-origin images to taint the canvas */
        allowTaint?: boolean;

        /** Canvas background color, if none is specified in DOM. Set undefined for transparent */
        background?: string;

        /** Define the heigt of the canvas in pixels. If null, renders with full height of the window. */
        height?: number;

        /** Whether to render each letter seperately. Necessary if letter-spacing is used. */
        letterRendering?: boolean;

        /** Whether to log events in the console. */
        logging?: boolean;

        /** Url to the proxy which is to be used for loading cross-origin images. If left empty, cross-origin images won't be loaded. */
        proxy?: string;

        /** Whether to test each image if it taints the canvas before drawing them */
        taintTest?: boolean;

        /** Timeout for loading images, in milliseconds. Setting it to 0 will result in no timeout. */
        timeout?: number;

        /** Define the width of the canvas in pixels. If null, renders with full width of the window. */
        width?: number;

        /** Whether to attempt to load cross-origin images as CORS served, before reverting back to proxy. */
        useCORS?: boolean;

        /** Use svg powered rendering where available (FF11+). */
        svgRendering?: boolean;
    }
}

interface Html2CanvasStatic {

    /**
      * Renders an HTML element to a canvas so that a screenshot can be generated.
      *
      * The screenshot is based on the DOM and as such may not be 100% accurate to the real representation as it does not make an actual screenshot,
      * but builds the screenshot based on the information available on the page.
      *
      * @param {HTMLElement} element The HTML element which will be rendered to the canvas. Use the root element to render the entire window.
      * @param {Html2CanvasOptions} options The options object that controls how the element will be rendered.
      */
    (element: HTMLElement, options?: Html2Canvas.Html2CanvasOptions): Html2CanvasPromise<HTMLCanvasElement>;
}

// FIXME:
// Find out a way to dependent on real Promise interface.
// And remove following custome Promise interface.
interface Html2CanvasThenable<R> {
    then<U>(onFulfilled?: (value: R) => U | Html2CanvasThenable<U>, onRejected?: (error: any) => U | Html2CanvasThenable<U>): Html2CanvasThenable<U>;
    then<U>(onFulfilled?: (value: R) => U | Html2CanvasThenable<U>, onRejected?: (error: any) => void): Html2CanvasThenable<U>;
}

interface Html2CanvasPromise<R> extends Html2CanvasThenable<R> {
    then<U>(onFulfilled?: (value: R) => U | Html2CanvasThenable<U>, onRejected?: (error: any) => U | Html2CanvasThenable<U>): Html2CanvasPromise<U>;
    then<U>(onFulfilled?: (value: R) => U | Html2CanvasThenable<U>, onRejected?: (error: any) => void): Html2CanvasPromise<U>;
    catch<U>(onRejected?: (error: any) => U | Html2CanvasThenable<U>): Html2CanvasPromise<U>;
}

declare module 'html2canvas' {
    export = html2canvas;
}

declare var html2canvas: Html2CanvasStatic;
