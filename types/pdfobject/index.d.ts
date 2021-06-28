// Type definitions for PDFObject 2.2
// Project: https://github.com/pipwerks/PDFObject
// Definitions by: Niels Boogaard <https://github.com/nielsboogaard>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
export as namespace PDFObject;
export function embed(url: string, target?: any, options?: Options): HTMLElement;
export const pdfobjectversion: "2.2.3";
export const supportsPDFs: boolean;

export interface Options {
    id?: string;
    page?: boolean;
    pdfOpenParams?: Record<string, string | number | boolean>;
    fallbackLink?: boolean;
    width?: string;
    height?: string;
    assumptionMode?: boolean;
    forcePDFJS?: boolean;
    supportRedirect?: boolean;
    omitInlineStyles?: boolean;
    suppressConsole?: boolean;
    forceIframe?: boolean;
    PDFJS_URL?: string;
}
