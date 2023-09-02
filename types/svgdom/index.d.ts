// Type definitions for svgdom 0.1
// Project: https://github.com/svgdotjs/svgdom#readme
// Definitions by: Alan Norbauer <https://github.com/altano>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Minimum TypeScript Version: 4.5

export function createSVGWindow(): SVGWindow;
export function createSVGDocument(): SVGDocument;

export function createWindow(): Window;
export function createDocument(): Document;

export function createHTMLWindow(): Window;
export function createHTMLDocument(): Document;

export interface SVGDocument extends Document {
    documentElement: HTMLElement & SVGSVGElement;
}

export interface SVGWindow extends Window {
    document: SVGDocument;
}
