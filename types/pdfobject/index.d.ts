export as namespace PDFObject;
export function embed(url: string, target?: any, options?: Options): HTMLElement;
export const pdfobjectversion: "2.2.3";
export const supportsPDFs: boolean;

export interface Options {
    id?: string | undefined;
    page?: boolean | undefined;
    pdfOpenParams?: Record<string, string | number | boolean> | undefined;
    fallbackLink?: boolean | string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    assumptionMode?: boolean | undefined;
    forcePDFJS?: boolean | undefined;
    supportRedirect?: boolean | undefined;
    omitInlineStyles?: boolean | undefined;
    suppressConsole?: boolean | undefined;
    forceIframe?: boolean | undefined;
    PDFJS_URL?: string | undefined;
}
