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
