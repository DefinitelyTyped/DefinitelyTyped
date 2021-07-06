// Type definitions for html2canvas.js 1.0-alpha
// Project: https://github.com/niklasvh/html2canvas
// Definitions by: Richard Hepburn <https://github.com/rwhepburn>
//                 Pei-Tang Huang <https://github.com/tan9>
//                 Sebastian Schocke <https://github.com/sschocke>
//                 Rickard Staaf <https://github.com/Ristaaf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface Html2CanvasOptions {
    /** Whether to parse and render the element asynchronously */
    async?: boolean | undefined;
    /** Whether to allow cross-origin images to taint the canvas */
    allowTaint?: boolean | undefined;
    /** Canvas background color, if none is specified in DOM. Set null for transparent */
    backgroundColor?: string | null | undefined;
    /** Existing canvas element to use as a base for drawing on */
    canvas?: any;
    /** Whether to use ForeignObject rendering if the browser supports it */
    foreignObjectRendering?: boolean | undefined;
    /** Predicate function which removes the matching elements from the render. */
    ignoreElements?: ((element: HTMLElement) => boolean) | undefined;
    /** Timeout for loading images, in milliseconds. Setting it to 0 will result in no timeout. */
    imageTimeout?: number | undefined;
    /** Whether to render each letter seperately. Necessary if letter-spacing is used. */
    letterRendering?: boolean | undefined;
    /** Whether to log events in the console. */
    logging?: boolean | undefined;
    /** Callback function which is called when the Document has been cloned for rendering, can be used to modify the contents that will be rendered without affecting the original source document. */
    onclone?: { (doc: HTMLDocument): void } | undefined;
    /** Url to the proxy which is to be used for loading cross-origin images. If left empty, cross-origin images won't be loaded. */
    proxy?: string | undefined;
    /** Whether to cleanup the cloned DOM elements html2canvas creates temporarily */
    removeContainer?: boolean | undefined;
    /** The scale to use for rendering. Defaults to the browsers device pixel ratio. */
    scale?: number | undefined;
    /** Use svg powered rendering where available (FF11+). */
    svgRendering?: boolean | undefined;
    /** Whether to test each image if it taints the canvas before drawing them */
    taintTest?: boolean | undefined;
    /** Whether to attempt to load cross-origin images as CORS served, before reverting back to proxy. */
    useCORS?: boolean | undefined;
    /** Define the width of the canvas in pixels. If null, renders with full width of the window. */
    width?: number | undefined;
    /** Define the heigt of the canvas in pixels. If null, renders with full height of the window. */
    height?: number | undefined;
    /** Crop canvas x-coordinate */
    x?: number | undefined;
    /** Crop canvas y-coordinate */
    y?: number | undefined;
    /** The x-scroll position to used when rendering element, (for example if the Element uses position: fixed ) */
    scrollX?: number | undefined;
    /** The y-scroll position to used when rendering element, (for example if the Element uses position: fixed ) */
    scrollY?: number | undefined;
    /** Window width to use when rendering Element, which may affect things like Media queries */
    windowWidth?: number | undefined;
    /** Window height to use when rendering Element, which may affect things like Media queries */
    windowHeight?: number | undefined;
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
    (element: HTMLElement, options?: Html2CanvasOptions): Promise<HTMLCanvasElement>;
}

declare module 'html2canvas' {
    export = html2canvas;
}

declare var html2canvas: Html2CanvasStatic;
